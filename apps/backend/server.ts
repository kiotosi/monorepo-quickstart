import express from "express";
import * as dotenv from "dotenv";
dotenv.config();

const app = express();

const port = process.env["PORT"] || 8001;
app.listen(port, () => {
    console.log("Server is listening on port ", port);
});
