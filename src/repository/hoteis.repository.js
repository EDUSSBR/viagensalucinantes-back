import db from "../db/database.js";

export async function getHoteisByCityDB(cidadeID) {
    const hoteisP = db.query(`select h.id as "hotelID",h.id_cidade as "cidadeID", h.nome, min(a.preco_diaria) as "precoMinimo", max(a.preco_diaria) as "precoMaximo", foto_principal_url as "fotoPrincipal" from alocacoes a join hoteis h on h.id=a.hotel_id where h.id_cidade=$1 group by h.nome, h.id, foto_principal_url;`, [cidadeID])
    const cidadeP = db.query(`select nome from cidades where id=$1`, [cidadeID])
    const [hoteis, cidade] = await Promise.all([hoteisP, cidadeP])
    return {hoteis: hoteis.rows, cidade: cidade.rows}
}
export async function getHotelInfoDB(hotelID) {
    const hoteisP = db.query(`
    select * from hoteis where id=$1;
`, [hotelID])
    const fotosP = db.query(`
    select * from fotos_hotel where hotel_id=$1;
`, [hotelID])
    const comodidadesP = db.query(`
    select * from comodidades_hotel where hotel_id=$1;
`, [hotelID])
    const alocacoesP = db.query(`
    select * from alocacoes where hotel_id=$1;
`, [hotelID])
    const [hoteis, fotos, comodidades, alocacoes] = await Promise.all([hoteisP, fotosP, comodidadesP, alocacoesP])
    return { info: hoteis.rows, fotos: fotos.rows, comodidades: comodidades.rows, alocacoes: alocacoes.rows}
}