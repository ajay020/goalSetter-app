const asyncHandler = require('express-async-handler');// alternate for try catch

//@desc get goals
//@route GET /api/goals
//@access private
const getGoals = asyncHandler(async(req, res)=>{
    res.status(200).json({msg:"goals"});
})
//@desc set goal
//@route POST /api/goal/
//@access private
const setGoal = asyncHandler(async(req, res)=>{
    if(!req.body.text){
        res.status(400);
        throw new Error("Please add a text field");
    }
    res.status(200).json({msg:"set goal"});
})
//@desc update goal
//@route PUT /api/goal/:id
//@access private
const updateGoal = asyncHandler(async(req, res)=>{
    res.status(200).json({msg:"update goals"});
})
//@desc delete goal
//@route DELTE /api/goal/:id
//@access private
const deleteGoal = asyncHandler(async(req, res)=>{
    res.status(200).json({msg:" delte goals"});
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}