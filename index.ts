/* 
* Backend for Games School DB & Forms rewrite
* 
* Authors: Gabriel Brown & Bowen Garth 
*/

import express, {Request, Response, NextFunction} from 'express';
import db from './db';
import * as path from 'path';
import dotenv from 'dotenv';
import { FieldPacket } from 'mysql2';
const app = express();
const port: number = 3000;
dotenv.config();
const API_KEY = process.env.API_KEY;

// Check API key Function
const checkAPIKey = (req: Request, res: Response, next: NextFunction): Response | void => {
    const apikey = req.query.apikey as string | undefined;
    if (apikey !== API_KEY)
        return res.status(401).send("Invalid API Key");
    next();
};

// Error Handler Function
const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction): void => {
    console.error(err.stack);
    res.status(500).send({error: 'Something broke!'});
};

app.use(express.json());
app.use('/api', checkAPIKey);

// Path to server static files
app.use(express.static(path.join(__dirname, 'client/build')));


// Array of paths to serve React app
const reactPaths = [ '/'];

reactPaths.forEach((reactPath) => {
    app.get(reactPath, (req: Request, res: Response) => {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
});

/************ APIs Here ***************/




/**************************************/

// Error Handler Called as last middleware
app.use(errorHandler);

/* Test Database Connection */
db.getConnection().then((connection: any) => {
    connection.release();
    console.log('Connected to database');
    app.listen(port,() => {
        console.log(`Server listening at http://localhost:${port}`);
    });
}).catch((error: any) => {
    console.error(error);
});
