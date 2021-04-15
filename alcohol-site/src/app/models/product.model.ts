export class Product{
    constructor(
    public _id: string,
    public title: string,
    public image: string,
    public body: string,
    public ingredients: string[],
    public steps: string[],
    public date: Date,
    public likes: string[],
    public comments: string[],
    public author: string,
    ){}
}
// title: string;
// image: schemaTypes.requiredString,
// body: schemaTypes.requiredString,
// ingredients: schemaTypes.arrayOfStrings,
// steps: schemaTypes.arrayOfStrings,
// author: schemaTypes.requiredString,
// authorRef: schemaTypes.refTo('User'),
// createdAt: schemaTypes.timestamp,
// likes: schemaTypes.arrayOf('User'),
// comments: schemaTypes.arrayOf('Comment'),