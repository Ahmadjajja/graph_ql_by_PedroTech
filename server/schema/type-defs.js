const { gql } = require("apollo-server");

//One confusion is assigning type to another query field is similar like aggrigation

const typeDefs = gql`
  type User {
    id: ID
    name: String
    username: String
    age: Int
    nationality: Nationality
    friends: [User]
    favoriteMovies: [Movie!]
  }

  type Movie {
    id: ID!
    name: String!
    yearOfPublication: Int!
    isInTheaters: Boolean!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User
    movies: [Movie!]!
    movie(name: String!): Movie!
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

  input CreateUserInput {
    name: String!
    username: String!
    age: Int!
    nationality: Nationality = BRAZIL
  }

  input updateUsernameInput {

    id: ID! 
    newUsername: String!

  }



  type Mutation {
    createUser(input: CreateUserInput!): User
    updateUsername(input: updateUsernameInput!): User
    deleteUser(id: ID!): User
  }
`;

module.exports = { typeDefs };
