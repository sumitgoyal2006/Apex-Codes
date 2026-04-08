({
	getRecords : function(component, event, helper) {
        
        console.log('getRecord Function Executes');
        var action=component.get('c.getAccount');
        
        component.set('v.acccolumns', [
            {label:'Account Name',fieldName:'Name'},
             {label:'Account Phone',fieldName:'Phone'},
             {label:'Account Type',fieldName:'Type'},
            
        ]);
        
        action.setCallback(this,function(response){
            //set value from javascript to an attibute on a view
            component.set('v.accountRecords',response.getReturnValue());
            console.log('Account Records from Function');
            console.log(response.getReturnValue());
        });
         
        
        $A.enqueueAction(action);
        
		
	}
})