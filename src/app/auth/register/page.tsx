import Link from "next/link";
import Image from "next/image";
import { RegisterForm } from "@/components/features/auth/register/register-form";
import { ModeToggle } from "@/components/shared/theme-toggle";
import { House } from "lucide-react";

export default function Login() {
        return( 
            <main className="w-full min-h-screen pb-10 md:pb-0 bg-accent relative">
                <Image
                className="object-cover"
                src="/images/login-bg.png"
                alt="login-bg"
                fill
                preload/>
                <div className="login-page flex flex-col gap-6 md:gap-0">
                    <div className="about-navigation static justify-end p-4 md:fixed top-2 right-1 flex gap-4 items-center z-20">
                        <Link href="/" className="flex gap-1 items-center text-[1rem] font-medium capitalize hover:opacity-50 duration-300 cursor-pointer"><House className="inline" size={18}/> home</Link>
                        <ModeToggle/>
                    </div>
                    <div className="login-form static md:fixed md:top-[50%] md:left-[50%] md:translate-x-[-50%] md:translate-y-[-50%] w-full sm:w-140 px-6 md:px-0 mx-auto md:mx-0">
                        <RegisterForm/>
                    </div>
                </div>
            </main>
            
        )
}