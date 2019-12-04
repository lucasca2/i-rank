import fs from 'fs';
import path from 'path';

/**
 * Object that will store all controllers
 * @property { object } User
 */
let Controllers = {};

/**
 * Get all controllers from directory /src/app/controllers
 */
fs.readdirSync(path.resolve(__dirname))
  .filter(file => /(Controller\.js)$/.test(file))
  .forEach(file => {
    let key = file.replace(/Controller\.js$/, '');
    Controllers[key] = require(path.resolve(__dirname, file)).default;
  });


export default Controllers;

