const express = require("express");
const app = express();

const cors = require("cors");
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("*", function (req, res) {
  res.status(404).send(res.statusCode);
});

function errorHandler(err, req, res, next) {
  const defaultError = {
    log: "Express error handler caught unknown middleware error",
    status: 400,
    message: { err: "An error occurred" },
  };
  const errorObj = Object.assign(defaultError, err);
  console.log(errorObj.log);
  res.status(errorObj.status).send(errorObj.message);
}

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
