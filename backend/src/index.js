const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const { errors } = require("celebrate");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
