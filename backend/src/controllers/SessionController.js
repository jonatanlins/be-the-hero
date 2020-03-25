const db = require("../database/connection");
const crypto = require("crypto");

module.exports = {
  async create(request, response) {
    const { id } = request.body;

    const ong = await db("ongs")
      .where("id", id)
      .select("name")
      .first();

    if (!ong) {
      return response.status(400).send({ error: "No ONG found with this ID" });
    }

    return response.send(ong);
  }
};
