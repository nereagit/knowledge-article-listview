public class knowledgeListViewController {
    @AuraEnabled
    public static List<sObject> getArticlesList(){
        return [select id,Title, CreatedDate,RecordTypeId,RecordType.Name,CreatedBy.Name,Language,UrlName from Knowledge__kav WHERE RecordType.Name='Quiz'];

    }

}