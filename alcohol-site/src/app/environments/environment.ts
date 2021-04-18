export const environment : {
  production: boolean,
  cocktailUrl: string,
  userUrl: string,
  commentUrl: string,
  statisticsUrl: string,
  token: string

} = {
  production: false,
  cocktailUrl:'http://localHost:8080/api/cocktail',
  userUrl: 'http://localHost:8080/api/user',
  commentUrl: 'http://localhost:8080/api/comment',
  statisticsUrl: 'http://localhost:8080/api/cocktail/cocktails-per-day',
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlN5c3RlbSIsImlkIjoiNjA3NmMzZTRkMTQ1ZGY1OTEwYTcwYWM4IiwiZXhwIjoxNjIzODU2MTIyLCJpYXQiOjE2MTg2NzIxMjJ9.BGZcTZj3u8s_ZY4kDkieZvY0NlQpiHiTYrrnOuVhRbs'
};
