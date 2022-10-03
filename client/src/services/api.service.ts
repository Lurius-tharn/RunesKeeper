const axios = require('axios');
import { environment } from '../../environments/environment';

export class ApiService {

    public get(url: string, params: any = null): Promise<any> {
        if (params !== null) {
          Object.keys(params).forEach((key) => params[key] == null && delete params[key]);
        }
        return Promise.resolve()
          .then(() => axios.get(environment.origin + url, { params }).toPromise())
          .catch((error) => Promise.reject(error));
      }

      public delete(url: string, params: any = null): Promise<any> {
        if (params !== null) {
          Object.keys(params).forEach((key) => params[key] == null && delete params[key]);
        }
        return Promise.resolve()
          .then(() => axios.delete(environment.api + url, { params }).toPromise())
          .catch((error) => Promise.reject(error));
      }
    
      public post(url: string, body?: any): Promise<any> {
        return Promise.resolve()
          .then(() => axios.post(environment.api + url, body).toPromise())
          .catch((err) => Promise.reject(err));
      }
    
      public put(url: string, body?: any): Promise<any> {
        return Promise.resolve()
          .then(() => axios.put(environment.api + url, body).toPromise())
          .catch((err) => Promise.reject(err));
      }
}