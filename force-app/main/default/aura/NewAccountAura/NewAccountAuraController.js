({
	saveRecord : function(component, event, helper)
    {
        //get values from Aura HTML to Javascript
        var name=component.get('v.accountName');      
        var phone=component.get('v.accountPhone');
        
        var action=component.get('c.addAccount');
        
        action.setParams({
            accName:name,
            accPhone:phone
        });
        
        action.setCallback(this,function(response){
            var result=response.getReturnValue();
            alert(result);
        });
        
        $A.enqueueAction(action);        
        
        
	}
})