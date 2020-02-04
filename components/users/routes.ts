import { NextFunction, Request, Response, Router } from 'express';
import { check,validationResult } from 'express-validator';
//const validate = require('../validators/validate');
const validate = require('./../../validators/validate');
const propertyValidator = require('./validators/property.chains');

class Routes{
  public routes:any;
  constructor(){
    this.routes= Router();
    this._intializeRoutes();
  }
  //Intializes all the User module Routes
  _intializeRoutes(){

    //Intialize get details api
    this.routes.post('/GetSectorByPropertyID',
      propertyValidator.checkProperty,
      function(req:Request, res:Response, next:NextFunction) {
        const result = validationResult(req);
        if (!result.isEmpty()) {
          return res.status(422).json({ errors: result.array() });
        }
        res.send("hello");
      }
    );

  
  }
}

export =new Routes().routes;
