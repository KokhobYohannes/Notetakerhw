const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const path = require('path');

const PORT = process.env.PORT;
const env = process.env.NODE_env; 
const app = express();
const server = http.createServer(app);

const noteRouter = require('./route/note')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// serving html content with ejs templating engine
app.set('views', __dirname + 'views')
app.engine('html', require('ejs').renderFile)

app.use(express.static(path.join(__dirname, 'views')));

// serving index files and notes 
app.get('/', (req, res)=>{
    res.render('index.html', {title: 'My note taker'})
})

app.get('/notes', (req, res)=>{
    res.render('notes.html')
})

app.use('/api/notes', noteRouter);

server.listen(PORT, console.log(`App is on ${env} Listening on port ${PORT}`));