import chalk from 'chalk'
import {getPassagensByCityDB} from '../repository/passagens.repository.js'
export async function getPassagens(req, res){
    try {
        const {id} = req.params
        console.log(`${chalk.blue("GET")} ${chalk.green(`/passagens/${id}`)}`)
        const passagens = await getPassagensByCityDB(id)
        res.send(passagens)
    } catch (e) {
           console.log(e)
    }
}