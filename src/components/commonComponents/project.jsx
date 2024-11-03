

export default function Project(props) {
    let project = props.data;
    return (


        <li key={project.name}>
            <img alt={project.name + " Logo"} src={project.imageUrl} className={`aspect-[3/2] w-full rounded-2xl ${project.name === 'Raxa' ? 'object-contain' : 'object-cover'} ${project.name === "Raxa" ? 'bg-white' : ""}`} />
            <h3 className="mt-6 text-lg/8 font-semibold text-white">{project.name}</h3>
            <p className="text-base/7 text-gray-400">{project.type}</p>
            <p className="mt-4 text-base/7 text-white">{project.about}</p>
            <ul role="list" className="mt-6 flex gap-x-6">
                <li>
                    <a href={project.webUrl} className="text-white hover:text-gray-500 cursor-pointer">
                        <span className="sr-only">Website</span>
                        <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
                            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                        </svg>
                    </a>
                </li>
                <li>
                    <a href={project.projectUrl} className="text-white hover:text-gray-500 cursor-pointer">
                        <span className="sr-only">Web Application</span>
                        <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
                            <path d="M3 3h18v18H3V3zm2 2v14h14V5H5zm2 2h10v10H7V7z" />
                            <path d="M8 9h8v2H8zm0 3h8v2H8z" />
                        </svg>
                    </a>
                </li>
            </ul>
        </li>


    )
}
