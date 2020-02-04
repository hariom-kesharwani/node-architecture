import { NextFunction, Request, Response } from 'express';
import { check,validationResult } from 'express-validator';

let propertyValidator= {
  
  checkProperty: async function(req:Request, res:Response, next:NextFunction) {
    await check('property_id').exists().run(req);
    
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(422).json({ errors: result.array() });
    }
    next();
  }
}

export = propertyValidator;