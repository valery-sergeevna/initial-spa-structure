import {AuthClient} from "./clients/auth-client";

export interface RootClientApi {
    auth: AuthClient;
}

export class RootClient implements RootClientApi {
    auth: AuthClient;

    constructor() {
        this.auth = new AuthClient();
    }
}
