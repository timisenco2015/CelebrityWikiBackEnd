const express = require('express');
const routeLabel = require('route-label');
const router = express.Router();
require('dotenv').config('./app');
const temperatureRepo = require('../../repo/temperatureRepo');





//get star wars celebrity by id
router.post("/temperatureconversion/convertTemperature", async (req, res) => {
    try 
    {
       
       const success = await temperatureRepo.temperatureConvertion(req, res);
      
        res.status(success.status).send(success);
    } catch (error) {
       console.log(error);
        res.status(500).send(error);
    }
});


router.get("/temperatureconversion/getTemperatureList", async (req, res) => {
    try 
    {
       
       const success = await temperatureRepo.getTemperatureList(req, res);
      
       await res.status(success.status).send(success);
    } catch (error) {
       console.log(error);
        res.status(500).send(error);
    }
});

module.exports = router;