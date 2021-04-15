export class User {
    constructor(
        private _id:string,
        private name: string,
        private role: string,
        private cocktails: number,
        private comments: number,
        private likes: number
    ) { }
}
// username: schemaTypes.requiredUniqueString,
// password: schemaTypes.requiredString,
// role: schemaTypes.userRolesString,
// hash: schemaTypes.requiredString,
// salt: schemaTypes.requiredString,
// cocktails: schemaTypes.arrayOf('Cocktail'),
// comments: schemaTypes.arrayOf('Comment'),
// cocktailsLiked: schemaTypes.arrayOf('Cocktail'),