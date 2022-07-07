const graphql = require("graphql");
const { GraphQLList } = graphql;
var db = require("../../model");
const User = db.users;
const userType = require("../TypeDefs/userType");


module.exports.USER_LIST = {
  type: new GraphQLList(userType),
  resolve(parent, args) {
    let data = User.findAll();
    return data;
  },
};
module.exports.USER_LIST_BY_ID = {
  type: new GraphQLList(userType),
  resolve(parent, args) {
    let data = User.findAll({where:{id:1}});
    return data;
  },
};
