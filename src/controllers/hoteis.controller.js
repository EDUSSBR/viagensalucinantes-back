import chalk from 'chalk'
import { getHotelInfoDB } from '../repository/hoteis.repository.js'
import { getHoteisByCityDB } from '../repository/hoteis.repository.js'
export async function getHoteis(req, res) {
    try {
        const {id} = req.params
        console.log(`${chalk.blue("GET")} ${chalk.green(`/hoteis/${id}`)}`)
        const hoteis = await getHoteisByCityDB(id)
        res.send(hoteis)
    } catch (e) {
        console.log(e)
    }
}
export async function getHotelInfo(req, res) {
    try {
        const {id} = req.params
        console.log(id)
        console.log(`${chalk.blue("GET")} ${chalk.green(`/hoteis/${id}`)}`)
        const hoteis = await getHotelInfoDB(id)
        res.send(hoteis)
    } catch (e) {
        console.log(e)
    }
}