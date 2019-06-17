"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const get_dayDetails_1 = __importDefault(require("./calendar/day/get.dayDetails"));
const post_event_1 = __importDefault(require("./calendar/event/post.event"));
exports.default = (router) => {
    router.get('/calendar/day', get_dayDetails_1.default);
    router.post('/calendar/day/event', post_event_1.default);
    return router;
};
//# sourceMappingURL=index.js.map