import { Response, Request } from "express";

import { CalculateDividersUseCase } from "./CalculateDividersUseCase";

class CreateCategoryController {
    constructor(private calculateDividersUseCase: CalculateDividersUseCase) {}

    handle(request: Request, response: Response): Response {
        const { n } = request.body;

        this.calculateDividersUseCase.execute({ n });

        return response.status(201).send();
    }
}

export { CreateCategoryController };
