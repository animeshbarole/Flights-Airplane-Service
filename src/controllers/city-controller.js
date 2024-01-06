const {StatusCodes} = require('http-status-codes');
const {CityService} = require('../services');
const {SuccessResponse , ErrorResponse} = require('../utils/common');

// ** /cities post  req-body {name : London} ** //
async function createCity(req,res) {
    try {
           const city = await CityService.createCity({
          name : req.body.name
        });
        SuccessResponse.data = city;
        return res
                    .status(StatusCodes.CREATED)
                    .json(SuccessResponse);

} catch(error) {
ErrorResponse.error = error;
return res  
         .status(error.statusCode)
          .json(ErrorResponse);
}
}
async function destroyCity(req, res) {
    try {
        const city = await CityService.destroyCity(req.params.id);
        SuccessResponse.data = city;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);
    } catch(error) {
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}
async function updateCity(req,res)
{
    try{ 
         
        
         const city = await CityService.updateCity(
            {name : req.body.name},
            req.params.id
         );
         SuccessResponse.data = city;
       

         return res.
                   status(StatusCodes.OK)
                  .json( SuccessResponse );

    }catch(error) 
    {
        ErrorResponse.error = error 
        return res
                  .status(error.statusCode) //Error has Self Property statusCode we simply not write again we just
                                            //Pass it with statusCode
                  .json(ErrorResponse);
    }
}
module.exports = {
    createCity,
    destroyCity,
    updateCity
}