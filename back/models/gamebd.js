var pool = require('./bd');

async function getGame(){
    var query="select * from `juegos` ";
    var rows =  await pool.query(query);
    return rows;
}

async function insertGame(obj){
    try{
        var query = " insert into juegos set ?";
        var rows = await pool.query(query,[obj]);
        return rows;

    }catch(error){
        console.log(error);
        throw error;
    }
} 

async function deleteGame(id){
    var query ="delete from juegos where id = ?";
    var rows = await pool.query(query,[id]);
    return rows;
}



async function selectGameONe(id){
    var query="select * from juegos where id = ?"
    var rows = await pool.query(query,[id]);
    return rows[0];
}
async function updateGame(obj,id){
    try{
        var query = "update juegos set ? where id = ?";
        var rows = await pool.query(query,[obj,id]);
        return rows;
    }catch (error){
        throw error;
    }
}



module.exports = {getGame,insertGame,deleteGame,selectGameONe,updateGame};