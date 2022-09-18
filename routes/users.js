import express from "express";
import { getAllUsers, getUser } from "../controllers/users.js";
import { isAdmin, verifyToken, verifyUser } from "../utlis/VerifyToken.js";


const router = express.Router(); 

//for login
// router.get("/checkauth", verifyToken, (req, res, next) => {
//     res.send("You are Logged In")
// });

// //for login and you can delete your account
// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//     res.send("You are Logged In and you can delete account")
// });

//get user by id
router.get("/:id",verifyUser, getUser);


// get All users -> for admin section 
router.get("/", isAdmin,getAllUsers);


export default router;