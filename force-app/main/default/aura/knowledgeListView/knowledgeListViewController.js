({
   	doInit : function(cmp, event, helper) {
        cmp.set('v.columns', [   
            {label: 'Title', fieldName: 'linkName', type: 'url', typeAttributes: {label: { fieldName: 'Title' }, target: '_blank'}},
            {label: 'Created Date', fieldName: 'CreatedDate', type: 'date'},
            {label: 'Type', fieldName: 'recordTypeName', type: 'text'},
            {label: 'Time (minutes)', fieldName: 'Time__c', type: 'text'}
    ]);

    var fetchData = {
        Title: "Title",
        CreatedDate : "CreatedDate",
        recordTypeName : "recordTypeName",
        Language : "Language",
        linkName : "linkName",
        Time : "Time__c"
    };


    helper.fetchData(cmp, fetchData);
    

}

})