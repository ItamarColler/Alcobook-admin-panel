export const environment : {
  production: boolean,
  cocktailUrl: string,
  userUrl: string,
  commentUrl: string,
  statisticsUrl: string

} = {
  production: false,
  cocktailUrl:'http://localHost:8080/api/cocktail',
  userUrl: 'http://localHost:8080/api/user',
  commentUrl: 'http://localhost:8080/api/comment',
  statisticsUrl: 'http://localhost:8080/api/cocktail/cocktails-per-day',
};
