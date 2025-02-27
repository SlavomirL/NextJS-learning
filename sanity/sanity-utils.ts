/*
* This file will contain utility functions for fetching data from Sanity.
Example functions that will be added:
Fetching projects, posts, or other content from Sanity.
Querying Sanity using GROQ.
Transforming Sanity data for easier use in Next.js components
* */


// here we are going to put all the functions that we are going to use to grab the data
import {Project} from "@/types/Project";
import {Page} from "@/types/Page";

import {createClient, groq} from "next-sanity";
import clientConfig from "@/sanity/config/client-config";

export async function getProjects(): Promise<Project[]> {

    return createClient(clientConfig).fetch(
        groq`*[_type == 'project'] {
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
        }`
    );
}

export async function getProject(slug: string): Promise<Project> {

    return createClient(clientConfig).fetch(
        groq`*[_type == 'project' && slug.current == $slug][0] {
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
        }`,
        {slug: slug}
    );
}


export async function getPages(): Promise<Page[]> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "page"] {
    _id,
    _createdAt,
    title,
    "slug": slug.current
    }`
    );
}

export async function getPage(slug: string): Promise<Page> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "page" && slug.current == $slug][0] {
    _id,
    _createdAt,
    title,
    "slug": slug.current, 
    content
    }`,
        { slug }
    );
}