export class User {
    private name: string;
    private role: string;
    private cocktails: number;
    private comments: number;
    private likes: number;
    constructor(name: string,role: string,cocktails: number,comments: number,likes: number)
    {
        this.name = name;
        this.role= role;
        this.cocktails=cocktails;
        this.comments= comments;
        this.likes= likes;
    }
}
// username: schemaTypes.requiredUniqueString,
// password: schemaTypes.requiredString,
// role: schemaTypes.userRolesString,
// hash: schemaTypes.requiredString,
// salt: schemaTypes.requiredString,
// cocktails: schemaTypes.arrayOf('Cocktail'),
// comments: schemaTypes.arrayOf('Comment'),
// cocktailsLiked: schemaTypes.arrayOf('Cocktail'),