import {PortableTextBlock} from "sanity";

export type Project = {
    _id: string; // _ = generovane zo sanity
    _createdAt: Date;
    name: string; // bez _ su generovane nami
    slug: string;
    image: string;
    url: string;
    content: PortableTextBlock[]; // je to ako keby array stringov, ale tie stringy su object

}