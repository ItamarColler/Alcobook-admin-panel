export class Product{
    constructor(
    private title: string,
    private image: string,
    private body: string,
    private ingredients: string[],
    private steps: string[],
    private date: Date,
    private likes: number,
    private comments: number,
    private author: string,
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