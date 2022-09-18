import Hotel from "../models/Hotel.js"

export const createHotel = async (req, res, next) => {
    const newHotel = new Hotel(req.body);
    try{

      const savedHotel = await newHotel.save();
      res.status(200).json(savedHotel)

    }catch(error){
     next(error)
    }
}

export const getHotel = async (req, res, next) => {
    try{

        const hotel = await Hotel.findById(req.params.id);
        res.status(200).json(hotel)
  
      }catch(error){
       next(error)
      }
}

export const getAllHotel = async (req, res, next) => {

  const {min, max, ...others} = req.query;
    try{

        const hotels = await Hotel.find({...others, price: {$qt:min || 1, $lt:max || 99999}}).limit(req.query.limit);
        res.status(200).json(hotels)
  
      }catch(error){
      next(error)
      }
}
export const bycity = async (req, res, next) => {
  const cities = req.query.cities.split(",");
  try{

      const list = await Promise.all(cities.map(city => {
        return Hotel.countDocuments({city:city});
      }))
      res.status(200).json(list)

    }catch(error){
    next(error)
    }
}

export const bytype = async (req, res, next) => {
  try{

      const allHotels = await Hotel.countDocuments({type:"Hotel"});
      const allApartments = await Hotel.countDocuments({type:"Apartment"});
      const allResorts = await Hotel.countDocuments({type:"Resort"});
      const allVillas = await Hotel.countDocuments({type:"Villa"});
      const allCabins = await Hotel.countDocuments({type:"Cabin"});
      res.status(200).json([
        {type:"Hotel" , count:allHotels},
        {type:"Apartment" , count:allApartments},
        {type:"Resort" , count:allResorts},
        {type:"Villa" , count:allVillas},
        {type:"Cabin" , count:allCabins},
        
      ])

    }catch(error){
    next(error)
    }
}