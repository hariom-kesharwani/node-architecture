import dispatchServices from './../services/dispatch.services'

class DispatchController {
  
  public async getSectorByPropertyId(id:any) {
      try {
          let data= await dispatchServices.getSectorByPropertyId(id);
          return data;
      }
      catch (err) {
        console.log(err);
        throw err;
      }
    }
}

export= new DispatchController();