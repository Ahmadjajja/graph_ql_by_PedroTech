const { gql } = require("apollo-server");

const typeDefs = gql`
    type User { 
        id: ID!
        name: String!
        username: String!
        age: Int! 
        nationality: Nationality!
        friends: [User]
    }
    type Query {
        users: [User!]!
        user(id: ID!): User!   // must pass id as argument and must return user
    }

    enum Nationality {
        CANADA
        BRAZIL
        INDIA
        GERMANY
        CHILE
        TOGO
        MONACO
    }
`;

module.exports = { typeDefs };
