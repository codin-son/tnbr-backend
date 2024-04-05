const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  },
  
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.hc = require("./hanger_cert.model.js")(sequelize, Sequelize);
db.lc = require("./load_cap.model.js")(sequelize, Sequelize);

// One-to-many relationship: One hanger_cert can have many load_cap
db.hc.hasMany(db.lc, { foreignKey: 'hc_id' });

// Belongs-to relationship: Each load_cap belongs to a hanger_cert
db.lc.belongsTo(db.hc, { foreignKey: 'hc_id' });
module.exports = db;