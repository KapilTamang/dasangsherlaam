import Image from "next/image"

export default function Login() {
        return(
            <main>
                <section className="login-page">
                <Image
                className="object-cover -z-10"
                src="/images/login-bg.svg"
                alt=""
                preload
                fill/>
                <div className="login-form flex">
                    login form
                </div>
                </section>
            </main>
            
        )
}