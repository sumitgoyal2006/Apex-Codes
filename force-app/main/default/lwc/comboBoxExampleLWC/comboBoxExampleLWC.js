import { LightningElement } from 'lwc';
import getAccount from '@salesforce/apex/LightningApexClass.getAccount';

export default class ComboBoxExampleLWC extends LightningElement {
    
    value='';
    optionArray=[];

    optionChangeHandler(event)
    {
        this.value=event.target.value;

    }

    connectedCallback()
    {
        getAccount()
        .then(result=>{
            let arr=[];
            for(var i=0;i<result.length;i++)
            {
                arr.push({label:result[i].Name,value:result[i].Id});
            }
            this.optionArray=arr;
        })
        .catch(error=>{});
    }
    
}