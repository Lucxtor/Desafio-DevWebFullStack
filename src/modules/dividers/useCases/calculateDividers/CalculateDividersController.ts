import { Response, Request } from "express";

import { CalculateDividersUseCase } from "./CalculateDividersUseCase";

class CalculateDividersController {
    constructor(private calculateDividersUseCase: CalculateDividersUseCase) {}

    handle(request: Request, response: Response): Response {
        const { n } = request.body;

        let valor = 2;
        let soma = 0;
        for (valor; valor <= n; valor += 1) {
            const dividers1 = this.calculateDividersUseCase.execute({ valor });
            valor += 1;
            const dividers2 = this.calculateDividersUseCase.execute({ valor });
            valor -= 1;
            if (dividers1 === dividers2) {
                soma += 1;
            }
        }

        return response.status(200).json(soma);
    }
}

export { CalculateDividersController };
