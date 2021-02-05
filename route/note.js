const express = require('express');
const router = express.Router();
const db = require('../db/util')

router.get('/', (req, res)=>{

    res.json(db.readAll())
})

router.post('/', (req, res)=>{
    let body = req.body
    db.addNote(body)
    res.json({"message": "note added successfully"})
})

router.delete('/', (req, res)=>{

    res.json({"test": "answer"})
})

module.exports = router