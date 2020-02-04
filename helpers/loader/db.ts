import mssqlInstance from 'mssql'; 

var config = {
  server: "localhost",
  user: "sa",
  password: "zxcasdqwe@90",
  database: "rise",
};
export default async (): Promise<any> => {
    try{
        const pool: mssqlInstance.ConnectionPool = new mssqlInstance.ConnectionPool(config);
        const poolConnect = await pool.connect();
        return poolConnect;
    }catch(err){
        console.log(err);
        throw({type:"db error",message:"error while conneting the db"});
    }
}