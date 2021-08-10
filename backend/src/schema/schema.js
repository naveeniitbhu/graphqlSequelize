// import { GraphQLObjectType, GraphQLString, GraphQLSchema } from 'graphql';

const graphql = require('graphql');
import user from '../database/models/user';


const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema
} = graphql;

const UserType = new GraphQLObjectType({
  name: 'User',
  description: 'Users Details',
  fields: () => ({
    firstName: { type: GraphQLString},
    lastName: { type: GraphQLString},
    email: { type: GraphQLString}
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: { firstName: { type: GraphQLString},
              lastName: { type: GraphQLString},
              email: { type: GraphQLString}
      },
      resolve(parentValue,args) {
        const getUser = async () => {
          const userVal = await user.findAll({
            where: {
              firstName: args.firstName
            }
          });
          console.log(userVal)
          console.log(userVal[0].dataValues)
          return userVal[0].dataValues
        }
        return getUser()
      }
    }
  }
});

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addUser: {
      type: UserType,
      args: {
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        email: { type: GraphQLString }
      },
      resolve( parentValue, {firstName, lastName, email}) {
        const addUser = async () => {
          const userVal = await user.create({firstName, lastName, email})
          console.log(userVal)
          return userVal
        }
        return addUser()
      }
    }
  }
})

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: mutation
});

export default schema;