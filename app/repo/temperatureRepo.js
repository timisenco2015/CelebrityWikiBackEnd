

var storage=[];

let temperatureRepo =
{
  
    // convert temperature from celsius to fahrenheit and fahrenheit to celsius
    temperatureConvertion: async function(req, res) 
    { 
        var temperature = {"celsius":0,"fahrenheit":"32","convertionType":""}; 
        try
        {
           
             
            if(req.body.convertionType=="Fahrenheit")
            {
                temperature.convertionType=req.body.convertionType;
                temperature.celsius=req.body.celsiusValue;
                let  convertedTemperature =  (req.body.celsiusValue * 9/5) + 32;
                temperature.fahrenheit=convertedTemperature;
            }
            else if(req.body.convertionType=="Celsius")
            {
                temperature.convertionType=req.body.convertionType;
                temperature.fahrenheit=req.body.fahrenheitValue;
                let  convertedTemperature  =(req.body.fahrenheitValue - 32) * 5/9;
                console.log("i am here",convertedTemperature );
                temperature.celsius=convertedTemperature;

            }

            storage.push(temperature);
            return { status: 200,statusDesc:"succesful", data: temperature, message: 'Record Fecthed Successfully' };
            
        }
        catch(err)
        {
            
            return res.status(500).send({ message: err.message });
        }
        
        
        
         

    },

    //get the last 10 records from temperature list
    getTemperatureList: async function(req,res)
    {
       
        try
        {
            let subList=[];

            if(storage.length<10)
            {
                subList = storage;
            }
            else
            {
                subList = storage.slice((storage.length-10));
            }
            
            return { status: 200,statusDesc:"succesful", data: subList, message: 'Record Fecthed Successfully' };
      
        }
        catch(err)
        {
            
            return res.status(500).send({ message: err.message });
        }
      
     
    },

   

    
}


module.exports = temperatureRepo;