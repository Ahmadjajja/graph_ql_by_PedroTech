const { UserList, MovieList } = require("../FakeData");
const _ = require("lodash");
const resolvers = {
  Query: {
    //USER RESOLVERS
    // users: () =>  {     // same as below line
    users() {
      //When we require users from frontend , This will return the exactly data that we want.
      // console.log("UserList", UserList);
      return UserList;
    },


    user : (parent, args) =>  {
      // console.log('args.id');    //why this is not working
      const id = args.id; //accessing id
      const user = _.find(UserList, { id: (Number(id)) });
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


    // user: {
    //   favoriteMovies: () => {
    //     return _.filter(
    //       MovieList,
    //       (movie) =>
    //         movie.yearOfPublication >= 2007 && movie.yearOfPublication <= 2009
    //     );
    //   },
    // },
  },
  
  Mutation: {
    createUser: (parent, args) => {
      const user = args.input;
      console.log(user);
      const lastId = UserList[UserList.length-1].id
      user.id = lastId + 1;
      UserList.push(user);
      return user
    },
    updateUsername: (parent, args) => {
      const { id, newUsername } = args.input;
      let userUpdated;
      UserList.forEach((user) => {
        if ( user.id === Number(id)){
          user.username = newUsername;
          userUpdated = user;
        }
      })
      return userUpdated
    },

    deleteUser: (parent, args) => {
      const id = args.id;
      _.remove(UserList, (user) => user.id  === Number(id));
      return null;
    }
  }

};

module.exports = { resolvers };
