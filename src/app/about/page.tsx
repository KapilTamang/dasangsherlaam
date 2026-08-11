import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "@/components/shared/theme-toggle";
import { House } from "lucide-react";
import Author from '@/data/author';
import { FaSquareFacebook, FaSquareInstagram, FaLinkedin, FaXTwitter} from "react-icons/fa6";

export default function About() {
    return (
        <main>
            <div className="about-navigation fixed top-4 md:top-6 right-4 md:right-5 flex gap-4 items-center">
                <Link href="/" className="flex gap-1 items-center text-[1rem] font-medium capitalize hover:opacity-50 duration-300 cursor-pointer"><House className="inline" size={18}/> home</Link>
                <ModeToggle/>
            </div>
            <article className="about">
                <div className="about-content container-base-style fixed left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] flex flex-col-reverse md:flex-row gap-10 justify-center items-center">
                    <div className="about-content-left flex flex-2 flex-col gap-8 md:gap-10 items-center md:items-start">
                        <div className="about-content-left-greetings">
                            <p className="text-[1.2rem] md:text-[1.4rem]">Hello! I'm <span className="border-l border-l-primary px-2 ml-1 md:ml-2 uppercase text-primary font-extrabold">{Author.name}</span></p> 
                        </div>
                        <div className="about-content-left-interoduction mt-2">
                            <p className="text-[1.3rem] md:text-[1.8rem] capitalize">I'm a <span className="uppercase font-extrabold bg-accent px-4 py-2 ml-1 md:ml-2 rounded-md">{Author.title}</span></p>
                        </div>
                        <div className="about-content-left-description">
                            <p>{Author.description}</p>
                        </div>
                    </div>
                    <div className="about-content-right flex flex-1 justify-center items-center">
                        <div className="about-content-right-image w-50 md:w-64 h-auto">
                            <Image
                            className="rounded-sm shadow-xl"
                            src={Author?.imageURL}
                            width={1200}
                            height={1000}
                            alt={Author?.imageURL}
                            preload
                            />
                        </div>
                    </div>
                </div>
            </article>
            <div className="author-social-link fixed left-[50%] translate-x-[-50%] bottom-0 px-5 md:px-6 py-3 md:py-4 bg-accent flex gap-4 rounded-full ">
                <Link href={Author.facebookURL} target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:scale-120 duration-300">
                    <FaSquareFacebook className="w-7 h-7"/>
                </Link>
                <Link href={Author.instagramURL} target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:scale-120 duration-300">
                    <FaSquareInstagram className="w-7 h-7"/>
                </Link>
                <Link href={Author.linkedInURLL} target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:scale-120 duration-300">
                    <FaLinkedin className="w-7 h-7"/>
                </Link>
                <Link href={Author.xURL} target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:scale-120 duration-300">
                    <FaXTwitter className="w-7 h-7"/>
                </Link>
            </div>
        </main>
    )
}