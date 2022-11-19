import axios from 'axios';
import { environment } from '../../environments/environment';

export class ApiService {

    public get(url: string, params: any = null): Promise<any> {
        if (params !== null) {
          Object.keys(params).forEach((key) => params[key] == null && delete params[key]);
        }
        return Promise.resolve()
          .then(() => axios.get(environment.origin + url, {  params:params })).then((response)=> {
                return response.data
            })
            .catch((error) => Promise.reject(error));

    }

      public delete(url: string, params: any = null): Promise<any> {
        if (params !== null) {
          Object.keys(params).forEach((key) => params[key] == null && delete params[key]);
        }
        return Promise.resolve()
          .then(() => axios.delete(environment.api + url, { params }))
          .catch((error) => Promise.reject(error));
      }

      public post(url: string, body?: any): Promise<any> {
        return Promise.resolve()
          .then(() => axios.post(environment.api + url, body))
          .catch((err) => Promise.reject(err));
      }

      public put(url: string, body?: any): Promise<any> {
        return Promise.resolve()
          .then(() => axios.put(environment.api + url, body))
          .catch((err) => Promise.reject(err));
      }
}
