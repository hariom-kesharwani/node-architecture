import { Container } from 'typedi';
import dbLoader from './../../loader/db'
export default async () => {
    try{
        
        let db = await dbLoader();
        Container.set('sqlConnection', db);
        
    }catch(error){
        console.log(error);
    }
}