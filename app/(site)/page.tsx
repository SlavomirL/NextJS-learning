import {getProjects} from '@/sanity/sanity-utils';

import Image from 'next/image';
import Link from 'next/link';

export default async function Home() {
    const projects = await getProjects();

    const sortedProjects = projects.sort((a, b) => {
        const dateA = new Date(a._createdAt); // Convert to Date object
        const dateB = new Date(b._createdAt); // Convert to Date object
        return dateA.getTime() - dateB.getTime(); // Compare timestamps
    });

    return (
        <div>
        {/*<div className={"max-w-5xl mx-auto py-20"}> toto mam uz v layoute takze tu to nepotrebujem*/}
            <h1 className={"text-7xl font-extrabold"}>
                Hello I&apos;m{" "}
                {/*<span className={"bg-gradient-to-r from-yellow-300 via-yellow-500 to-orange-400"}> /!* toto je gradient pre background *!/*/}
                <span
                    className={"bg-gradient-to-r from-yellow-300 via-yellow-500 to-orange-400 bg-clip-text text-transparent"}>
                      Slavoni
                </span>
                !
            </h1>

            <p className={"mt-3 text-xl text-gray-600"}>
                Welcome to Domus Ektari! Check out our atelier
            </p>

            <h2 className={"mt-24 font-bold text-gray-700 text-3xl"}>
                My Projects
            </h2>

            <div className={"mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"}>
                {
                    sortedProjects.map((project) => (
                        <Link
                            href={`/projects/${project.slug}`}
                            key={project._id} className={"border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-500"}>
                            {project.image && (
                                <Image
                                    src={project.image}
                                    alt={project.name}
                                    width={750}
                                    height={300}
                                    className={"object-cover rounded-lg border-gray-500"}
                                />
                            )}
                            <div
                                className={"mt-2 font-extrabold bg-gradient-to-r from-yellow-300 via-yellow-500 to-orange-400 bg-clip-text text-transparent"}>
                                {project.name}
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
}
