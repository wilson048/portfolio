import Link from "next/link";

export default function Footer() 
{
    return (
        <footer className="mb-16 items-center">
        <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300 justify-center">
            <li>
                <Link 
                    key="/"
                    href="/"
                    className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100">
                    <p className="ml-2 h-7">rss</p>
                </Link>
            {/* <a
                className=""
                rel="noopener noreferrer"
                target="_blank"
                href="/"
            >
                <ArrowIcon />
                <p className="ml-2 h-7">rss</p>
            </a> */}
            </li>
            <li>
                <Link 
                    key="https://github.com/wilson048"
                    href="https://github.com/wilson048"
                    className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100">
                    <p className="ml-2 h-7">github</p>
                </Link>
            {/* <a
                className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/wilson048"
            >
                <ArrowIcon />
                <p className="ml-2 h-7">github</p>
            </a> */}
            </li>
            <li>
                <Link 
                    key=""
                    href=""
                    className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100">
                    <p className="ml-2 h-7">view source</p>
                </Link>
            {/* <a
                className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                rel="noopener noreferrer"
                target="_blank"
                href=""
            >
                <ArrowIcon />
                <p className="ml-2 h-7">view source</p>
            </a> */}
            </li>
        </ul>
        {/* <p className="mt-8 text-neutral-600 dark:text-neutral-300">
            © {new Date().getFullYear()} MIT Licensed
        </p> */}
        </footer>
    )
}