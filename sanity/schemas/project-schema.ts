/*
* Defines a content schema for "Projects" in Sanity.
Specifies fields for each project:
name: The project's name (string).
slug: A unique URL-friendly identifier (auto-generated from name).
image: A project image with hotspot cropping and an alt description.
url: A URL field for external links.
content: A rich-text field (supports formatted text, images, etc.).
* */


const project = {
    name: 'project',
    title: 'Projects name test',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'name' }
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: { hotspot: true },
            fields: [
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string'
                }
            ]
        },
        {
            name: 'url',
            title: 'URL',
            type: 'url',
        },
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{ type: 'block' }],
        },
    ],
};

export default project;