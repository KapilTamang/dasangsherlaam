import Image from "next/image"
import NewsletterPromo from "@/components/shared/card/card-newsletter-promo"
import Navbar from "@/components/shared/navbar"
import Footer from "@/components/shared/footer"


export default function Contact() {
    return (
        <>
            <Navbar/>
            <main>
                <section className="contact-page-section-banner section-base-style">
                    <div className="contact-page-section-banner-container container-base-style">
                       <div className="contact-page-section-banner-content flex w-full">
                            <div className="w-full h-auto content-page-section-banner-content-image flex flex-1 justify-center items-center">
                                <Image
                                className=""
                                src="/images/contact.png"
                                alt="contact"
                                width={900}
                                height={900}
                                preload/>
                            </div>
                            <div className="contact-page-section-banner-content-form flex w-full flex-1 justify-center items-center">
                                <NewsletterPromo />
                            </div>
                       </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
} 