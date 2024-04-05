module.exports = (sequelize, Sequelize) => {
  const Load_cap = sequelize.define(
    "load_caps",
    {
      lc_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      lc_min: {
        type: Sequelize.STRING,
      },
      lc_max: {
        type: Sequelize.STRING,
      },
      hc_id: {
        type: Sequelize.INTEGER,
      },
    },
    {
      timestamps: false, // disable automatic timestamp fields
    }
  );

  return Load_cap;
};
