import { LightningElement,wire } from 'lwc';
import {publish, MessageContext} from 'lightning/messageService';
import customChannel from '@salesforce/messageChannel/customChannel__c';

export default class TestLwcCmp1 extends LightningElement {
    inputValue = '';

    @wire(MessageContext)messageContext;
    
    handleInputChange(event) {
        this.inputValue = event.target.value;
    }

    handleButtonClick() 
    {
        const payLoad={messageText:this.inputValue};
        try{
            publish(this.messageContext,customChannel,payLoad);
            console.log('Message published successfully');
        }
        catch(error)
        {
            console.error('Error publishing message:',error);
        }
        
       
    }
}