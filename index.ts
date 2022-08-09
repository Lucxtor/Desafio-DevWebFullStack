import cors from "cors";
import express from "express";
import path from "path";

import { router } from "./routes";

const app = express();

app.use(cors());

app.use(express.json());

app.use(router);

app.use(express.static(path.join(__dirname, "build")));

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});

export { app };
