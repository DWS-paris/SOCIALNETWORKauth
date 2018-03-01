// Exporter une interface pour typer un objet
export interface UserModel {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    repeatePassword: string,
    gender?: string,
    type?: string,
    tokenFb: string
    facebookId: string,
};