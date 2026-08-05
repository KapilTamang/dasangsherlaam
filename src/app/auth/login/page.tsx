import Image from "next/image";
import { LoginForm } from "@/components/features/auth/login/login-form";

export default function Login() {
        return(
            <main>
                <div className="login-page h-screen bg-accent">
                    <Image
                    className="object-cover"
                    src="/images/login-bg.png"
                    alt=""
                    fill
                    preload/>
                    <div className="login-form fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full sm:w-120 z-20 px-6 md:px-0">
                        <LoginForm/>
                    </div>
                </div>
            </main>
            
        )
}