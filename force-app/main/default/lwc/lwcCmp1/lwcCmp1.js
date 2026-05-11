import { LightningElement } from 'lwc';

export default class LwcCmp1 extends LightningElement {

    yourname;
    yourphone;
    youremail;

   get empdata() {
        return {
            lwc1name: this.yourname,
            lwc1phone: this.yourphone,
            lwc1email: this.youremail
        };
    }

    handleNameChange(event){
        this.yourname = event.target.value;
    }

    handlePhoneChange(event){
        this.yourphone = event.target.value;
    }    
    handleEmailChange(event){
        this.youremail = event.target.value;
    }      

}