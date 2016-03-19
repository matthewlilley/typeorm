import {PrimaryColumn, Column} from "../../../src/decorator/Columns";
import {Table} from "../../../src/decorator/Tables";
import {ManyToOne, ManyToManyInverse} from "../../../src/decorator/Relations";
import {Post} from "./Post";
import {PostDetails} from "./PostDetails";

@Table("sample10_category")
export class Category {

    @PrimaryColumn("int", { autoIncrement: true })
    id: number;

    @Column()
    description: string;

    @ManyToManyInverse<Post>(type => Post, post => post.categories)
    posts: Post[];

    @ManyToOne<PostDetails>(_ => PostDetails, postDetails => postDetails.categories)
    details: PostDetails;

}