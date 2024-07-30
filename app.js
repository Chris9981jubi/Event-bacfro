import express from 'express';
import { configDotenv } from 'dotenv';
import { dbConnect } from './database/dataConnect.js';
import messageRouter from './router/messageRouter.js'; 
import cors from "cors";

const app = express();
configDotenv();
app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods:["POST"],

}))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/message', messageRouter);
dbConnect();

app.listen(process.env.PORT_NO, () => {
    console.log(`Server listening at port ${process.env.PORT_NO}`);
  });

export default app;

