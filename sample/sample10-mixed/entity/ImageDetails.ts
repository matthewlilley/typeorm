import {PrimaryColumn, Column} from "../../../src/decorator/Columns";
import {Table} from "../../../src/decorator/Tables";
import {OneToOneInverse} from "../../../src/decorator/Relations";
import {Image} from "./Image";

@Table("sample10_image_details")
export class ImageDetails {

    @PrimaryColumn("int", { autoIncrement: true })
    id: number;

    @Column()
    meta: string;

    @Column()
    comment: string;

    @OneToOneInverse<Image>(() => Image, image => image.details)
    image: Image;

}