const db = require("../model/index");
const HangerCert = db.hc;

checkDuplicateIdentNo = (req, res, next) =>{
    HangerCert.findOne({
        where:{
            hc_ident_no: req.body.hc_ident_no,
        },
    })
    .then((ident_id)=>{
        if(ident_id){
            res.status(400).send({
                message: "Failed! Ident No is already in use!"
            });
            return;
        }
        next();
    })
};

const verifyNewCert = {
    checkDuplicateIdentNo: checkDuplicateIdentNo,
};
module.exports = verifyNewCert;