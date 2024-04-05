const db = require("../model/index");
const hc = db.hc;
const lc = db.lc;

exports.getAllHanger = (req, res) => {
  hc.findAll({
    order: [["hc_insert_dt_taken", "DESC"]],
  })
    .then((hangers) => {
      res.send(hangers);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "An error occurred while retrieving Hanger Cert.",
      });
    });
};

exports.getHangerDetails = (req, res) => {
  const hanger_id = req.query.id;
  hc.findByPk(hanger_id)
    .then((hanger) => {
      if (!hanger) {
        return res.status(404).send({ message: "hanger Not found." });
      }
      res.send(hanger);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
