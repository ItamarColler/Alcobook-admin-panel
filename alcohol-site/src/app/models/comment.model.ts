export class Comment {
    constructor(
        public _id: string,
        public body: string,
        public author: string,
        public date: Date,
        public likes: number
    ) { }
}
// body: schemaTypes.requiredString,
//   author: schemaTypes.requiredString,
//   authorRef: schemaTypes.refTo('User'),
//   createdAt: schemaTypes.timestamp,
//   likes: schemaTypes.arrayOf('User'),