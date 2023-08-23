/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.
 *
 * The version of the OpenAPI document: 3.0.7
 * Contact: support@ziqni.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import AchievementAllOf from './AchievementAllOf';
import AchievementStatus from './AchievementStatus';
import AchievementStrategies from './AchievementStrategies';
import DependantOn from './DependantOn';
import ModelDefault from './ModelDefault';
import OptParamModels from './OptParamModels';
import ProductReduced from './ProductReduced';
import Scheduling from './Scheduling';

/**
 * The Achievement model module.
 * @module model/Achievement
 * @version 0.0.26
 */
class Achievement {
    /**
     * Constructs a new <code>Achievement</code>.
     * @alias module:model/Achievement
     * @implements module:model/ModelDefault
     * @implements module:model/OptParamModels
     * @implements module:model/AchievementAllOf
     * @param id {String} A unique system generated identifier
     * @param spaceName {String} This is the space name which is linked to the account
     * @param created {Date} ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
     * @param name {String} A name for the Achievement. Can be translated
     * @param icon {String} An Icon id that has been pre uploaded to the system to display for Achievement
     * @param constraints {Array.<String>} Additional constraints, if set means true
     */
    constructor(id, spaceName, created, name, icon, constraints) { 
        ModelDefault.initialize(this, id, spaceName, created);OptParamModels.initialize(this);AchievementAllOf.initialize(this, name, icon, constraints);
        Achievement.initialize(this, id, spaceName, created, name, icon, constraints);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, spaceName, created, name, icon, constraints) { 
        obj['id'] = id;
        obj['spaceName'] = spaceName;
        obj['created'] = created;
        obj['name'] = name;
        obj['icon'] = icon;
        obj['constraints'] = constraints;
    }

