const express = require("express");

const IncidentController = require("./controllers/IncidentController");
const OngController = require("./controllers/OngController");
const OngProfileController = require("./controllers/OngProfileController");
const SessionController = require("./controllers/SessionController");

const routes = express.Router();

routes.get("/incidents", IncidentController.index);
routes.post("/incidents", IncidentController.create);
routes.delete("/incidents/:id", IncidentController.delete);

routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.create);

routes.get("/ongprofiles", OngProfileController.index);

routes.post("/sessions", SessionController.create);

module.exports = routes;
