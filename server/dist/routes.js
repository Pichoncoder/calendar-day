"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_async_router_1 = require("express-async-router");
const v1_1 = __importDefault(require("./controllers/v1"));
const routes = () => {
    const router = express_async_router_1.AsyncRouter();
    router.use('/v1', v1_1.default(router));
    return router;
};
exports.default = routes;
//# sourceMappingURL=routes.js.map