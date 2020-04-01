const knex = require("knex");
const configuration = require("../../knexfile");

const { NODE_ENV } = process.env;
const config = configuration[NODE_ENV] || configuration.development;

const connection = knex(config);

module.exports = connection;
