export class Comment {
    constructor(
        private body: string,
        private author: string,
        private date: Date,
        private likes: number
    ) { }
}
// body: schemaTypes.requiredString,
//   author: schemaTypes.requiredString,
//   authorRef: schemaTypes.refTo('User'),
//   createdAt: schemaTypes.timestamp,
//   likes: schemaTypes.arrayOf('User'),