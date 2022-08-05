import { CalculateDividersController } from "./CalculateDividersController";
import { CalculateDividersUseCase } from "./CalculateDividersUseCase";

const calculateDividersUseCase = new CalculateDividersUseCase();
const calculateDividersController = new CalculateDividersController(
    calculateDividersUseCase
);

export { calculateDividersController, calculateDividersUseCase };
