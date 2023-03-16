import express, {Request, Response} from "express";
const router = express.Router();

import {userDetails} from './../controllers/user'
router.get('/home', userDetails);

export { router } ;