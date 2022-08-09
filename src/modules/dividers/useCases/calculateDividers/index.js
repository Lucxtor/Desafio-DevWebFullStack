"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateDividersUseCase = exports.calculateDividersController = void 0;
const CalculateDividersController_1 = require("./CalculateDividersController");
const CalculateDividersUseCase_1 = require("./CalculateDividersUseCase");
const calculateDividersUseCase = new CalculateDividersUseCase_1.CalculateDividersUseCase();
exports.calculateDividersUseCase = calculateDividersUseCase;
const calculateDividersController = new CalculateDividersController_1.CalculateDividersController(calculateDividersUseCase);
exports.calculateDividersController = calculateDividersController;
