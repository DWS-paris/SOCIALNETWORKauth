export interface FeedModel {
    _id?: string,
    content: string,
    date?: Date,
    author: {
        _id: string,
        name: string,
        avatar: string
    }    
};