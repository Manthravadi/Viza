import express from 'express';

const router = express.Router();

router.get('', (req,res)=>{
    res.status(201).json({message:"Hello World!"});
});

router.get('/logout',(req,res)=>{
    req.logOut();
    res.send(req.user);
  });
export default router;