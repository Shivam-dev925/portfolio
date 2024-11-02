

export default function AboutMe() {
    return (

        <div className="relative isolate overflow-hidden pt-14 min-w-screen min-h-screen  flex flex-col ">

            <div
                aria-hidden="true"
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                />
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-6xl py-32 sm:py-48 lg:py-56">

                    <div className="text-center">
                        <h1 className="text-balance text-5xl font-semibold tracking-tight text-white sm:text-7xl">
                            Crafting Scalable Web Solutions with React
                        </h1>
                        <p className="mt-8 text-pretty text-lg font-medium text-gray-400 sm:text-xl/8">
                            As a skilled React JS developer with a solid foundation in HTML, CSS, and JavaScript, I specialize in creating responsive and user-friendly applications tailored to enhance user experiences. With hands-on experience in healthcare IT solutions and projects like digital health lockers and a Netflix clone, I bring a unique blend of technical expertise and creativity. My portfolio showcases my journey in building high-quality, efficient web applications, reflecting a commitment to innovation and excellence in fast-paced environments. Dive in to explore my projects and see how I turn complex problems into seamless digital solutions.
                        </p>

                    </div>
                </div>
            </div>
        </div>

    )
}