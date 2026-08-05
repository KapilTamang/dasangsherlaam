import Link from "next/link";
import Image from "next/image";
import { LoginForm } from "@/components/features/auth/login/login-form";
import { ModeToggle } from "@/components/shared/theme-toggle";
import { House } from "lucide-react";

export default function Login() {
        return( 
            <main className="h-screen bg-accent">
                <Image
                    className="object-cover"
                    src="/images/login-bg.png"
                    alt=""
                    fill
                    preload/>
                <div className="login-page">
                    <div className="about-navigation fixed top-4 md:top-6 right-4 md:right-10 flex gap-6 items-center">
                        <Link href="/" className="flex gap-1 items-center text-[1rem] md:text-[1.1rem] font-medium capitalize hover:opacity-50 duration-300 cursor-pointer"><House className="inline" size={18}/> home</Link>
                        <ModeToggle/>
                    </div>
                    <div className="login-form fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full sm:w-120 px-6 md:px-0">
                        <LoginForm/>
                    </div>
                </div>
            </main>
            
        )
}