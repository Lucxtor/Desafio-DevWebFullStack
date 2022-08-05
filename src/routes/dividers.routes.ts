import { Router } from "express";

import { calculateDividersController } from "../modules/dividers/useCases/calculateDividers";

const dividersRoutes = Router();

dividersRoutes.post("/", (request, response) => {
    return calculateDividersController.handle(request, response);
});

export { dividersRoutes };
