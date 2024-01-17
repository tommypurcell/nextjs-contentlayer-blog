import Link from "next/link"
import { Logo } from "./Logo"


export const Header = () => {

    return (
        <header className="w-full p-4 px-10 flex items-center justify-between">
            <Logo />
            <nav className="w-max py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize flex items-center fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50">
                <Link href="/" className="mr-2">Home</Link>
                <Link href="/about" className="mx-2">About</Link>
                <Link href="/contact" className="mr-2">Contact</Link>
                <button>T</button>
            </nav>
            <div>
                This can be socials
            </div>
        </header>
    )

}