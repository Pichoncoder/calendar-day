import express from "express";
import bodyParser from "body-parser";
import logger from "./util/logger";
import routes from "./routes";
import morgan from "morgan";

const path = require('path');
// Create Express server
const app = express();

// Express configuration
app.set("port", process.env.PORT || 3001);

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('tiny'));

// app.use(express.static(path.join(__dirname, 'build')));

app.use("/api", routes());

app.get("/api", (req, res) =>{
    res.send("Calendar.io API")
});

// Handles any requests that don't match the ones above
// app.get('*', (req,res) =>{
//     res.sendFile(path.join(__dirname+'/build/index.html'));
// });

export default app;