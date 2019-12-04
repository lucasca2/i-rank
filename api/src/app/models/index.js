import fs from 'fs';
import path from 'path';

const baseName = path.basename(__filename);

/**
 * Array that will store all models
 */
const Models = [];

/**
 * Get all models from directory /src/app/models
 */
fs.readdirSync(path.resolve(__dirname))
  .filter(file => (file !== baseName) && (/\.js$/.test(file)))
  .forEach(file => Models.push(require(path.resolve(__dirname, file)).default));

export default Models;
