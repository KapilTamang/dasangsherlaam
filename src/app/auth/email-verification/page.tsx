import Image from "next/image"
import Link from "next/link"
import EmailVerificationForm from "@/components/features/auth/email-verification/email-verification-form"
import { ModeToggle } from "@/components/shared/theme-toggle"
import {House} from "lucide-react"

export default function EmailVerification() {
    return(
       <main className="w-full min-h-screen pb-10 md:pb-0 bg-accent relative">
            <Image
            className="object-cover"
            src="/images/login-bg.png"
            alt="login-bg"
            fill
            preload/>
            <div className="email-verification-page flex flex-col gap-6 md:gap-0">
                <div className="static justify-end p-4 md:fixed top-2 right-1 flex gap-4 items-center z-20">
                    <Link href="/" className="flex gap-1 items-center text-[1rem] font-medium capitalize hover:opacity-50 duration-300 cursor-pointer"><House className="inline" size={18}/> home</Link>
                    <ModeToggle/>
                </div>
                <div className="email-verification-form fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full sm:w-120 px-6 md:px-0 mx-auto md:mx-0">
                    <EmailVerificationForm/>
                </div>
            </div>
        </main>
    )
}