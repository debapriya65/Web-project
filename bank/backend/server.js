import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import {User} from './db/user.js';
import {sign_in} from './route/signin.js';
import { purchase } from './route/purchase.js';
export const app = express();
const uri = "mongodb://localhost:27017";//process.env.ATLAS_URI;
console.log("URI = ",uri);
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Connection established")
})
app.use(express.json());
app.use(cors());
app.post('/signin',sign_in);
app.post('/purchase',purchase);
app.listen(8080);
