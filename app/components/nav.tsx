import Link from "next/link";

const links = {}

export default function Navbar() 
{
    return (
        <aside className="-ml-2 mb-16 tracking-tight">
            <div className="lg:sticky lg:top-20">
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
            </div>
        </aside>
    )
}
