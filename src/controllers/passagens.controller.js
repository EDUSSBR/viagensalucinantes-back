import chalk from 'chalk'
import {getPassagensDB} from '../repository/passagens.repository.js'
export async function getPassagens(req, res){
    try {
        console.log(`${chalk.blue("GET")} ${chalk.green("/passagens")}`)
        const passagens = await getPassagensDB()
        res.send(passagens)
    } catch (e) {
        console.log(`Problema na rota: ${chalk.blue("GET")} ${chalk.green("/passsagens")}`)
        console.log(e)
    }
}