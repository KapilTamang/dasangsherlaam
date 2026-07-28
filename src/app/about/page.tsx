import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "@/components/shared/theme-toggle";
import { House } from "lucide-react";

export default function About() {
    return (
        <main className="relative">
            <div className="about-navigation absolute top-6 right-10 flex gap-6 items-center">
                <Link href="/" className="flex gap-1 items-center text-[1.125rem] font-medium capitalize hover:opacity-50 duration-300 cursor-pointer"><House className="inline" size={20}/> home</Link>
                <ModeToggle/>
            </div>
            <article className="about section-base-style">
                <div className="about-container container-base-style">
                    <div className="about-content flex flex-col-reverse md:flex-row gap-8 justify-center items-center">
                        <div className="about-content-left flex flex-2 flex-col gap-4">
                            <div className="about-content-left-greetings">
                                Hello! I'm Dasang
                            </div>
                            <div className="about-content-left-interoduction">
                                I'm a content creator
                            </div>
                            <div className="about-content-left-description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sunt placeat ut repudiandae voluptas nesciunt velit quos numquam itaque iste fuga non, qui necessitatibus. Minus, praesentium qui. Aliquam, dolore fugiat.
                            </div>
                        </div>
                        <div className="about-content-right flex flex-1">
                            image
                        </div>
                    </div>
                </div>
            </article>
        </main>
    )
}