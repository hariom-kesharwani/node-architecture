import { Service, Container } from 'typedi';

export default class Dispatch {
  public sqlConnection:any;
  constructor(){
    this.sqlConnection = Container.get('sqlConnection');
  }

  public async getSector(propertyId:any){
    try {
      let result = await this.sqlConnection.request()
            .query('select * from inventory'); 
        return result.recordset;
    }
    catch (err) {
      console.log(err);
        throw err;
    }
  }
}