const Sequelize = require("sequelize");
require("dotenv").config();

const sequelize = process.envJAWSDB_URL 
? new Sequelize(process.env.envJAWSDB_URL)
: new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: "localhost",
    dialect: "mysql",
    port: 3306,
    dialectOptions: {
      socketPath: "/tmp/mysql.sock",
    },
  }
);

module.exports = sequelize;
