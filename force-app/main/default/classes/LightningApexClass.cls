public class LightningApexClass 
{
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
        List<Account> accList=[select Name,Phone,Type from Account];
        return accList;
    }

}