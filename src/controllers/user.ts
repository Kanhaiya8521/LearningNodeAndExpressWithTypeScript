import {Request, Response} from 'express';

const userDetails = (req:Request, res:Response):void => {
    let ob = {
        x:20,
        y:3,
    }
    let data = sumData(ob);
    res.json({
        message: 'Home page new!!',
        data: data,
    })
}

interface params{
    x:number;
    y:number;
}

type sumCheck = (x:params) => number

const sumData:sumCheck = (ob:params) => {
    return ob.x + ob.y;
}

export {
    userDetails
}