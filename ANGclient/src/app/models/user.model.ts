// Model pour l'objet Utilisateur'
export interface UserModel {
    _id?: string,
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