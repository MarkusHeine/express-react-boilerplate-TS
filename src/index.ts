import express from "express";
import * as bodyParser from "body-parser";

const app = express();

const PORT = 3000;

const indexRouter = require("./routes/index");
const userAPIRouter = require("./routes/userAPI");

app.use(express.json());
app.use(bodyParser.json());

app.use("/index", indexRouter);
app.use("/userAPI", userAPIRouter);

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});
