import { Router } from "express";
import fs from 'fs';
import path from 'path';

// Controllers
import Controllers from "../controllers";

/**
 * Object that will store all routes
 * @property { object } User
 */
let Routes = {};

/**
 * Get all routes from directory /src/app/routes
 */
fs.readdirSync(path.resolve(__dirname))
  .filter(file => /(Routes\.js)$/.test(file))
  .forEach(file => {
    let key = file.replace(/Routes\.js$/, '');
    Routes[key] = require(path.resolve(__dirname, file)).default;

    Routes[key] = Routes[key](new Router, Controllers[key]);
  });

export default Routes;

