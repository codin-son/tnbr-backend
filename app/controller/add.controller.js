const db = require("../model/index");
const HangerCert = db.hc;
const load_cap = db.lc;

exports.new_cert = (req, res) => {
  const hanger_cert = {
    hc_type: req.body.hc_type,
    hc_serial_no: req.body.hc_serial_no,
    hc_calibr_load: req.body.hc_calibr_load,
    hc_operat_load: req.body.hc_operat_load,
    hc_travel: req.body.hc_travel,
    hc_spring_rate: req.body.hc_spring_rate,
    hc_com: req.body.hc_com,
    hc_inspector: req.body.hc_inspector,
    hc_insert_dt_taken: req.body.hc_insert_dt_taken,
    hc_ident_no: req.body.hc_ident_no,
  };
  HangerCert.create(hanger_cert)
    .then((data) => {
      res.status(200).send({message: "good"});
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "An error occurred while creating the Hanger Cert.",
      });
    });
};
