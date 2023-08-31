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
import EntityGraphEdge from './EntityGraphEdge';

/**
 * The EntityGraph model module.
 * @module model/EntityGraph
 * @version 0.0.26
 */
class EntityGraph {
    /**
     * Constructs a new <code>EntityGraph</code>.
     * 
     * @alias module:model/EntityGraph
     */
    constructor() { 
        
        EntityGraph.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EntityGraph</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EntityGraph} obj Optional instance to populate.
     * @return {module:model/EntityGraph} The populated <code>EntityGraph</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EntityGraph();

            if (data.hasOwnProperty('edges')) {
                obj['edges'] = ApiClient.convertToType(data['edges'], [EntityGraphEdge]);
            }
            if (data.hasOwnProperty('nodesInCompletedState')) {
                obj['nodesInCompletedState'] = ApiClient.convertToType(data['nodesInCompletedState'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Pairs of nodes that specify a line joining these two nodes are said to form an edge
 * @member {Array.<module:model/EntityGraphEdge>} edges
 */
EntityGraph.prototype['edges'] = undefined;

/**
 * Nodes in this graph that are in state greater than 35
 * @member {Number} nodesInCompletedState
 */
EntityGraph.prototype['nodesInCompletedState'] = undefined;






export default EntityGraph;

