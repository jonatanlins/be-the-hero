const db = require("../database/connection");
const crypto = require("crypto");

module.exports = {
  async index(request, response) {
    const { page = 1 } = request.query;

    const [count] = await db("incidents").count();

    response.header("X-Total-Count", count["count(*)"]);

    const incidents = await db("incidents")
      .join("ongs", "ongs.id", "=", "incidents.ong_id")
      .limit(5)
      .offset((page - 1) * 5)
      .select(
        "incidents.*",
        "ongs.name",
        "ongs.email",
        "ongs.whatsapp",
        "ongs.city",
        "ongs.uf"
      );

    return response.send(incidents);
  },

  async create(request, response) {
    const { title, description, value } = request.body;
    const ong_id = request.headers.authorization;

    const [id] = await db("incidents").insert({
      title,
      description,
      value,
      ong_id
    });

    return response.send({ id });
  },

  async delete(request, response) {
    const { id } = request.params;
    const ong_id = request.headers.authorization;

    const incident = await db("incidents")
      .where("id", id)
      .select("ong_id")
      .first();

    if (incident.ong_id !== ong_id) {
      return response.status(401).json({ error: "Operation not allowed" });
    }

    await db("incidents")
      .where("id", id)
      .delete();

    return response.status(204).send({ id });
  }
};