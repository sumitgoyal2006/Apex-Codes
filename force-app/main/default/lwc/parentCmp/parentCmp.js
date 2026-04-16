import { LightningElement } from 'lwc';

export default class ParentCmp extends LightningElement {

    msgtochild;
    msgfromchild;
    handleMessageChange(event)
    {
        this.msgtochild = event.target.value;
    }
    //function to handle the event from child component
    handleChildMessage(event)
    {
        this.msgfromchild = event.detail;
    }


}