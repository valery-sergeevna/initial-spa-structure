import {Observable} from "rxjs";
import {ajax} from "rxjs/ajax";
import {BASE_API_URL} from "../../core/constants/constants";

export interface AuthDataApi {
    getRoles(): Observable<any> | Promise<any>;
    registerUser(params: any): Observable<any> | Promise<any>;
}

export class AuthClient implements AuthDataApi {
    readonly apiUrlList = {
        roles: 'getRoles.json',
        register: 'auth/register',
        login: 'auth/login',
    };

    getRoles(): Observable<any> | Promise<any>{
        return ajax.post(`${BASE_API_URL + this.apiUrlList.roles}`);
    }

    registerUser (
        params: any,
    ): Observable<any> | Promise<any> {
        return ajax.post(`${BASE_API_URL + this.apiUrlList.register}`, params);
    }

    loginUser (
        params: any,
    ): Observable<any> | Promise<any> {
        return ajax.post(`${BASE_API_URL + this.apiUrlList.login}`, params);
    }
}