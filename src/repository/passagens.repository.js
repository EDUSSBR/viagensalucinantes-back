import db from "../db/database.js";

export async function getPassagensByCityDB(cidadeID){
    const passagens = await db.query(`select v.id as "vooID", c.nome as "cidadeDestino", j.nome as"cidadeOrigem",  v.data_hora_partida, v.data_hora_chegada, v.preco, companhia.nome as "companhiaAerea" from voos v join companhias_aereas companhia on companhia.id=v.id_companhia  join cidades c on c.id=v.id_cidade_destino join cidades j on j.id=v.id_cidade_origem where assentos_disponiveis>0 and c.id=$1;     
`, [cidadeID])
    return passagens.rows
}