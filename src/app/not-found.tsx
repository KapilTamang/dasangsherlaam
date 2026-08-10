"use client"

import Image from "next/image";
import Link from "next/link";
import { House } from "lucide-react";

export default function Error() {

    return (
        <article className="error w-full h-screen relative">
            <Image
            className="object-cover"
            src="/images/error-light.svg"
            alt="error-bg-img"
            fill/>
            <div className="error-navigation fixed top-4 md:top-6 right-4 md:right-10 flex gap-6 items-center">
                <Link href="/" className="flex gap-1 items-center text-[1rem] md:text-[1.1rem] text-black font-medium capitalize hover:opacity-50 duration-300 cursor-pointer"><House className="inline" size={18}/> home</Link>
            </div>
            <div className="error-text fixed top-[50%] left-[50%] translate-[-50%] flex w-[90%] md:max-w-96 gap-4 justify-center items-center bg-background text-foreground px-6 py-6 border-l-2 border-l-destructive shadow-xl">
               <div className="error-code text-[2rem] font-extrabold">
                    404
               </div>
               <div className="error-description text-[1.2rem] font-normal capitalize border-l border-l-foreground px-4">
                    page not found
               </div>
            </div>
        </article>
    )
}