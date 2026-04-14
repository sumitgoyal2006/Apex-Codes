import { LightningElement ,api,track} from 'lwc';
import getRelatedContact  from '@salesforce/apex/LightningApexClass.getRelatedContact';

export default class RelatedRecordLWC extends LightningElement {
    @api recordId;
    contactRecords;
    contactColumns=[
       {label:'First Name',fieldName:'FirstName'},
       {label:'Last Name',fieldName:'LastName'}      
    ];

    //call apex class function to get related contact records
    connectedCallback(){
        getRelatedContact({accId:this.recordId})
        .then(result=>{
            this.contactRecords=result;
        })
        .catch(error=>{
            console.error('Error in fetching related contact records',error);
        });
    }

}