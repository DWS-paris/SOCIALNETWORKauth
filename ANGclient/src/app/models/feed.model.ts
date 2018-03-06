// Model pour le flux d'actualité
export interface FeedModel {
    _id?: string,
    content: string,
    date?: any,
    author: {
        _id: string,
        name: string,
        avatar: string
    }    
};