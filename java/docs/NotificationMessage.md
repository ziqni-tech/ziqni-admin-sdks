

# NotificationMessage

## anyOf schemas
* [EntityChangeSubscription](EntityChangeSubscription.md)
* [EntityChangeSubscriptionResponse](EntityChangeSubscriptionResponse.md)
* [EntityChanged](EntityChanged.md)
* [EntityStateChanged](EntityStateChanged.md)
* [Object](Object.md)
* [SubscriptionTypes](SubscriptionTypes.md)

## Example
```java
// Import classes:
import com.ziqni.admin.sdk.model.NotificationMessage;
import com.ziqni.admin.sdk.model.EntityChangeSubscription;
import com.ziqni.admin.sdk.model.EntityChangeSubscriptionResponse;
import com.ziqni.admin.sdk.model.EntityChanged;
import com.ziqni.admin.sdk.model.EntityStateChanged;
import com.ziqni.admin.sdk.model.Object;
import com.ziqni.admin.sdk.model.SubscriptionTypes;

public class Example {
    public static void main(String[] args) {
        NotificationMessage exampleNotificationMessage = new NotificationMessage();

        // create a new EntityChangeSubscription
        EntityChangeSubscription exampleEntityChangeSubscription = new EntityChangeSubscription();
        // set NotificationMessage to EntityChangeSubscription
        exampleNotificationMessage.setActualInstance(exampleEntityChangeSubscription);
        // to get back the EntityChangeSubscription set earlier
        EntityChangeSubscription testEntityChangeSubscription = (EntityChangeSubscription) exampleNotificationMessage.getActualInstance();

        // create a new EntityChangeSubscriptionResponse
        EntityChangeSubscriptionResponse exampleEntityChangeSubscriptionResponse = new EntityChangeSubscriptionResponse();
        // set NotificationMessage to EntityChangeSubscriptionResponse
        exampleNotificationMessage.setActualInstance(exampleEntityChangeSubscriptionResponse);
        // to get back the EntityChangeSubscriptionResponse set earlier
        EntityChangeSubscriptionResponse testEntityChangeSubscriptionResponse = (EntityChangeSubscriptionResponse) exampleNotificationMessage.getActualInstance();

        // create a new EntityChanged
        EntityChanged exampleEntityChanged = new EntityChanged();
        // set NotificationMessage to EntityChanged
        exampleNotificationMessage.setActualInstance(exampleEntityChanged);
        // to get back the EntityChanged set earlier
        EntityChanged testEntityChanged = (EntityChanged) exampleNotificationMessage.getActualInstance();

        // create a new EntityStateChanged
        EntityStateChanged exampleEntityStateChanged = new EntityStateChanged();
        // set NotificationMessage to EntityStateChanged
        exampleNotificationMessage.setActualInstance(exampleEntityStateChanged);
        // to get back the EntityStateChanged set earlier
        EntityStateChanged testEntityStateChanged = (EntityStateChanged) exampleNotificationMessage.getActualInstance();

        // create a new Object
        Object exampleObject = new Object();
        // set NotificationMessage to Object
        exampleNotificationMessage.setActualInstance(exampleObject);
        // to get back the Object set earlier
        Object testObject = (Object) exampleNotificationMessage.getActualInstance();

        // create a new SubscriptionTypes
        SubscriptionTypes exampleSubscriptionTypes = new SubscriptionTypes();
        // set NotificationMessage to SubscriptionTypes
        exampleNotificationMessage.setActualInstance(exampleSubscriptionTypes);
        // to get back the SubscriptionTypes set earlier
        SubscriptionTypes testSubscriptionTypes = (SubscriptionTypes) exampleNotificationMessage.getActualInstance();
    }
}
```


