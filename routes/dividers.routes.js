"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dividersRoutes = void 0;
const express_1 = require("express");
const calculateDividers_1 = require("../modules/dividers/useCases/calculateDividers");
const dividersRoutes = (0, express_1.Router)();
exports.dividersRoutes = dividersRoutes;
dividersRoutes.post("/", (request, response) => {
    try {
        return calculateDividers_1.calculateDividersController.handle(request, response);
    }
    catch (err) {
        return response.status(400).json(err.message);
    }
});
