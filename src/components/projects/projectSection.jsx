import React from 'react'
import Project from '../commonComponents/project';

const ProjectSection = (props) => {
    let allProjects = props.projects;
    return (
        <div className="py-24 md:py-32 lg:py-40">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-20 px-6 lg:px-8 xl:grid-cols-3">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl">My Projects</h2>
                    <p className="mt-6 text-lg/8 text-white">
                        Dive into the projects that showcase my skills and passion for delivering exceptional results.
                    </p>
                </div>
                <ul
                    role="list"
                    className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20  lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2"
                >
                    {allProjects.map((project) => (
                        <Project data={project} key={project.name} />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ProjectSection
