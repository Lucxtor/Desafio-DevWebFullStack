import { Router } from "express";

import { calculateDividersController } from "../modules/dividers/useCases/calculateDividers";

const dividersRoutes = Router();

dividersRoutes.post("/", (request, response) => {
    try {
        return calculateDividersController.handle(request, response);
    } catch (err: any) {
        return response.status(400).json(err.message);
    }
});

export { dividersRoutes };
