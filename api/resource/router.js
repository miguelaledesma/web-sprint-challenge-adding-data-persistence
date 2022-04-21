// build your `/api/resources` router here
const express = require('express'); 

const Resource = require('./model'); 

const router = require('express').Router()



router.get('/', (req,res,next) => {
    Resource.getResources()
    .then(resource => {
        res.status(200).json(resource)
    })
    .catch(next)
})

router.post('/', (req, res, next) => {
    Resource.createResource(req.body)
    .then(resource => {
      res.status(200).json(resource)
    })
    .catch(next);
});
// router.post('/', async (req, res, next) => {
//     try {
//         const resource = await Resource.insert(req.body);
//         res.status(201).json(resource)
//     } catch (err) {
//         next(err);
//     }
// })



module.exports = router 