import express from "express";
import { createRoom, getAllRooms, getRoom } from "../controllers/rooms.js";
import { isAdmin } from "../utlis/VerifyToken.js";


const router = express.Router(); 


// add or post rooms
router.post("/:hotelId", isAdmin ,createRoom);

//get room by id
router.get("/:id", getRoom);


// get All hotels 
router.get("/", getAllRooms);


export default router;