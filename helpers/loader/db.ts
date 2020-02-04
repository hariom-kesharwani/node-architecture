import mssqlInstance from 'mssql'; 
import config from '../../config';

export default async (): Promise<any> => {
    try{
        var dbConfig: any= config.sql;
        const pool: mssqlInstance.ConnectionPool = await new mssqlInstance.ConnectionPool(dbConfig);
        const poolConnect = await pool.connect();
        return poolConnect;
    }catch(err){
        console.log(err);
        throw({type:"db error",message:"error while conneting the db"});
    }
}