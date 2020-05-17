({
    fetchData: function (cmp, fetchData) {
        var action = cmp.get("c.getArticlesList");
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                var listOfArticles = response.getReturnValue();
                listOfArticles.forEach(function(article){
                                    //to create a hyperlink on the knowlesge article
                                    article.linkName = '/hera/s/article/'+article.UrlName;
                                    //to show the record type name 
                                    article.recordTypeName = article.RecordType.Name;
                                                });
                cmp.set("v.data", listOfArticles);
               
            }
        });
    $A.enqueueAction(action);
    }
})