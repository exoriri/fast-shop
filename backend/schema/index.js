const { GraphQLObjectType, GraphQLSchema, GraphQLList } = require('graphql');

const ProductType = require('./product.type');
const Product = require('../models/Product');

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    description: 'application query root',
    fields: async () => ({
        products: {
            type: new GraphQLList(ProductType),
            description: 'List of products',
            resolve: () => ([])
        }
    })
});

module.exports = new GraphQLSchema({
    query: RootQuery
});

