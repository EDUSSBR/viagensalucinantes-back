import { Router } from 'express'
import { getPassagens } from '../controllers/passagens.controller.js'
const passagensRouter = Router()

passagensRouter.get('/passagens', getPassagens)

export { passagensRouter };