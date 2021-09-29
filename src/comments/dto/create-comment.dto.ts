export class CreateCommentDto {
    nickname: string;
    content: string;
    article_id: number;
    comment_id?: number;
}
