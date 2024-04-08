/**
 * Decentralized FDA API
 * A platform for quantifying the effects of every drug, supplement, food, and other factor on your health.
 *
 * OpenAPI spec version: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class StudyVotes {
    /**
    * Average of all user votes with 1 representing an up-vote and 0 representing a down-vote. Ex: 0.9855
    */
    'averageVote': number;
    /**
    * 1 if the current user has up-voted the study and 0 if they down-voted it. Null means no vote. Ex: 1 or 0 or null
    */
    'userVote': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "averageVote",
            "baseName": "averageVote",
            "type": "number",
            "format": ""
        },
        {
            "name": "userVote",
            "baseName": "userVote",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return StudyVotes.attributeTypeMap;
    }

    public constructor() {
    }
}

