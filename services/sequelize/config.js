const dotenv = require("dotenv")
const path = require("path")

dotenv.config({ path: path.resolve(__dirname, "../.env") });

module.exports.development = {
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  dialect: "mysql",
  seederStorage: "sequelize",
  url: process.env.DB_URL,
}

module.exports.production = {
  dialect: "mysql",
  seederStorage: "sequelize",
  url: process.env.DB_URL
}