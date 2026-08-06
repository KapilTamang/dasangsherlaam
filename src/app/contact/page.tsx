
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import { buttonVariants } from "@/components/ui/button";
import ContactForm from "@/components/features/contact/contact-form";
import NewsletterPromoCard from "@/components/shared/card/card-newsletter-promo";
import Author from "@/data/author";
import { Megaphone } from "lucide-react";


export default function Contact() {
    return (
        <>
            <Navbar/>
            <main>
                <section className="contact-page-section-form section-base-style bg-accent">
                    <div className="contact-page-section-form-container container-base-style">
                        <div className="contact-page-section-form-content flex w-full flex-col md:flex-row gap-4 lg:gap-8 justify-center items-center">
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
                  <section className="contact-page-section-author-newsletter section-base-style">
                    <div className="contact-page-section-author-newsletter-container container-base-style">
                        <div className="contact-page-section-author-newsletter-content flex flex-col md:flex-row gap-10 md:gap-6 lg:gap-12">
                            <div className="contact-page-section-author relative w-full flex flex-3 flex-col gap-8 lg:gap-10 px-4 lg:px-8 py-8 lg:py-10 shadow-sm bg-accent">
                                <div className="contact-page-section-author-section-title absolute -top-5 md:-top-5 lg:-top-8 left-3 md:left-4 lg:left-5 bg-primary max-w-64 px-4 md:px-5 lg:px-8 py-2 md:py-2 lg:py-4 text-card-featured-foreground text-[1rem] md:text-[1.2rem] lg:text-[1.6rem] font-extrabold uppercase rounded-full">
                                    about me
                                </div>
                                <div className="contact-page-section-author-introduction w-full flex flex-col gap-4 lg:gap-6 text-[1.2rem] md:text-[1.4rem] lg:text-[1.8rem] capitalize mt-2 md:mt-4 lg:mt-8">
                                    <div className="contact-page-section-author-introduction-text flex flex-1 justify-center">
                                        Hello! i'm <span className="ml-2 uppercase font-extrabold text-primary">{Author.name}</span> 
                                    </div>
                                    <div className="contact-page-section-author-introduction-image flex flex-1 justify-center">
                                        <Image
                                        className="w-40 justi rounded-sm shadow-xl"
                                        src={Author?.imageURL}
                                        width={1200}
                                        height={1000}
                                        alt={Author?.imageURL}
                                        preload
                                        />
                                    </div>
                                </div>
                                <div className="contact-page-section-author-title flex justify-center -mt-2">
                                    <p className="text-[1.1rem] md:text-[1.125rem] lg:text-[1.3rem] capitalize">I'm a <span className="uppercase font-extrabold">{Author.title}</span></p>
                                </div>
                                <div className="contact-page-section-author-description px-4 text-[1rem] -mt-2 lg:-mt-4 border-l border-l-primary">
                                    {Author.description} 
                                </div>
                                <div className="flex gap-2">
                                    <span> <Megaphone className="inline text-primary" size={18}/> </span>
                                    <span> If you do like my work, Please <span className="capitalize font-bold">subscribe</span> for the latest events and blogs. I would appriciate your love and support. </span>
                                </div>
                                <div className="contact-page-section-author-link flex flex-col gap-4 italic">
                                    To know more about me 
                                    <Link href="/about" className={`ml-2 max-w-25 ${buttonVariants()}`}>About me</Link>
                                </div>
                            </div>
                            <div className="contact-page-section-newsletter flex-2 sticky top-20 h-full mt-0 md:-mt-6">
                                <NewsletterPromoCard/>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
} 