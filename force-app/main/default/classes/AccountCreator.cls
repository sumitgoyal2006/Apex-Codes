public without sharing class AccountCreator {
    public static void createAccount(String name, String phone) {
        if (!Schema.sObjectType.Account.isCreateable()) {
            throw new DmlException('Insufficient permissions to create Account');
        }
        Account acc = new Account();
        acc.Name = name;
        acc.Phone = phone;
        insert acc;
    }
}