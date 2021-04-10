export class Comment{
    private body: string;
    private author: string;
    private date: Date;
    private likes:number;
    
    constructor(body: string,author: string,date: Date, likes: number)
    {
        this.body= body;
        this.author= author;
        this.date= date;
        this.likes= likes;
    }

}
// body: schemaTypes.requiredString,
//   author: schemaTypes.requiredString,
//   authorRef: schemaTypes.refTo('User'),
//   createdAt: schemaTypes.timestamp,
//   likes: schemaTypes.arrayOf('User'),