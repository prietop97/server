const express = require('express');
const Info = require('./user-model');
const restricted = require('../auth/restricted');

const router = express.Router();

router.get('/', (req, res) => {
    Info.find()
        .then(success => {
            res.status(200).json(success)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

router.get('/:id', restricted, (req, res) => {
    const id = req.params.id;

    Info.findById(id)
        .then(info => {
            res.status(200).json(info)
        })
        .catch(err => {
            res.status(500).json({ error: `No user information attached with user id ${id} `})
        })
})

router.post('/', restricted, (req, res) => {
    const { user_id, first_name, gender, age, height, weight, activity_factor, meals_per_day, snacks_per_day, goal_multiplier } = req.body;

    if(!user_id || !first_name || !gender || !age || !height || !weight || !activity_factor || !(meals_per_day >= 0) || !(snacks_per_day >= 0) || !goal_multiplier) {
        res.status(400).json({ error: 'Please provide the proper body with the request'})
    } else {
        Info.add(req.body)
            .then(saved => {
                res.status(201).json(saved)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }
})

router.put('/:id', restricted, (req, res) => {
    const id = req.params.id;
    const { user_id, first_name, gender, age, height, weight, activity_factor, meals_per_day, snacks_per_day, goal_multiplier } = req.body;
    
    if(!user_id || !first_name || !gender || !age || !height || !weight || !activity_factor || !(meals_per_day >= 0) || !(snacks_per_day >= 0) || !goal_multiplier) {
        res.status(400).json({ error: 'Please provide the proper body with the request'})
    } else {
        Info.update(id, req.body)
            .then(saved => {
                res.status(201).json(saved)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }
})

router.delete('/:id', restricted, (req, res) => {
    const id = req.params.id;

    Info.remove(id)
        .then(del => {
            res.status(200).json({ message: `You successfully delete the user information with the ID ${id}`})
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

module.exports = router;