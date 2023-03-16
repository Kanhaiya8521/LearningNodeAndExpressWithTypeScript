import { Sequelize } from 'sequelize-typescript'
import * as dotenv from 'dotenv' 
dotenv.config()

import {Users} from './../models/user'


const dbName = process.env.DB_NAME as string
const dbUser = process.env.DB_USER as string
const dbHost = process.env.DB_HOST
const dbPassword = process.env.DB_PASS

const sequelizeConnection = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: 'postgres',
  logging: false,
  models:[Users]
})

export default sequelizeConnection