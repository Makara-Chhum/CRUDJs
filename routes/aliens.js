const express = require('express')
const req = require('express/lib/request')
const res = require('express/lib/response')
const router = express.Router()
//To use schema from alien.js to use in aliens.js have to export module
const Alien = require('../models/alien')

//GET request
router.get('/' , async(req, res) => {
    
    try{
        const aliens = await Alien.find()
        res.json(aliens)
    }
    catch(err){
        res.send('Error '+ err)
    }
})

//GET request specific ID
router.get('/:id' , async(req, res) => {
    //res.send('Get requested..');

    try{
        const alien = await Alien.findById(req.params.id)
        res.json(alien)
    }
    catch(err){
        console.log(err)
        res.send('Error '+ err)
    }
})

//POST request
router.post('/', async(req, res) => {
    const {tech,name,sub} = req.body;

    const alien = new Alien({
        name: name,    
        tech: tech,
        sub: sub
    })

    try{ 
        await alien.save()
        res.send('successful')
    }
    catch(err){
        console.log(err)
        res.send('Error')
    }
})

//Update specific alien data
router.patch('/:id', async(req, res) => {
    const {tech,name,sub} = req.body;

    const alien = new Alien({
        name: name,    
        tech: tech,
        sub: sub
    })

    try{ 
        const alien = await Alien.findById(req.params.id)
        alien.sub = sub
        // alien.tech = tech
        // alien.name = name
        const a1 = await alien.save()
        res.json(a1)
    }
    catch(err){
        console.log(err)
        res.send('Error')
    }
})

//Delete specific alien data
router.delete(':/id', async(res,req)=> {
    const {tech,name,sub} = req.body;

    const alien = new Alien({
        name: name,    
        tech: tech,
        sub: sub
    })

    try{ 
        const alien = await Alien.findById(req.params.id)
        const a1 = await alien.remove()
        res.json(a1)
    }
    catch(err){
        console.log(err)
        res.send('Error')
    }
})

//export module router for using in app.js
module.exports = router