import chalk from 'chalk'
import { getHoteisDB } from '../repository/hoteis.repository.js'
export async function getHoteis(req, res) {
    try {
        console.log(`${chalk.blue("GET")} ${chalk.green("/hoteis")}`)
        const hoteis = await getHoteisDB()
        res.send(hoteis)
    } catch (e) {
        console.log(`Problema na rota: ${chalk.blue("GET")} ${chalk.green("/hoteis")}`)
        console.log(e)
    }
}