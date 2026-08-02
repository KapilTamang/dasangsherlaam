import Image from "next/image";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import ContactForm from "@/components/features/contact/contact-form";


export default function Contact() {
    return (
        <>
            <Navbar/>
            <main>
                <section className="contact-page-section-form section-base-style bg-accent">
                    <div className="contact-page-section-form-container container-base-style">
                        <div className="contact-page-section-form-content flex w-full flex-col md:flex-row gap-4 md:gap-8 justify-center items-center">
                            <div className="w-full h-auto content-page-section-form-content-image flex flex-1 justify-center items-center">
                                <Image
                                className=""
                                src="/images/contact.png"
                                alt="contact"
                                width={1400}
                                height={1000}
                                preload/>
                            </div>
                            <div className="contact-page-section-form-content-form flex flex-1 w-full justify-center items-center">
                                <ContactForm/>
                            </div>
                        </div>
                    </div>
                </section>
                  <section className="contact-page-section-banner section-base-style">
                    <div className="contact-page-section-banner-container container-base-style">
                      fsfd
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
} 