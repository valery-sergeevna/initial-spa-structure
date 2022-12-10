export interface AllowedLinks {
    mainPage: string;
    productPage: string;
    categories: string;
    registration: string,
    login: string;

}

export const allLinks: AllowedLinks = {
    mainPage: '/',
    productPage: '/product',
    categories: '/category',
    registration: '/registration',
    login: '/login',
};