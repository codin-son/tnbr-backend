module.exports = (sequelize, Sequelize) => {
  const Hanger_cert = sequelize.define(
    "Hanger_certs",
    {
      hc_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      hc_type: {
        type: Sequelize.STRING,
      },
      hc_serial_no: {
        type: Sequelize.STRING,
      },
      hc_calibr_load: {
        type: Sequelize.STRING,
      },
      hc_operat_load: {
        type: Sequelize.STRING,
      },
      hc_travel: {
        type: Sequelize.STRING,
      },
      hc_spring_rate: {
        type: Sequelize.STRING,
      },
      hc_com: {
        type: Sequelize.STRING,
      },
      hc_inspector: {
        type: Sequelize.STRING,
      },
      hc_insert_dt_taken: {
        type: Sequelize.DATE,
      },
      hc_ident_no: {
        type: Sequelize.STRING,
      },
      hc_update_dt_taken:{
        type: Sequelize.DATE,
      },
    },
    {
      timestamps: false, // disable automatic timestamp fields
    }
  );

  return Hanger_cert;
};
