import { LightningElement } from 'lwc';
import addAccount from '@salesforce/apex/LightningApexClass.addAccount';

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
                        alert(result);
                    })
                    .catch(error=>{
                        alert('Failed to Insert Record');
                    });
    }

}