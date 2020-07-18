public class knowledgeListViewController {
    @AuraEnabled
    public static List<sObject> getArticlesList(){
        return [select id,Title,Time__c, CreatedDate,RecordTypeId,RecordType.Name,CreatedBy.Name,Language,UrlName from Knowledge__kav WHERE RecordType.Name='Quiz'];

    }

}