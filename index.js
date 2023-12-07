"use strict";
/*
* Backend for Games School DB & Forms rewrite
*
* Authors: Gabriel Brown & Bowen Garth
*/
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./db"));
const path = __importStar(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
const app = (0, express_1.default)();
const port = 3000;
dotenv_1.default.config();
const API_KEY = process.env.API_KEY;
// Check API key Function
const checkAPIKey = (req, res, next) => {
    const apikey = req.query.apikey;
    if (apikey !== API_KEY)
        return res.status(401).send("Invalid API Key");
    next();
};
// Error Handler Function
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ error: 'Something broke!' });
};
app.use(express_1.default.json());
app.use('/api', checkAPIKey);
// Path to server static files
app.use(express_1.default.static(path.join(__dirname, 'client/build')));
// Array of paths to serve React app
const reactPaths = ['/'];
reactPaths.forEach((reactPath) => {
    app.get(reactPath, (req, res) => {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
});
/************ APIs Here ***************/
/**************************************/
// Error Handler Called as last middleware
app.use(errorHandler);
/* Test Database Connection */
db_1.default.getConnection().then((connection) => {
    connection.release();
    console.log('Connected to database');
    app.listen(port, () => {
        console.log(`Server listening at http://localhost:${port}`);
    });
}).catch((error) => {
    console.error(error);
});
