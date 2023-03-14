import express, {Request, Response} from 'express';
const app = express();
const PORT = 4001

app.get('/test', (req:Request, res:Response):void => {
    res.json({data: "page1"})
})

app.listen(PORT, ():void=>{
    console.log(`Server is running on ${PORT}`);

})