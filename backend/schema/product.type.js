const { GraphQLObjectType, 
        GraphQLID, 
        GraphQLString,
        GraphQLInt,
    } = require('graphql');

const ProductType = new GraphQLObjectType({
    name: 'Product',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        price: { type: GraphQLInt },
        description: { type: GraphQLString }
    })
});

module.exports = ProductType;

