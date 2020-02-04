const _ = require('underscore');
const { validationResult } = require('express-validator');
import { Request, Response } from 'express';

const validate = (validationChains:any) => {
    return [ ...validationChains ];
};


module.exports = validate;