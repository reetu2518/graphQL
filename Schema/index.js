const graphql = require("graphql");
const {
  GraphQLList,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLSchema,
} = graphql;

const {USER_LIST, USER_LIST_BY_ID} = require("./Queries/User");

const RootQuery = new GraphQLObjectType({
  name: "xyz",
  fields: {
    userList: USER_LIST,
    userList2: USER_LIST_BY_ID,
  },
});

module.exports = new GraphQLSchema({query:RootQuery});