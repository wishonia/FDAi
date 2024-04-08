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

import { Card } from '../models/Card';
import { ErrorResponse } from '../models/ErrorResponse';
import { Study } from '../models/Study';
import { TrackingReminder } from '../models/TrackingReminder';
import { TrackingReminderNotification } from '../models/TrackingReminderNotification';
import { HttpFile } from '../http/http';

export class StudyJoinResponse {
    'study'?: Study;
    'trackingReminders'?: Array<TrackingReminder>;
    'trackingReminderNotifications'?: Array<TrackingReminderNotification>;
    /**
    * Can be used as body of help info popup
    */
    'description'?: string;
    /**
    * Can be used as title in help info popup
    */
    'summary'?: string;
    /**
    * Array of error objects with message property
    */
    'errors'?: Array<ErrorResponse>;
    /**
    * ex. OK or ERROR
    */
    'status'?: string;
    /**
    * true or false
    */
    'success'?: boolean;
    /**
    * Response code such as 200
    */
    'code'?: number;
    /**
    * A super neat url you might want to share with your users!
    */
    'link'?: string;
    'card'?: Card;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "study",
            "baseName": "study",
            "type": "Study",
            "format": ""
        },
        {
            "name": "trackingReminders",
            "baseName": "trackingReminders",
            "type": "Array<TrackingReminder>",
            "format": ""
        },
        {
            "name": "trackingReminderNotifications",
            "baseName": "trackingReminderNotifications",
            "type": "Array<TrackingReminderNotification>",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "summary",
            "baseName": "summary",
            "type": "string",
            "format": ""
        },
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<ErrorResponse>",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string",
            "format": ""
        },
        {
            "name": "success",
            "baseName": "success",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "code",
            "baseName": "code",
            "type": "number",
            "format": ""
        },
        {
            "name": "link",
            "baseName": "link",
            "type": "string",
            "format": ""
        },
        {
            "name": "card",
            "baseName": "card",
            "type": "Card",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return StudyJoinResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

