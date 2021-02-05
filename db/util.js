const fs = require('fs');
const fileName = './db/db.json'

var notes = [];

fs.readFile(fileName, 'utf8', (err, data)=>{
    if(err){
        console.log("Error while trying to read db file", err)
    }else{
        notes = JSON.parse(data);
   
    }
})

function writeDb(){
    const data = JSON.stringify(notes);
    fs.writeFileSync(fileName, data);
}

module.exports = {
    addNote : function(note){
        notes.push(note)
        writeDb();
    },
    readAll : function(){
        return notes;
    }
}

