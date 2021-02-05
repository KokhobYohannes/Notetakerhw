const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const path = require('path');

const PORT = process.env.PORT || 3000;
const env = process.env.NODE_env || "development"; 
const app = express();
const server = http.createServer(app);

const noteRouter = require('./route/note')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'views')));

// serving index files and notes 
app.get('/', (req, res)=>{
    res.render('index.html', {title: 'My note taker'})
})

app.get('/notes', (req, res)=>{
    // res.render('notes.html')
    res.sendFile(path.join(__dirname, '/views/notes.html'))
})

app.use('/api/notes', noteRouter);

server.listen(PORT, console.log(`App is on ${env} Listening on port ${PORT}`));