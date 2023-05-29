import { Router } from 'express'
import { getCidades } from '../controllers/cidades.controller.js'
import { getPassagens } from '../controllers/passagens.controller.js'
import { getHoteis } from '../controllers/hoteis.controller.js'
const cidadesRouter = Router()

cidadesRouter.get('/cidades', getCidades)
cidadesRouter.get('/cidades/:id/hoteis', getHoteis)
cidadesRouter.get('/cidades/:id/passagens', getPassagens)

export { cidadesRouter };