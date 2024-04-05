const db = require("../model/index");
const hc = db.hc;


exports.deleteHangerByID = (req,res) =>{
    const hanger_id = req.query.id;
    hc.destroy({
        where: { hc_id: hanger_id }
    })
    .then(num => {
        if (num == 1) {
        res.send({
            message: "Hanger was deleted successfully!"
        });
        } else {
        res.send({
            message: `Cannot delete Hanger with id=${hanger_id}. Maybe Hanger was not found!`
        });
        }
    })
    .catch(err => {
        res.status(500).send({
        message: "Could not delete Hanger with id=" + hanger_id
        });
    });

};