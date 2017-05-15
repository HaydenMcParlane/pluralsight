import express from 'express';
import {MongoClient} from 'mongodb';
import schema from './js/data/Schema';
import GraphQLHTTP from 'express-graphql';

let app = express();
app.use(express.static('public'))

app.get('/', (req, res) => res.sendFile('index.html'));

let db;
let  port = 3000;
MongoClient.connect(process.env.MONGO_URL, (err, database) => {
    if (err) throw err;    
    db = database;

    app.use('/graphql', GraphQLHTTP({
        schema: schema(db),
        graphiql: true    
    }));

    app.listen(port, () => console.log("Listening on port " + port));    
});

app.get('/api/links', (req, res) => {
    db.collection('links').find({}).toArray((err, links) => {
        if (err) throw err;

        res.json(links);
    });
})