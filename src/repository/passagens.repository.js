import db from "../db/database.js";

export async function getPassagensDB(){
    // reformular
    const passagens = await db.query(`SELECT c.id, c.nome AS cidade, e.nome as estado FROM cidades c JOIN estado e ON c.estado_id=e.id;
    `)
 

    return passagens.rows
}