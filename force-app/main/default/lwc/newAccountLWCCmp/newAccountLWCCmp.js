import { LightningElement } from 'lwc';
import addAccount from '@salesforce/apex/LightningApexClass.addAccount';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class NewAccountLWCCmp extends LightningElement {
    //properties and methods for the component will go here

    accName;
    accPhone;

    nameChangeHandler(event)
    {
        this.accName=event.target.value;
    }

    phoneChangeHandler(event)
    {
        this.accPhone=event.target.value;
    }

    createAccount()
    {
        addAccount({
                    accName:this.accName,
                    accPhone:this.accPhone})
                    .then(result=>{
                       // alert(result);
                       const evt=new ShowToastEvent({
                        title:'Success',
                        message:result,
                        variant:'success'
                       });
                       this.dispatchEvent(evt);
                    })
                    .catch(error=>{
                       // alert('Failed to Insert Record');
                        const evt=new ShowToastEvent({
                        title:'Failed',
                        message:'Failed to add Account',
                        variant:'error'
                       });
                       this.dispatchEvent(evt);
                    });
    }

}