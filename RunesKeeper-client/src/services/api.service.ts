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
          .then(() => axios.delete(environment.origin + url, { params }))
          .catch((error) => Promise.reject(error));
      }

      public post(url: string, body?: any): Promise<any> {
        return Promise.resolve()
          .then(() => axios.post(environment.origin + url, body))
          .catch((err) => Promise.reject(err));
      }

      public put(url: string, body?: any): Promise<any> {
        return Promise.resolve()
          .then(() => axios.put(environment.origin + url, body))
          .catch((err) => Promise.reject(err));
      }
}
