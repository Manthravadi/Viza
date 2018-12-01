import express from "express";
import passport from "passport";

const router = express.Router();

router.get("/azure", passport.authenticate("azure_ad_oauth2",{session: false}));

router.get("/azure/callback", passport.authenticate("azure_ad_oauth2",{ failureRedirect: "/login", successRedirect:"/",session:false }));

export default router;
