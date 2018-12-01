import express from "express";
import passport from "passport";
import employees from '../../data/employees'

const router = express.Router();

router.get('/current_user',(req,res)=>{
    res.send(req.user);
});

router.get('/employees',(req,res)=>{
    res.send(employees);
});

export default router;