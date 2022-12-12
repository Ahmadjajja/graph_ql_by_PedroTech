const { UserList } = require("../schema/FakeData");
// const _= require("lodash")
const resolvers = {
    Query: {
        // users: () =>  {     // same as below line 
        users() {   //When we require users from frontend , This will return the exactly data that we want.
            return UserList;
        }
        // ,user: (_, args) => {   //dealing with different arguments in resolvers
        //     const id = args.id;   //accessing id
            
        //     return 
        // }
    },
};

module.exports = { resolvers };