

# Connection

## oneOf schemas
* [KafkaConnection](KafkaConnection.md)
* [RabbitMqConnection](RabbitMqConnection.md)
* [SqsConnection](SqsConnection.md)

## Example
```java
// Import classes:
import com.ziqni.admin.sdk.model.Connection;
import com.ziqni.admin.sdk.model.KafkaConnection;
import com.ziqni.admin.sdk.model.RabbitMqConnection;
import com.ziqni.admin.sdk.model.SqsConnection;

public class Example {
    public static void main(String[] args) {
        Connection exampleConnection = new Connection();

        // create a new KafkaConnection
        KafkaConnection exampleKafkaConnection = new KafkaConnection();
        // set Connection to KafkaConnection
        exampleConnection.setActualInstance(exampleKafkaConnection);
        // to get back the KafkaConnection set earlier
        KafkaConnection testKafkaConnection = (KafkaConnection) exampleConnection.getActualInstance();

        // create a new RabbitMqConnection
        RabbitMqConnection exampleRabbitMqConnection = new RabbitMqConnection();
        // set Connection to RabbitMqConnection
        exampleConnection.setActualInstance(exampleRabbitMqConnection);
        // to get back the RabbitMqConnection set earlier
        RabbitMqConnection testRabbitMqConnection = (RabbitMqConnection) exampleConnection.getActualInstance();

        // create a new SqsConnection
        SqsConnection exampleSqsConnection = new SqsConnection();
        // set Connection to SqsConnection
        exampleConnection.setActualInstance(exampleSqsConnection);
        // to get back the SqsConnection set earlier
        SqsConnection testSqsConnection = (SqsConnection) exampleConnection.getActualInstance();
    }
}
```


