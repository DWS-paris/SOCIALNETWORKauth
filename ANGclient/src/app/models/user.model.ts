// Exporter une interface pour typer un objet
export interface UserModel {
    name: string,
    email: string,
    password: string,
    gender: string,
    type: string,
    facebook: {
        token: string,
        id: string,
        avatar: string
    }
};