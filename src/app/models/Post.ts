export class Post {
    userId: number;
    id: number;
    title: string;
    body: string;

    constructor(userId: number, id: number, title: string, body: string) {
        this.id = id;
        this.userId = userId;
        this.title = title;
        this.body = body;
    }
}