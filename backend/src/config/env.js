const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const env = {
  port: process.env.PORT || 3000,
  mongoURI: process.env.MONGO_URI,
};

module.exports = env;
