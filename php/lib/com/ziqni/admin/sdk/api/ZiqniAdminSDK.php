<?php

namespace com\ziqni\admin\sdk\api;

abstract class ZiqniAdminSDK
{
    /**
     * @var Client[]
     */
    private $clients = [];

    /**
     * @return Client
     */
    abstract protected function getClient();

    /**
     * @return StatefulStomp
     * @throws \Stomp\Exception\ConnectionException
     */
    final protected function getStatefulStomp()
    {
        $client = $this->getClient();
        $client->getConnection()->setReadTimeout(0, 750000);
        $this->clients[] = $client;
        return new StatefulStomp($client);
    }

    public function multipleSubscribe()
    {
        $stomp = $this->getStatefulStomp();
        $queues = ['/queue/tests-multisub-a', '/queue/tests-multisub-b', '/queue/tests-multisub-c'];

        $messages = [];
        foreach ($queues as $queue) {
            $stomp->subscribe($queue);
            $messages[$queue] = new Message(sprintf('send-message-%d', rand(0, PHP_INT_MAX)));
        }

        foreach ($messages as $queue => $message) {
            $this->assertTrue($stomp->send($queue, $message));
        }

        while ((!empty($messages)) && ($message = $stomp->read())) {
            foreach ($stomp->getSubscriptions() as $subscription) {
                if ($subscription->belongsTo($message)) {
                    $this->assertEquals(
                        $messages[$subscription->getDestination()]->body,
                        $message->body,
                        'Message is not matching original message send to queue.'
                    );
                    unset($messages[$subscription->getDestination()]);
                }
            }
        }

        $this->assertEmpty($messages, 'Not all messages have been received!');


        foreach ($stomp->getSubscriptions() as $subscription) {
            $stomp->unsubscribe($subscription->getSubscriptionId());
        }

        $this->assertEmpty($stomp->getSubscriptions());
    }
}
