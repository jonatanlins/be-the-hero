const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
