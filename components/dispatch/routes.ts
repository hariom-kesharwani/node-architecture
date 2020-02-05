import { NextFunction, Request, Response, Router } from 'express';

const propertyValidator = require('./validators/property.chains');
import dispatchController from './controllers/dispatch.controller'


class Routes{
  public routes:any;
  constructor(){
    this.routes= Router();
    this._intializeRoutes();
  }
  //Intializes all the User module Routes
  _intializeRoutes(){

    //Get Sector by Property Id
    this.routes.post('/GetSectorByPropertyID',
      propertyValidator.checkProperty,
      async function(req:Request, res:Response, next:NextFunction) {
        try{
          let propertyId= req.body.property_id;
          let data= await dispatchController.getSectorByPropertyId(propertyId);
          res
          .status(200)
          .send({data:data});

        }catch(ex){
          next(ex);
        }
        
      }
    );

  
  }
}

export =new Routes().routes;
