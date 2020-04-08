const { GraphQLObjectType, 
        GraphQLID, 
        GraphQLString,
    } = require('graphql');

const ProductType = new GraphQLObjectType({
    name: 'Product',
    fields: () => ({
        _id: { type: GraphQLID },
        name: { type: GraphQLString },
        price: { type: GraphQLString },
        description: { type: GraphQLString }
    })
});

module.exports = ProductType;

