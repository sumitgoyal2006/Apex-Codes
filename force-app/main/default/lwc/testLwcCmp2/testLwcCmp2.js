import { LightningElement,wire } from 'lwc';
import { subscribe,MessageContext } from 'lightning/messageService';
import customChannel from '@salesforce/messageChannel/customChannel__c';


export default class TestLwcCmp2 extends LightningElement {
    inputValue = '';
    receivedMessage;
    subscription=null;
    @wire(MessageContext)messageContext;
    
    handleInputChange(event) {
    }
    handleButtonClick()
    {
        if(!this.subscription)
        {
            this.subscription=subscribe(this.messageContext,customChannel,(message)=>{
                this.receivedMessage=message.messageText;
                
            });
        }

    }
}