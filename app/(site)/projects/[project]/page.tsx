type Props = {
    params: { project: string }
};

import {getProject} from "@/sanity/sanity-utils";

import {PortableText} from '@portabletext/react';

import Image from "next/image";

export default async function Project({params}: Props) {

    const slug = params.project; // its named project here because we use the same name for the [project] inside the path app/projects/[project]/page.tsx

    const project = await getProject(slug);

    return (
        // <div className={"max-w-3xl mx-auto py-20"}> toto mam uz v layoute takze tu to nepotrebujem
        <div className={"max-w-3xl mx-auto py-20"}>
            <header className={"flex items-start justify-between"}>
                <h1 className={"bg-gradient-to-r from-yellow-300 via-yellow-500 to-orange-400 bg-clip-text text-transparent text-5xl drop-shadow font-extrabold"}>
                    {project.name}
                </h1>
                <a href={project.url} title={"Visit link"} target={"_blank"} rel={"noopener noreferrer"}
                   className={"bg-gray-100 rounded-lg text-gray-600 font-bold py-3 px-4 whitespace-nowrap hover:bg-pink-500 hover:text-pink-100 transition"}>
                    Visit link
                </a>
            </header>

            {/* content goes here */}
            <div className={"text-lg text-gray-700 mt-5"}>
                <PortableText value={project.content}/>
            </div>

            {/* image goes here */}
            <Image
                src={project.image}
                alt={project.name}
                width={1920}
                height={1080}
                className={"mt-10 border-2 border-gray-700 object-cover rounded-xl"}
            />
        </div>
    );
}