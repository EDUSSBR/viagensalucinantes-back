import { Router } from 'express'
import { getCidades } from '../controllers/cidades.controller.js'
const cidadesRouter = Router()

cidadesRouter.get('/cidades', getCidades)

export { cidadesRouter };