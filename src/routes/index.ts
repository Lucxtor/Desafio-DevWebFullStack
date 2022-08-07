import { Router } from "express";

import { dividersRoutes } from "./dividers.routes";

const router = Router();

const json = { message: "mensagem" };

router.use("/dividers", dividersRoutes);
router.get("/", (request, response) => {
    return response.json(json);
});

export { router };
