import { LightningElement,api,wire } from 'lwc';
import getRelatedContact from '@salesforce/apex/LightningApexClass.getRelatedContact';

export default class RelatedContactLwc extends LightningElement {

    @api accountid;
    relatedContacts = [];
    contactColumns=[
        {label:'First Name',fieldName:'FirstName'},
        {label:'LastName',fieldName:'LastName'}       
    ];

    @wire(getRelatedContact,{accId:'$accountid'})
    wiredRelatedContact({error,data})
    {
        if(data)
        {
            this.relatedContacts=data;
        }
        if(error)
        {
            console.error('Error in fetching related contacts',error);
        }
    }

}