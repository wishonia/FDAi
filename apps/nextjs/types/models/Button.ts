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

export class Button {
    /**
    * Ex: connect
    */
    'accessibilityText'?: string;
    /**
    * Action data
    */
    'action'?: any;
    /**
    * Ex: connect
    */
    'additionalInformation'?: string;
    /**
    * Ex: #f2f2f2
    */
    'color'?: string;
    /**
    * Text to show user before executing functionName
    */
    'confirmationText'?: string;
    /**
    * Name of function to call
    */
    'functionName'?: string;
    /**
    * Data to provide to functionName or be copied to the card parameters when button is clicked and card is posted to the API
    */
    'parameters'?: any;
    /**
    * Ex: connect
    */
    'html'?: string;
    /**
    * HTML element id
    */
    'id'?: string;
    /**
    * Ex: https://image.jpg
    */
    'image'?: string;
    /**
    * Ex: ion-refresh
    */
    'ionIcon'?: string;
    /**
    * Ex: https://local.quantimo.do
    */
    'link': string;
    /**
    * State to go to
    */
    'stateName'?: string;
    /**
    * Data to provide to the state
    */
    'stateParams'?: any;
    /**
    * Text to show user after executing functionName
    */
    'successToastText'?: string;
    /**
    * Text to show user after executing functionName
    */
    'successAlertTitle'?: string;
    /**
    * Text to show user after executing functionName
    */
    'successAlertBody'?: string;
    /**
    * Ex: Connect
    */
    'text': string;
    /**
    * Ex: This is a tooltip
    */
    'tooltip'?: string;
    /**
    * Post here on button click
    */
    'webhookUrl'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "accessibilityText",
            "baseName": "accessibilityText",
            "type": "string",
            "format": ""
        },
        {
            "name": "action",
            "baseName": "action",
            "type": "any",
            "format": ""
        },
        {
            "name": "additionalInformation",
            "baseName": "additionalInformation",
            "type": "string",
            "format": ""
        },
        {
            "name": "color",
            "baseName": "color",
            "type": "string",
            "format": ""
        },
        {
            "name": "confirmationText",
            "baseName": "confirmationText",
            "type": "string",
            "format": ""
        },
        {
            "name": "functionName",
            "baseName": "functionName",
            "type": "string",
            "format": ""
        },
        {
            "name": "parameters",
            "baseName": "parameters",
            "type": "any",
            "format": ""
        },
        {
            "name": "html",
            "baseName": "html",
            "type": "string",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "image",
            "baseName": "image",
            "type": "string",
            "format": ""
        },
        {
            "name": "ionIcon",
            "baseName": "ionIcon",
            "type": "string",
            "format": ""
        },
        {
            "name": "link",
            "baseName": "link",
            "type": "string",
            "format": ""
        },
        {
            "name": "stateName",
            "baseName": "stateName",
            "type": "string",
            "format": ""
        },
        {
            "name": "stateParams",
            "baseName": "stateParams",
            "type": "any",
            "format": ""
        },
        {
            "name": "successToastText",
            "baseName": "successToastText",
            "type": "string",
            "format": ""
        },
        {
            "name": "successAlertTitle",
            "baseName": "successAlertTitle",
            "type": "string",
            "format": ""
        },
        {
            "name": "successAlertBody",
            "baseName": "successAlertBody",
            "type": "string",
            "format": ""
        },
        {
            "name": "text",
            "baseName": "text",
            "type": "string",
            "format": ""
        },
        {
            "name": "tooltip",
            "baseName": "tooltip",
            "type": "string",
            "format": ""
        },
        {
            "name": "webhookUrl",
            "baseName": "webhookUrl",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Button.attributeTypeMap;
    }

    public constructor() {
    }
}

