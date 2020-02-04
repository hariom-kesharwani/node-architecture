import { Service, Container } from 'typedi';
import Dispatch from './../models/dispatch'

class DispatchServices {
  
  public async getSectorByPropertyId(id:any){
    try {
        const dispatch = Container.get(Dispatch);
        let result =  await dispatch.getSector(id);
        return result;
    }
    catch (err) {
      console.log(err);
        throw err;
    }
  }
}

export= new DispatchServices();
