import Link from "next/link"
import Image from "next/image"
import profileImg from "@/public/profile-img.png"



export const Logo = () => {
    return (
        <Link className="flex items-center text-dark" href="/">
            <div className="w-16 rounded-full overflow-hidden border border-solid border-dark mr-4">
                <Image src={profileImg} />
             </div>
            <span className="font-bold text-xl">Tommy's Blog</span>
        </Link>
    )
}