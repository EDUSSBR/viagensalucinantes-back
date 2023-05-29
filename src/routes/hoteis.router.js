import { Router } from 'express'
import { getHoteis, getHotelInfo } from '../controllers/hoteis.controller.js'
const hoteisRouter = Router()

hoteisRouter.get('/hoteis/:id', getHotelInfo)

export { hoteisRouter };