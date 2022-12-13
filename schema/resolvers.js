const { UserList } = require("../FakeData")
const _  = require("lodash")
const resolvers = {
    Query: {
        // users: () =>  {     // same as below line 
        users() {   //When we require users from frontend , This will return the exactly data that we want.
            return UserList;
        }
        ,user: (parent, args) => {   //dealing with different arguments in resolvers
            const id = args.id;   //accessing id
            const user = _.find(UserList, { id: Number(id) })
            return user
        }, 
    },
};

module.exports = { resolvers };