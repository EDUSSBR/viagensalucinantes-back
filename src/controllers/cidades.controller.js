import chalk from 'chalk'
import {getCidadesDB} from '../repository/cidades.repository.js'
export async function getCidades(req, res){
    try {
        console.log(`${chalk.blue("GET")} ${chalk.green("/cidade")}`)
        const cidades = await getCidadesDB()
        res.send(cidades)
    } catch (e) {
        console.log(`Problema na rota: ${chalk.blue("GET")} ${chalk.green("/cidade")}`)
        console.log(e)
    }
}