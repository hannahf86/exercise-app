const express = require('express');

// IMPORT CONTROLLERS
const { 
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController');

// ROUTER
const router = express();


// ----------- ALL ROUTES -----------

// GET all workouts
router.get('/', getWorkouts)


// GET a single workout
router.get('/:id', getWorkout)


// POST a new workout
router.post('/', createWorkout);


// DELETE a workout
router.delete('/:id', deleteWorkout);


// UPDATE a workout
router.patch('/:id', updateWorkout);




// export routes
module.exports = router;