// export const  UserList = [      //we can't do that because this is invalid statement in this scenario
const  UserList = [
    {
      "id": 0,
      "name": "Meyer Strong",
      "username": "Kristin Ballard",
      "age": 28,
      "nationality": "CANADA",
    }, 
    {
      "id": 1,
      "name": "Miranda Howell",
      "username": "Joanna Burns",
      "age": 23,
      "nationality": "BRAZIL"
    },
    {
      "id": 2,
      "name": "Dalton Roach",
      "username": "Gross Estrada",
      "age": 21,
      "nationality": "INDIA"
      // "friends" : [
      //   {
      //     "id": 3,
      //     "name": "Gale Rush",
      //     "username": "Newman Molina",
      //     "age": 22,
      //     "nationality": "GERMANY"
      //   },
      // ]
    },
    {
      "id": 3,
      "name": "Gale Rush",
      "username": "Newman Molina",
      "age": 22,
      "nationality": "GERMANY"
      // "friends" : [
      //   {
      //     "id": 4,
      //     "name": "Hattie Valentine",
      //     "username": "Sawyer Cummings",
      //     "age": 32,
      //     "nationality": "CHILE"
      //   },
      // ]
    },
    {
      "id": 4,
      "name": "Hattie Valentine",
      "username": "Sawyer Cummings",
      "age": 32,
      "nationality": "CHILE",
      "friends" : [
        {
          "id": 5,
          "name": "Snider Ferrell",
          "username": "Santiago Aguilar",
          "age": 31,
          "nationality": "TOGO"
        },
      ]
    },
    {
      "id": 5,
      "name": "Snider Ferrell",
      "username": "Santiago Aguilar",
      "age": 31,
      "nationality": "TOGO"
    },
    {
      "id": 6,
      "name": "Simon Reyes",
      "username": "Cain Powell",
      "age": 35,
      "nationality": "MONACO",
      "friends" : [
        {
          "id": 1,
          "name": "Miranda Howell",
          "username": "Joanna Burns",
          "age": 23,
          "nationality": "BRAZIL"
        },
        {
          "id": 3,
          "name": "Gale Rush",
          "username": "Newman Molina",
          "age": 22,
          "nationality": "GERMANY"
        },
      ]
    }
  ]

  module.exports = { UserList }