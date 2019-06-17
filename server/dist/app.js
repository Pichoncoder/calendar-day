"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const morgan_1 = __importDefault(require("morgan"));
const path = require('path');
// Create Express server
const app = express_1.default();
// Express configuration
app.set("port", process.env.PORT || 3001);
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan_1.default('tiny'));
// app.use(express.static(path.join(__dirname, 'build')));
app.use("/api", routes_1.default());
app.get("/api", (req, res) => {
    res.send("Calendar.io API");
});
// Handles any requests that don't match the ones above
// app.get('*', (req,res) =>{
//     res.sendFile(path.join(__dirname+'/build/index.html'));
// });
exports.default = app;
//# sourceMappingURL=app.js.map