import { Router } from "express";

import { dividersRoutes } from "./dividers.routes";

const router = Router();

router.use("/dividers", dividersRoutes);

export { router };
