const { verifyNewCert } = require("../middleware/index");
const addController = require("../controller/add.controller");
const fetchController = require("../controller/fetch.controller");
const deleteController = require("../controller/delete.controller");
const updateController = require("../controller/update.controller");
module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.post(
    "/add_hanger_cert",
    [verifyNewCert.checkDuplicateIdentNo],
    addController.new_cert
  );

  app.get("/getAllHanger", [fetchController.getAllHanger]);

  app.get("/getHangerByID", fetchController.getHangerDetails);

  app.get("/deleteHangerByID", deleteController.deleteHangerByID);

  app.post("/updateHangerByID", updateController.updateHangerByID);
};
