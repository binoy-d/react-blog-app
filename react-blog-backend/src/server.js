import express from 'express';
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';
import path from 'path';
const app = express();

app.use(express.static(path.join(__dirname, '/build')));


app.use(bodyParser.json());


const withDB = async (operations, res) => {
    try {
        //returns client object to use to send queries
        const client = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true });
        const db = client.db('react-blog');

        await operations(db);

        client.close();
    } catch (e) {
        res.status(500).json({ message: 'bruh', e });
    }
}

app.get('/api/articles/:name', async (req, res) => {

    withDB(async (db) => {
        const articleName = req.params.name;
        const articleInfo = await db.collection('articles').findOne({ name: articleName });
        res.status(200).json(articleInfo);
    }, res);
});



app.post('/api/articles/:name/upvote', async (req, res) => {


    withDB( async (db)=>{
        const articleName = req.params.name;
        const articleinfo = await db.collection('articles').findOne({ name: articleName });

        await db.collection('articles').updateOne({ name: articleName }, {
            '$set': { upvotes: articleinfo.upvotes + 1 }
        });
        const updatedArticleInfo = await db.collection('articles').findOne({ name: articleName });

        res.status(200).json(updatedArticleInfo);
    }, res);
        
        

});

app.post('/api/articles/:name/add-comment', (req, res) => {
    const { username, text } = req.body;
    const articleName = req.params.name;

    withDB( async (db)=>{
        const articleinfo = await db.collection('articles').findOne({ name: articleName });

        await db.collection('articles').updateOne({ name: articleName }, {
            '$set': { comments: articleinfo.comments.concat({username, text})}
        });
        const updatedArticleInfo = await db.collection('articles').findOne({ name: articleName });
        res.status(200).json(updatedArticleInfo);
    }, res);
});


app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname+'/build/index.html'));
})


app.listen(8000, () => console.log("oh yes server is running on port 8000"));