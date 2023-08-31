/**
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.
 *
 * The version of the OpenAPI document: 3.0.9
 * Contact: support@ziqni.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import RankingStrategy from './RankingStrategy';
import ScoringStrategy from './ScoringStrategy';
import StrategyType from './StrategyType';

/**
 * The TournamentStrategies model module.
 * @module model/TournamentStrategies
 * @version 0.0.26
 */
class TournamentStrategies {
    /**
     * Constructs a new <code>TournamentStrategies</code>.
     * @alias module:model/TournamentStrategies
     * @param strategyType {module:model/StrategyType} 
     * @param rankingStrategy {module:model/RankingStrategy} 
     * @param scoringStrategy {module:model/ScoringStrategy} 
     */
    constructor(strategyType, rankingStrategy, scoringStrategy) { 
        
        TournamentStrategies.initialize(this, strategyType, rankingStrategy, scoringStrategy);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, strategyType, rankingStrategy, scoringStrategy) { 
        obj['strategyType'] = strategyType;
        obj['rankingStrategy'] = rankingStrategy;
        obj['scoringStrategy'] = scoringStrategy;
    }

    /**
     * Constructs a <code>TournamentStrategies</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TournamentStrategies} obj Optional instance to populate.
     * @return {module:model/TournamentStrategies} The populated <code>TournamentStrategies</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TournamentStrategies();

            if (data.hasOwnProperty('strategyType')) {
                obj['strategyType'] = StrategyType.constructFromObject(data['strategyType']);
            }
            if (data.hasOwnProperty('rankingStrategy')) {
                obj['rankingStrategy'] = RankingStrategy.constructFromObject(data['rankingStrategy']);
            }
            if (data.hasOwnProperty('scoringStrategy')) {
                obj['scoringStrategy'] = ScoringStrategy.constructFromObject(data['scoringStrategy']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/StrategyType} strategyType
 */
TournamentStrategies.prototype['strategyType'] = undefined;

/**
 * @member {module:model/RankingStrategy} rankingStrategy
 */
TournamentStrategies.prototype['rankingStrategy'] = undefined;

/**
 * @member {module:model/ScoringStrategy} scoringStrategy
 */
TournamentStrategies.prototype['scoringStrategy'] = undefined;






export default TournamentStrategies;

