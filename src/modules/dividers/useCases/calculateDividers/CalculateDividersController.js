"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculateDividersController = void 0;
class CalculateDividersController {
    constructor(calculateDividersUseCase) {
        this.calculateDividersUseCase = calculateDividersUseCase;
    }
    handle(request, response) {
        const tempo1 = new Date();
        const { n } = request.body;
        if (typeof n !== "number") {
            throw new Error("Valor inválido!");
        }
        let valor = 3;
        let soma = 0;
        let aux = 2;
        for (valor; valor <= n; valor += 1) {
            const dividers = this.calculateDividersUseCase.execute({ valor });
            if (dividers === aux) {
                soma += 1;
            }
            aux = dividers;
        }
        const tempo2 = new Date();
        const tempo = tempo2 - tempo1;
        const resultado = { resultado: soma, tempo };
        return response.json(resultado);
    }
}
exports.CalculateDividersController = CalculateDividersController;
