const { UserList, MovieList } = require("../FakeData");
const _ = require("lodash");
const resolvers = {
  Query: {
    //USER RESOLVERS
    // users: () =>  {     // same as below line
    users() {
      //When we require users from frontend , This will return the exactly data that we want.
      return UserList;
    },
    user: (parent, args) => {
      //dealing with different arguments in resolvers
      const id = args.id; //accessing id
      const user = _.find(UserList, { id: Number(id) });
    //   console.log('====================================');
    //   console.log(user);
    //   console.log('====================================');
      return user;
    },
    //MOVIE RESOLVERS
    movies: () => {
      return MovieList;
    },
    movie: (parent, args) => {
      const name = args.name;
      const movie = _.find(MovieList, { name });
      return movie;
    },
    user: {
      favoriteMovies: () => {
        return _.filter(
          MovieList,
          (movie) =>
            movie.yearOfPublication >= 2007 && movie.yearOfPublication <= 2009
        );
      },
    },
  }, 
};

module.exports = { resolvers };
