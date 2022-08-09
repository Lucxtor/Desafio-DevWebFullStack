"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const dividers_routes_1 = require("./dividers.routes");
const router = (0, express_1.Router)();
exports.router = router;
router.use("/dividers", dividers_routes_1.dividersRoutes);
