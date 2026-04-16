import { LightningElement,wire,track } from 'lwc';
import getAccount from '@salesforce/apex/LightningApexClass.getAccount';
import addAccount from '@salesforce/apex/LightningApexClass.addAccount';
import getAccountDetails from '@salesforce/apex/LightningApexClass.getAccountDetails';

export default class WireVsConnectedCallbackCmp extends LightningElement {

    accountId;
    @track accounts;
    @track accountColumns=[
        {label:'Account Name', fieldName:'Name'},
        {label:'Account Phone', fieldName:'Phone'},
        {label:'Account Type', fieldName:'Type'}
    ];

   
    handleAccountIdChange(event)
    {
        this.accountId=event.target.value;          
    }

    @wire(getAccountDetails, { accId: '$accountId' }) wiredAccounts({error,data}){
        if(data)
        {
            console.log('Wire service called');
            this.accounts=data;
        }
        else if(error)
        {
            console.error('Error in fetching accounts',error);
        }
    }



    //connected callback is used to call imperative apex method and wire service is used to call apex method reactively.
    connectedCallback()  
    {
        console.log('Connected Callback called');
        
       /* getAccount()
        .then(result=>{
            this.accounts=result;
        })
        .catch(error=>{
            console.error('Error in fetching accounts',error);
        })*/


        //call add Account function to add new account record
       /* addAccount({accName:'New Account', accPhone:'1234567890'})
        .then(result=>{
            console.log('Account added successfully');
        })
        .catch(error=>{
            console.error('Error in adding account',error);
        })
            */




    }
}