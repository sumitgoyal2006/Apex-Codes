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
        if(this.accName==''||this.accName==null) 
        {
            event.target.setCustomValidity('Account Name cannot be blank');
        }
        else
        {
            event.target.setCustomValidity('');
        }
        event.target.reportValidity();
    }

    phoneChangeHandler(event)
    {
        this.accPhone=event.target.value;
        if(this.accPhone==''||this.accPhone==null)
        {
            event.target.setCustomValidity('Phone Number cannot be blank');
        }
        else if(isNaN(this.accPhone))
        {
            event.target.setCustomValidity('Phone Number must be numeric');
        }
        else
        {
            event.target.setCustomValidity('');
        }
        event.target.reportValidity();
      
    }

    createAccount()
    {
        //write a logic for custom validation on account name and phone number
     /*  

       
        inputs.forEach(input=>{
            let value=input.value;
            if(!value||value.trim()=='')
            {
                input.setCustomValidity(`${input.label} Cannot be blank`);
                isValid=false;
            }
           input.reportValidity();
        }); */
            
         let isValid=true;
          const inputs=this.template.querySelectorAll('lightning-input');

            inputs.forEach(input=>{
                if(!input.checkValidity())
                {
                    input.reportValidity();
                    isValid=false;
                }
            });

            if(isValid)
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

}