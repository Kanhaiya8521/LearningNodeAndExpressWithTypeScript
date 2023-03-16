import express, {Request, Response} from 'express';
const app = express();
import sequelize from './db/conn';
import { json, urlencoded } from 'body-parser';

app.use(json());
app.use(urlencoded({extended:true}));

import {router} from './routes/user'
app.use('/', router);


const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        sequelize.sync({ force: false });
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}
connectDB();

const PORT = 4001
app.listen(PORT, ():void=>{
    console.log(`Server is running on ${PORT}`);

})