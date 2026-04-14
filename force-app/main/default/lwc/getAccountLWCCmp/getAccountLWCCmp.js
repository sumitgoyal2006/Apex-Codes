import { LightningElement } from 'lwc';
import getAccount from '@salesforce/apex/LightningApexClass.getAccount';
import searchAccount from '@salesforce/apex/LightningApexClass.searchAccount';

export default class GetAccountLWCCmp extends LightningElement 
{
    accountRecords;
    errors;
    flag=false;
    accName;
    accountColumns=[
        { label: 'Account Name', fieldName: 'Name' },   
         { label: 'Account Phone', fieldName: 'Phone' },  
          { label: 'Account Type', fieldName: 'Type' }
    
    ];


    //capture the value from the input field and store it in a variable
    handleChange(event)
    {
        this.accName=event.target.value;
        this.handleSearch(this.accName);
    }

    //custom function to call the apex method to fetch the account records based on the name entered in the input field
   handleSearch(accountName)
   {
    searchAccount({aName:accountName})
    .then(result=>{
        this.accountRecords=result;
    })
    .catch(error=>{
        console.error('Error fetching account records: ', error);
    });
    

   }

    //on component load, call the apex method to fetch the account records
    connectedCallback()
    {
        getAccount()
        .then(result => {
            this.accountRecords = result;
            this.errors=undefined;            
           // console.log('Account Records: ', this.accountRecords);
            //console.log('Total Record Count',result.length);
            if(result.length>0)
            {
                this.flag=true;
            }
            else
            {
                this.flag=false;
            }
        
        })
        .catch(error => {
            console.error('Error fetching account records: ', error);
            this.errors = error;            
            this.accountRecords=undefined;
        });
    }

}