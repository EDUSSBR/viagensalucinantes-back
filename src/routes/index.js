import express, { Router } from "express";
import {cidadesRouter } from './cidades.router.js'
import cors from 'cors'
import { passagensRouter } from "./passagens.router.js";
import { hoteisRouter } from "./hoteis.router.js";

const routes = Router()

routes.use(cors())
routes.use(express.json())
routes.use(cidadesRouter)
routes.use(passagensRouter)
routes.use(hoteisRouter)

export default routes