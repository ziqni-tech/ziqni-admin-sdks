package com.ziqni.sdk.admin;

import com.ziqni.sdk.admin.api.*;
import com.ziqni.sdk.admin.streaming.WsAddress;
import com.ziqni.sdk.admin.streaming.StreamingClient;
import java.time.Duration;
import java.util.concurrent.atomic.AtomicReference;
import java.util.function.Consumer;
import java.util.function.Supplier;

public abstract class ZiqniAdminApiFactory {

    private static StreamingClient streamingClient;
    private static Boolean initialised = false;
    private static AccountMessagesApiWs accountMessagesApiWs;
    private static AchievementsApiWs achievementsApiWs;
    private static ActionTypesApiWs actionTypesApiWs;
    private static ApiKeysApiWs apiKeysApiWs;
    private static AwardsApiWs awardsApiWs;
    private static CollaboratorsApiWs collaboratorsApiWs;
    private static CompetitionsApiWs competitionsApiWs;
    private static ComputeEngineApiWs computeEngineApiWs;
    private static ConsumersApiWs consumersApiWs;
    private static ContestsApiWs contestsApiWs;
    private static CustomFieldsApiWs customFieldsApiWs;
    private static DefaultApiWs defaultApiWs;
    private static EntityChangesApiWs entityChangesApiWs;
    private static EventsApiWs eventsApiWs;
    private static FileObjectsApiWs fileObjectsApiWs;
    private static FileRepositoriesApiWs fileRepositoriesApiWs;
    private static LanguagesApiWs languagesApiWs;
    private static MemberMessagesApiWs memberMessagesApiWs;
    private static MemberTokenApiWs memberTokenApiWs;
    private static MembersApiWs membersApiWs;
    private static NotificationsApiWs notificationsApiWs;
    private static ProductsApiWs productsApiWs;
    private static RewardTypesApiWs rewardTypesApiWs;
    private static RewardsApiWs rewardsApiWs;
    private static RulesApiWs rulesApiWs;
    private static SpacesApiWs spacesApiWs;
    private static TagsApiWs tagsApiWs;
    private static TransformersApiWs transformersApiWs;
    private static TranslationsApiWs translationsApiWs;
    private static UnitsOfMeasureApiWs unitsOfMeasureApiWs;
    private static UserApiWs userApiWs;
    private static WebhooksApiWs webhooksApiWs;
    

    public static <T> T initialise(Supplier<T> then) throws Exception {
        initialise();
        return then.get();
    }

    public static void initialise() throws Exception {
        if(initialised) return;

        ZiqniAdminApiFactory.initialised = true;

        streamingClient = new StreamingClient(new WsAddress().getAddress());
    }

