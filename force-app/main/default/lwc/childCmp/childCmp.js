import { LightningElement,api,track } from 'lwc';

export default class ChildCmp extends LightningElement {
   @api msgfromparent;
   msgtoparent;
   handleMessageChange(event)
   {
    this.msgtoparent = event.target.value;
    
    //custom event to send message to parent component
    const messageEvent=new CustomEvent('childmsg', { detail: this.msgtoparent });
    this.dispatchEvent(messageEvent);
   }

}