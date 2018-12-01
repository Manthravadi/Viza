import express from "express";
import passport from "passport";

const router = express.Router();

router.get("/azure", passport.authenticate("azure_ad_oauth2",));

router.get("/azure/callback", passport.authenticate("azure_ad_oauth2"),(req,res)=>{
    console.log("check");
    console.log(req.user);
    res.redirect('http://localhost:3000');
});

export default router;
