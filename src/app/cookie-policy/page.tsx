import Image from "next/image";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import { buttonVariants } from "@/components/ui/button";
import NewsletterPromo from "@/components/shared/card/card-newsletter-promo";
import { FaCookieBite } from "react-icons/fa6";
import { Cookie } from "lucide-react";
import CookiePolicy from "@/data/cookie";

export default function Privacy() {
    return (
        <>
            <Navbar/>
            <main>
                <section className="privacy-policy-page-banner-section section-base-style bg-accent">
                    <div className="privacy-policy-page-banner-section-container container-base-style">
                        <div className="privacy-policy-page-banner-section-content w-full flex flex-col md:flex-row gap-6 justify-center items-center">
                            <div className="privacy-policy-page-banner-section-content-image w-full h-auto flex flex-1 justify-center">
                                <Image
                                src="/images/cookie.svg"
                                width={800}
                                height={800}
                                alt="privacy-policy"
                                preload
                                />
                            </div>
                            <div className="privacy-policy-page-banner-section-content-text-container w-full flex flex-1 flex-col gap-3 md:gap-4 lg:gap-5 px-6 border-l border-primary/80">
                                <div className="privacy-policy-page-banner-section-content-sub-title text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] font-normal uppercase text-primary">
                                    legal & transparency
                                </div>
                                <div className="privacy-policy-page-banner-section-content-main-tittle -mt-4 md:-mt-5 lg:-mt-8 text-[2.2rem] md:text-[2.8rem] lg:text-[3.8rem] capitalize font-extrabold">
                                    cookie policy
                                </div>
                                <div className="privacy-policy-page-banner-section-content-description">
                                    Welcome to <span className="font-extrabold capitalize">dasangsherlaam</span>. This Cookie Policy
                                    explains how we use cookies and similar tracking technologies on our
                                    website. By using our website, you consent to the use of cookies as
                                    described in this policy.
                                </div>
                                <div className="privacy-policy-page-banner-section-content-navigation">
                                    <a href="#privacy-policy-details" className={`${buttonVariants()} capitalize`}>learn more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="privacy-policy-details" className="privacy-policy-page-details-section section-base-style">
                   <div className="privacy-policy-page-details-container container-base-style flex flex-col md:flex-row w-full gap-10 md:gap-6 lg:gap-10">
                        <div className="privacy-policy-page-details-content relative w-full flex flex-1 md:flex-3 bg-accent shadow-sm">
                            <div className="contact-page-section-author-section-title flex gap-2 md:gap-3 items-center absolute -top-5 md:-top-5 lg:-top-8 left-3 md:left-4 lg:left-5 bg-primary max-w-90 px-4 md:px-5 lg:px-8 py-2 md:py-2 lg:py-4 text-card-featured-foreground text-[1rem] md:text-[1.2rem] lg:text-[1.6rem] font-extrabold uppercase rounded-full">
                                <span>more details</span>
                                <Cookie className="inline w-4 h-4 md:w-5 md:h-5 lg:w-7 lg:h-7"/>
                            </div>
                            <div className="privacy-policy-page-details-content-terms flex flex-col gap-8 lg:gap-10 px-2 lg:px-8 py-8 lg:py-10 mt-4 md:mt-6 lg:mt-10">
                                {
                                    CookiePolicy.map((policy) => (
                                        <div key={policy.id} className="privacy-policy-term flex gap-2">
                                            <div className="privacy-policy-term-icon -mt-0.5">
                                                <FaCookieBite className="inline w-4 h-4 fill-primary"/>
                                            </div>
                                            <div className="privacy-policy-term-text flex flex-col gap-2">
                                                <span className="privacy-policy-term-text-heading text-[1rem] md:text-[1.1] uppercase font-extrabold">
                                                    {policy.title}
                                                </span>
                                                <div className="privacy-policy-term-text-description border-l border-l-primary/80 px-2">
                                                     {policy.description}
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="privacy-policy-page-details-newsletter-card sticky top-20 h-full w-full flex flex-1 md:flex-2 justify-start mt-0 md:-mt-6">
                            <NewsletterPromo/>
                        </div>
                   </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}