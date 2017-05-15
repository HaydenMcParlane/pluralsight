import{
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLInt,
    GraphQLList,
    GraphQLString
} from 'graphql';


let Schema = (db) => {

    let counter = 52;
    let data = [
        {counter: 1},
        {counter: 2},
        {counter: 3}
    ];
    let CounterType = new GraphQLObjectType({
        name: "Counter",
        fields: () => ({
            counter: {
                type: GraphQLInt            
            }
        })
    });

    let LinkType = new GraphQLObjectType({
        name: "Link",
        fields: () => ({
            _id: {
                type: GraphQLString
            },
            title: {
                type: GraphQLString 
            },
            url: {
                type: GraphQLString
            }
        })
    });

    let schema = new GraphQLSchema({
        query: new GraphQLObjectType({
            name: 'Query',
            fields: () => ({
                links: {
                    type: new GraphQLList(LinkType),
                    resolve: () => db.collection('links').find({}).toArray()
                }
            })
        }),    
        // mutation: new GraphQLObjectType({
        //     name: "Mutation",
        //     fields: () => ({
        //         incrementCounter: {
        //             type: GraphQLInt,
        //             resolve: () => ++counter
        //         }
        //     })
        // })
    });
    return schema;
}

export default Schema;