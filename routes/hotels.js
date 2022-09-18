import express from "express";
import { bycity, bytype, createHotel, getAllHotel, getHotel } from "../controllers/hotels.js";



const router = express.Router(); 


// add or post hotels
router.post("/",createHotel);

//get hotels by id
router.get("/find/:id", getHotel);


// get All hotels 
router.get("/", getAllHotel);
router.get("/bycity", bycity);
router.get("/bytype", bytype);

export default router;