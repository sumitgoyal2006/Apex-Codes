public class LightningApexClass 
{


    //apex function to fetch account details based on account Id
    @AuraEnabled(cacheable=true)
    public static Account getAccountDetails(string accId)
    {
        Account acc=[select Name,Phone,Type from Account where Id=:accId];
        return acc;
    }



    //Apex Function to Fetch Related Contact based on Account Id
        @AuraEnabled(cacheable=true)
    public static List<Contact> getRelatedContact(string accId)
    {
        List<Contact> conList=[select FirstName,LastName from Contact where AccountId=:accId];
        return conList;
    }





    @AuraEnabled //this annotation make this function available to Aura or LWC Javascript
    public static string addAccount(String accName,String accPhone)
    {
        Account a=new Account();
        a.Name=accName;
        a.Phone=accPhone;
        insert a;
        System.debug(accName);
        return 'Account Created Successfuly with Id:'+a.Id;
    }
    
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccount()
    {
        List<Account> accList=[select Id,Name,Phone,Type from  Account];
        return accList;
    }


    @AuraEnabled(cacheable=true)
    public static List<Account> searchAccount(string aName)
    {
        String str='%'+aName+'%'; //  %Ed%
        List<Account> accList=[select Name,Phone,Type from  Account where Name like :str];
        return accList;
    }


}