    /**
     * Constructs a <code>Achievement</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Achievement} obj Optional instance to populate.
     * @return {module:model/Achievement} The populated <code>Achievement</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Achievement();
            ModelDefault.constructFromObject(data, obj);
            OptParamModels.constructFromObject(data, obj);
            AchievementAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('spaceName')) {
                obj['spaceName'] = ApiClient.convertToType(data['spaceName'], 'String');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('customFields')) {
                obj['customFields'] = ApiClient.convertToType(data['customFields'], {'String': Object});
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], {'String': 'String'});
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('termsAndConditions')) {
                obj['termsAndConditions'] = ApiClient.convertToType(data['termsAndConditions'], 'String');
            }
            if (data.hasOwnProperty('icon')) {
                obj['icon'] = ApiClient.convertToType(data['icon'], 'String');
            }
            if (data.hasOwnProperty('scheduling')) {
                obj['scheduling'] = Scheduling.constructFromObject(data['scheduling']);
            }
            if (data.hasOwnProperty('maxNumberOfIssues')) {
                obj['maxNumberOfIssues'] = ApiClient.convertToType(data['maxNumberOfIssues'], 'Number');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = AchievementStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('statusCode')) {
                obj['statusCode'] = ApiClient.convertToType(data['statusCode'], 'Number');
            }
            if (data.hasOwnProperty('constraints')) {
                obj['constraints'] = ApiClient.convertToType(data['constraints'], ['String']);
            }
            if (data.hasOwnProperty('achievementDependencies')) {
                obj['achievementDependencies'] = DependantOn.constructFromObject(data['achievementDependencies']);
            }
            if (data.hasOwnProperty('memberTagsFilter')) {
                obj['memberTagsFilter'] = DependantOn.constructFromObject(data['memberTagsFilter']);
            }
            if (data.hasOwnProperty('products')) {
                obj['products'] = ApiClient.convertToType(data['products'], [ProductReduced]);
            }
            if (data.hasOwnProperty('productTagsFilter')) {
                obj['productTagsFilter'] = DependantOn.constructFromObject(data['productTagsFilter']);
            }
            if (data.hasOwnProperty('strategies')) {
                obj['strategies'] = AchievementStrategies.constructFromObject(data['strategies']);
            }
        }
        return obj;
    }


}

/**
 * A unique system generated identifier
 * @member {String} id
 */
Achievement.prototype['id'] = undefined;

/**
 * This is the space name which is linked to the account
 * @member {String} spaceName
 */
Achievement.prototype['spaceName'] = undefined;

/**
 * ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
 * @member {Date} created
 */
Achievement.prototype['created'] = undefined;

/**
 * @member {Object.<String, Object>} customFields
 */
Achievement.prototype['customFields'] = undefined;

/**
 * A list of id's used to tag models
 * @member {Array.<String>} tags
 */
Achievement.prototype['tags'] = undefined;

/**
 * @member {Object.<String, String>} metadata
 */
Achievement.prototype['metadata'] = undefined;

/**
 * A name for the Achievement. Can be translated
 * @member {String} name
 */
Achievement.prototype['name'] = undefined;

/**
 * A name for the Achievement. Can be translated
 * @member {String} description
 */
Achievement.prototype['description'] = undefined;

/**
 * Terms and conditions of an achievement. Can be translated
 * @member {String} termsAndConditions
 */
Achievement.prototype['termsAndConditions'] = undefined;

/**
 * An Icon id that has been pre uploaded to the system to display for Achievement
 * @member {String} icon
 */
Achievement.prototype['icon'] = undefined;

/**
 * @member {module:model/Scheduling} scheduling
 */
Achievement.prototype['scheduling'] = undefined;

/**
 * Maximum number of issued achievements
 * @member {Number} maxNumberOfIssues
 */
Achievement.prototype['maxNumberOfIssues'] = undefined;

/**
 * @member {module:model/AchievementStatus} status
 */
Achievement.prototype['status'] = undefined;

/**
 * The code of the contest
 * @member {Number} statusCode
 */
Achievement.prototype['statusCode'] = undefined;

/**
 * Additional constraints, if set means true
 * @member {Array.<String>} constraints
 */
Achievement.prototype['constraints'] = undefined;

/**
 * @member {module:model/DependantOn} achievementDependencies
 */
Achievement.prototype['achievementDependencies'] = undefined;

/**
 * @member {module:model/DependantOn} memberTagsFilter
 */
Achievement.prototype['memberTagsFilter'] = undefined;

/**
 * 
 * @member {Array.<module:model/ProductReduced>} products
 */
Achievement.prototype['products'] = undefined;

/**
 * @member {module:model/DependantOn} productTagsFilter
 */
Achievement.prototype['productTagsFilter'] = undefined;

/**
 * @member {module:model/AchievementStrategies} strategies
 */
Achievement.prototype['strategies'] = undefined;


// Implement ModelDefault interface:
/**
 * A unique system generated identifier
 * @member {String} id
 */
ModelDefault.prototype['id'] = undefined;
/**
 * This is the space name which is linked to the account
 * @member {String} spaceName
 */
ModelDefault.prototype['spaceName'] = undefined;
/**
 * ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
 * @member {Date} created
 */
ModelDefault.prototype['created'] = undefined;
// Implement OptParamModels interface:
/**
 * @member {Object.<String, Object>} customFields
 */
OptParamModels.prototype['customFields'] = undefined;
/**
 * A list of id's used to tag models
 * @member {Array.<String>} tags
 */
OptParamModels.prototype['tags'] = undefined;
/**
 * @member {Object.<String, String>} metadata
 */
OptParamModels.prototype['metadata'] = undefined;
// Implement AchievementAllOf interface:
/**
 * A name for the Achievement. Can be translated
 * @member {String} name
 */
AchievementAllOf.prototype['name'] = undefined;
/**
 * A name for the Achievement. Can be translated
 * @member {String} description
 */
AchievementAllOf.prototype['description'] = undefined;
/**
 * Terms and conditions of an achievement. Can be translated
 * @member {String} termsAndConditions
 */
AchievementAllOf.prototype['termsAndConditions'] = undefined;
/**
 * An Icon id that has been pre uploaded to the system to display for Achievement
 * @member {String} icon
 */
AchievementAllOf.prototype['icon'] = undefined;
/**
 * @member {module:model/Scheduling} scheduling
 */
AchievementAllOf.prototype['scheduling'] = undefined;
/**
 * Maximum number of issued achievements
 * @member {Number} maxNumberOfIssues
 */
AchievementAllOf.prototype['maxNumberOfIssues'] = undefined;
/**
 * @member {module:model/AchievementStatus} status
 */
AchievementAllOf.prototype['status'] = undefined;
/**
 * The code of the contest
 * @member {Number} statusCode
 */
AchievementAllOf.prototype['statusCode'] = undefined;
/**
 * Additional constraints, if set means true
 * @member {Array.<String>} constraints
 */
AchievementAllOf.prototype['constraints'] = undefined;
/**
 * @member {module:model/DependantOn} achievementDependencies
 */
AchievementAllOf.prototype['achievementDependencies'] = undefined;
/**
 * @member {module:model/DependantOn} memberTagsFilter
 */
AchievementAllOf.prototype['memberTagsFilter'] = undefined;
/**
 * 
 * @member {Array.<module:model/ProductReduced>} products
 */
AchievementAllOf.prototype['products'] = undefined;
/**
 * @member {module:model/DependantOn} productTagsFilter
 */
AchievementAllOf.prototype['productTagsFilter'] = undefined;
/**
 * @member {module:model/AchievementStrategies} strategies
 */
AchievementAllOf.prototype['strategies'] = undefined;




export default Achievement;

