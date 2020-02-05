import express from "express";
import * as bodyParser from "body-parser";
import logger from "morgan";
import compression from "compression";

const app = express();

const PORT = 8080;

const indexRouter = require("./routes/index");
const userAPIRouter = require("./routes/userAPI");

app.use(express.json());
app.use(bodyParser.json());
app.use(logger("dev"));
app.use(compression());

app.use("/index", indexRouter);
app.use("/userAPI", userAPIRouter);

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});
