import Link from "next/link";

const links = {}

export default function Navbar() 
{
    return (
        <aside className="-ml-2 mb-16 tracking-tight">
            <nav>
                <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300 justify-center">
                    <li>
                        <Link 
                            key="/"
                            href="/"
                            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100">
                            <p className="ml-2 h-7">Home</p>
                        </Link>
                    </li>
                    <li>
                        <Link 
                            key="/projects"
                            href="/projects"
                            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100">
                            <p className="ml-2 h-7">Projects</p>
                        </Link>
                    </li>
                </ul>
                {/* <div className="lg:sticky lg:top-20">
                    <nav
                    className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative justify-center"
                    id="nav"
                    >
                        <div className="flex flex-row space-x-0 pr-10">
                            <Link
                            href={"/"}
                            className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                            >
                            Home
                            </Link>
                        </div>
                        <div className="flex flex-row space-x-0 pr-10">
                            <Link
                            href={"/projects"}
                            className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                            >
                            Projects
                            </Link>
                        </div>
                    </nav>
                </div> */}
            </nav>
        </aside>
    )
}