    private static void init() {
        try {
            initialise();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public static Boolean getInitialised() {
        return initialised;
    }

    public static StreamingClient getStreamingClient() {
        assert getInitialised();
        return streamingClient;
    }
     public static AccountMessagesApiWs getAccountMessagesApi() {
        /**
        ------
        
        */
        if(ZiqniAdminApiFactory.accountMessagesApiWs == null) {
            init();
            ZiqniAdminApiFactory.accountMessagesApiWs = new AccountMessagesApiWs(streamingClient, Duration.ofSeconds(5));
        }

        return ZiqniAdminApiFactory.accountMessagesApiWs;
    }

     public static AchievementsApiWs getAchievementsApi() {
        /**
        ------
        
        */
        if(ZiqniAdminApiFactory.achievementsApiWs == null) {
            init();
            ZiqniAdminApiFactory.achievementsApiWs = new AchievementsApiWs(streamingClient, Duration.ofSeconds(5));
        }

        return ZiqniAdminApiFactory.achievementsApiWs;
    }

     public static ActionTypesApiWs getActionTypesApi() {
        /**
        ------
        
        */
        if(ZiqniAdminApiFactory.actionTypesApiWs == null) {
            init();
            ZiqniAdminApiFactory.actionTypesApiWs = new ActionTypesApiWs(streamingClient, Duration.ofSeconds(5));
        }

        return ZiqniAdminApiFactory.actionTypesApiWs;
    }

     public static ApiKeysApiWs getApiKeysApi() {
        /**
        ------
        
        */
        if(ZiqniAdminApiFactory.apiKeysApiWs == null) {
            init();
            ZiqniAdminApiFactory.apiKeysApiWs = new ApiKeysApiWs(streamingClient, Duration.ofSeconds(5));
        }

        return ZiqniAdminApiFactory.apiKeysApiWs;
    }

     public static AwardsApiWs getAwardsApi() {
        /**
        ------
        
        */
        if(ZiqniAdminApiFactory.awardsApiWs == null) {
            init();
            ZiqniAdminApiFactory.awardsApiWs = new AwardsApiWs(streamingClient, Duration.ofSeconds(5));
        }

        return ZiqniAdminApiFactory.awardsApiWs;
    }

     public static CollaboratorsApiWs getCollaboratorsApi() {
        /**
        ------
        
        */
        if(ZiqniAdminApiFactory.collaboratorsApiWs == null) {
            init();
            ZiqniAdminApiFactory.collaboratorsApiWs = new CollaboratorsApiWs(streamingClient, Duration.ofSeconds(5));
        }

        return ZiqniAdminApiFactory.collaboratorsApiWs;
    }

     public static CompetitionsApiWs getCompetitionsApi() {
        /**
        ------
        
        */
        if(ZiqniAdminApiFactory.competitionsApiWs == null) {
            init();
            ZiqniAdminApiFactory.competitionsApiWs = new CompetitionsApiWs(streamingClient, Duration.ofSeconds(5));
        }

        return ZiqniAdminApiFactory.competitionsApiWs;
    }

     public static ComputeEngineApiWs getComputeEngineApi() {
        /**
        ------
        
        */
        if(ZiqniAdminApiFactory.computeEngineApiWs == null) {
            init();
            ZiqniAdminApiFactory.computeEngineApiWs = new ComputeEngineApiWs(streamingClient, Duration.ofSeconds(5));
        }

        return ZiqniAdminApiFactory.computeEngineApiWs;
    }

     public static ConsumersApiWs getConsumersApi() {
        /**
        ------
        
        */
        if(ZiqniAdminApiFactory.consumersApiWs == null) {
            init();
            ZiqniAdminApiFactory.consumersApiWs = new ConsumersApiWs(streamingClient, Duration.ofSeconds(5));
        }

        return ZiqniAdminApiFactory.consumersApiWs;
    }

     public static ContestsApiWs getContestsApi() {
        /**
        ------
        
        */
        if(ZiqniAdminApiFactory.contestsApiWs == null) {
            init();
            ZiqniAdminApiFactory.contestsApiWs = new ContestsApiWs(streamingClient, Duration.ofSeconds(5));
        }

        return ZiqniAdminApiFactory.contestsApiWs;
    }

     public static CustomFieldsApiWs getCustomFieldsApi() {
        /**
        ------
        
        */
        if(ZiqniAdminApiFactory.customFieldsApiWs == null) {
            init();
            ZiqniAdminApiFactory.customFieldsApiWs = new CustomFieldsApiWs(streamingClient, Duration.ofSeconds(5));
        }

        return ZiqniAdminApiFactory.customFieldsApiWs;
    }

     public static DefaultApiWs getDefaultApi() {
        /**
        ------
        
        */
        if(ZiqniAdminApiFactory.defaultApiWs == null) {
            init();
            ZiqniAdminApiFactory.defaultApiWs = new DefaultApiWs(streamingClient, Duration.ofSeconds(5));
        }

        return ZiqniAdminApiFactory.defaultApiWs;
    }

     public static EntityChangesApiWs getEntityChangesApi() {
        /**
        ------,
        entityChanged: Option<EntityChanged>,
        entityChangedentityChangedPost
        entityStateChanged: Option<EntityStateChanged>,
        entityStateChangedentityStateChangedPost
        
        */
        if(ZiqniAdminApiFactory.entityChangesApiWs == null) {
            init();
            ZiqniAdminApiFactory.entityChangesApiWs = new EntityChangesApiWs(streamingClient, Duration.ofSeconds(5));
        }

        return ZiqniAdminApiFactory.entityChangesApiWs;
    }

     public static EventsApiWs getEventsApi() {
        /**
        ------
        
        */
        if(ZiqniAdminApiFactory.eventsApiWs == null) {
            init();
            ZiqniAdminApiFactory.eventsApiWs = new EventsApiWs(streamingClient, Duration.ofSeconds(5));
        }

        return ZiqniAdminApiFactory.eventsApiWs;
    }

     public static FileObjectsApiWs getFileObjectsApi() {
        /**
        ------
        
        */
        if(ZiqniAdminApiFactory.fileObjectsApiWs == null) {
            init();
            ZiqniAdminApiFactory.fileObjectsApiWs = new FileObjectsApiWs(streamingClient, Duration.ofSeconds(5));
        }

        return ZiqniAdminApiFactory.fileObjectsApiWs;
    }

     public static FileRepositoriesApiWs getFileRepositoriesApi() {
        /**
        ------
        
        */
        if(ZiqniAdminApiFactory.fileRepositoriesApiWs == null) {
            init();
            ZiqniAdminApiFactory.fileRepositoriesApiWs = new FileRepositoriesApiWs(streamingClient, Duration.ofSeconds(5));
        }

        return ZiqniAdminApiFactory.fileRepositoriesApiWs;
    }

     public static LanguagesApiWs getLanguagesApi() {
        /**
        ------
        
        */
        if(ZiqniAdminApiFactory.languagesApiWs == null) {
            init();
            ZiqniAdminApiFactory.languagesApiWs = new LanguagesApiWs(streamingClient, Duration.ofSeconds(5));
        }

        return ZiqniAdminApiFactory.languagesApiWs;
    }

     public static MemberMessagesApiWs getMemberMessagesApi() {
        /**
        ------
        
        */
        if(ZiqniAdminApiFactory.memberMessagesApiWs == null) {
            init();
            ZiqniAdminApiFactory.memberMessagesApiWs = new MemberMessagesApiWs(streamingClient, Duration.ofSeconds(5));
        }

        return ZiqniAdminApiFactory.memberMessagesApiWs;
    }

     public static MemberTokenApiWs getMemberTokenApi() {
        /**
        ------
        
        */
        if(ZiqniAdminApiFactory.memberTokenApiWs == null) {
            init();
            ZiqniAdminApiFactory.memberTokenApiWs = new MemberTokenApiWs(streamingClient, Duration.ofSeconds(5));
        }

        return ZiqniAdminApiFactory.memberTokenApiWs;
    }

     public static MembersApiWs getMembersApi() {
        /**
        ------
        
        */
        if(ZiqniAdminApiFactory.membersApiWs == null) {
            init();
            ZiqniAdminApiFactory.membersApiWs = new MembersApiWs(streamingClient, Duration.ofSeconds(5));
        }

        return ZiqniAdminApiFactory.membersApiWs;
    }

     public static NotificationsApiWs getNotificationsApi() {
        /**
        ------
        
        */
        if(ZiqniAdminApiFactory.notificationsApiWs == null) {
            init();
            ZiqniAdminApiFactory.notificationsApiWs = new NotificationsApiWs(streamingClient, Duration.ofSeconds(5));
        }

        return ZiqniAdminApiFactory.notificationsApiWs;
    }

     public static ProductsApiWs getProductsApi() {
        /**
        ------
        
        */
        if(ZiqniAdminApiFactory.productsApiWs == null) {
            init();
            ZiqniAdminApiFactory.productsApiWs = new ProductsApiWs(streamingClient, Duration.ofSeconds(5));
        }

        return ZiqniAdminApiFactory.productsApiWs;
    }

     public static RewardTypesApiWs getRewardTypesApi() {
        /**
        ------
        
        */
        if(ZiqniAdminApiFactory.rewardTypesApiWs == null) {
            init();
            ZiqniAdminApiFactory.rewardTypesApiWs = new RewardTypesApiWs(streamingClient, Duration.ofSeconds(5));
        }

        return ZiqniAdminApiFactory.rewardTypesApiWs;
    }

     public static RewardsApiWs getRewardsApi() {
        /**
        ------
        
        */
        if(ZiqniAdminApiFactory.rewardsApiWs == null) {
            init();
            ZiqniAdminApiFactory.rewardsApiWs = new RewardsApiWs(streamingClient, Duration.ofSeconds(5));
        }

        return ZiqniAdminApiFactory.rewardsApiWs;
    }

     public static RulesApiWs getRulesApi() {
        /**
        ------
        
        */
        if(ZiqniAdminApiFactory.rulesApiWs == null) {
            init();
            ZiqniAdminApiFactory.rulesApiWs = new RulesApiWs(streamingClient, Duration.ofSeconds(5));
        }

        return ZiqniAdminApiFactory.rulesApiWs;
    }

     public static SpacesApiWs getSpacesApi() {
        /**
        ------
        
        */
        if(ZiqniAdminApiFactory.spacesApiWs == null) {
            init();
            ZiqniAdminApiFactory.spacesApiWs = new SpacesApiWs(streamingClient, Duration.ofSeconds(5));
        }

        return ZiqniAdminApiFactory.spacesApiWs;
    }

     public static TagsApiWs getTagsApi() {
        /**
        ------
        
        */
        if(ZiqniAdminApiFactory.tagsApiWs == null) {
            init();
            ZiqniAdminApiFactory.tagsApiWs = new TagsApiWs(streamingClient, Duration.ofSeconds(5));
        }

        return ZiqniAdminApiFactory.tagsApiWs;
    }

     public static TransformersApiWs getTransformersApi() {
        /**
        ------
        
        */
        if(ZiqniAdminApiFactory.transformersApiWs == null) {
            init();
            ZiqniAdminApiFactory.transformersApiWs = new TransformersApiWs(streamingClient, Duration.ofSeconds(5));
        }

        return ZiqniAdminApiFactory.transformersApiWs;
    }

     public static TranslationsApiWs getTranslationsApi() {
        /**
        ------
        
        */
        if(ZiqniAdminApiFactory.translationsApiWs == null) {
            init();
            ZiqniAdminApiFactory.translationsApiWs = new TranslationsApiWs(streamingClient, Duration.ofSeconds(5));
        }

        return ZiqniAdminApiFactory.translationsApiWs;
    }

     public static UnitsOfMeasureApiWs getUnitsOfMeasureApi() {
        /**
        ------
        
        */
        if(ZiqniAdminApiFactory.unitsOfMeasureApiWs == null) {
            init();
            ZiqniAdminApiFactory.unitsOfMeasureApiWs = new UnitsOfMeasureApiWs(streamingClient, Duration.ofSeconds(5));
        }

        return ZiqniAdminApiFactory.unitsOfMeasureApiWs;
    }

     public static UserApiWs getUserApi() {
        /**
        ------
        
        */
        if(ZiqniAdminApiFactory.userApiWs == null) {
            init();
            ZiqniAdminApiFactory.userApiWs = new UserApiWs(streamingClient, Duration.ofSeconds(5));
        }

        return ZiqniAdminApiFactory.userApiWs;
    }

     public static WebhooksApiWs getWebhooksApi() {
        /**
        ------
        
        */
        if(ZiqniAdminApiFactory.webhooksApiWs == null) {
            init();
            ZiqniAdminApiFactory.webhooksApiWs = new WebhooksApiWs(streamingClient, Duration.ofSeconds(5));
        }

        return ZiqniAdminApiFactory.webhooksApiWs;
    }

    
}
