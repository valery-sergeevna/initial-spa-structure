import {Observable} from "rxjs";
import {ajax} from "rxjs/ajax";
import {BASE_API_URL} from "../../core/constants/constants";

export interface AuthDataApi {
    getTodos(): Observable<any> | Promise<any>;
    getAuthData(params: any): Observable<any> | Promise<any>;
    postAuthData(params: any): Observable<any> | Promise<any>;
}

export class AuthClient implements AuthDataApi {
    readonly apiUrlList = {
        auth: 'api/v1/event',
        menu: 'api/v1/menu/line/${baseLang}',
        forgot: 'api/v1/event/forgot',
        remember: 'api/v1/event/remember',
        todos: 'todos'
    };

    getTodos(): Observable<any> | Promise<any>{
        return ajax.getJSON(`${BASE_API_URL}/${this.apiUrlList.todos}/1`);
    }

    getAuthData (
        params: string,
    ): Observable<any> | Promise<any> {
        return ajax.getJSON(`${this.apiUrlList.auth}/${params}`);
    }

    postAuthData (
        params: any,
    ): Observable<any> | Promise<any> {
        return ajax.post(`${this.apiUrlList.auth}`,
            {
                token: params.name,
            });
    }
}