export interface RolesProps {
    id: number
    label: string,
}

export interface RegisterParams {
    status: number,
    name: string,
    surname: string,
    middle_name: string,
    email: string,
    password: string,
    password_confirm: string,
    agree: number;
}

export interface LoginParams {
    email: string,
    password: string,
    remember: number,
}

export enum AgreeEnums {
    false =  0,
    true =  1,
}
