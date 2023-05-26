import express, { Router } from "express";
import {cidadesRouter } from './cidades.router.js'
import cors from 'cors'

const routes = Router()

routes.use(cors())
routes.use(express.json())
routes.use(cidadesRouter)

export default routes