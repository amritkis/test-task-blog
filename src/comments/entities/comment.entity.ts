import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
// Nickname, Content, Creation Date are required
@Entity('Comment')
export class Comment {
    @PrimaryGeneratedColumn() id: number;

    @Column({
        type: 'varchar',
        nullable: false
    }) nickname: string;


    @Column({
        type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'
    })
    creation_date: Date

    @Column({
        type: 'varchar',
        nullable: false
    })
    content: string

    @Column({
        type: 'int',
        nullable: false
    })
    article_id: number

    // @OneToMany(() => Comment, comment => comment.id)
    // @JoinColumn({ name: "comment_id" })
    // public comment_id: Comment[];
    @Column({
        type: 'int',
        nullable: false
    })
    comment_id: number
    
}
