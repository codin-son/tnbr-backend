const db = require("../model/index");
const hc = db.hc;


exports.updateHangerByID = (req,res) =>{
    const hanger_id = req.body.hanger_id;
    hc.update(req.body, {
        where: { hc_id: hanger_id }
    })
    .then(num => {
        if (num == 1) {
        res.send({
            message: "Hanger was updated successfully!"
        });
        } else {
        res.send({
            message: `Cannot update Hanger with id=${hanger_id}. Maybe Hanger was not found or req.body is empty!`
        });
        }
    })
    .catch(err => {
        res.status(500).send({
        message: "Could not update Hanger with id=" + hanger_id
        });
    });
}