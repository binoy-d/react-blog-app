import express from 'express';
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';
const app = express();


app.use(bodyParser.json());


app.get('/api/articles/:name', async (req, res) => {
    try {
        const articleName = req.params.name;
        //returns client object to use to send queries
        const client = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true });
        const db = client.db('react-blog');
        const articleInfo = await db.collection('articles').findOne({ name: articleName });


        res.status(200).json(articleInfo);
        client.close();
    } catch (e) {
        res.status(500).json({ message: 'bruh', e });
    }

});



app.post('/api/articles/:name/upvote', (req, res) => {
    const articleName = req.params.name;

    const client = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true });
    const db = client.db('react-blog');


    const articleinfo = await db.collection('articles').findOne({name:articleName});

    await db.collection('articles').updateOne({name:articleName}, '$set':{upvotes:articleinfo.upvotes+1})

});

app.post('/api/articles/:name/add-comment', (req, res) => {
    const { username, text } = req.body;
});


app.listen(8000, () => console.log("oh yes server is running on port 8000"));