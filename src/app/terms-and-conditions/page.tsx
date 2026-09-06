import Image from "next/image";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import { buttonVariants } from "@/components/ui/button";
import NewsletterPromo from "@/components/shared/card/card-newsletter-promo";
import TC from "@/data/terms-and-conditions";
import { FaShieldHalved, FaCircleCheck } from "react-icons/fa6";
import { ArrowBigRightDash } from "lucide-react";

export default function TermsAndConditions() {
    return(
        <>
            <Navbar/>
            <main>
                <section className="tc-page-banner-section section-base-style bg-accent">
                    <div className="tc-page-banner-section-container container-base-style">
                        <div className="tc-page-banner-section-content w-full flex flex-col md:flex-row gap-6 justify-center items-center">
                            <div className="tc-page-banner-section-content-image w-full h-auto flex flex-1 justify-center">
                                <Image
                                className=""
                                src="/images/tnc.svg"
                                alt="tc"
                                width={600}
                                height={600}
                                preload
                                />
                            </div>
                            <div className="tc-page-banner-section-content-text-container w-full flex flex-1 flex-col gap-3 md:gap-4 lg:gap-5 px-6 border-l border-primary/80">
                                <div className="tc-page-banner-section-content-sub-title text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] font-normal uppercase text-primary">
                                    legal & transparency
                                </div>
                                <div className="tc-page-banner-section-content-main-tittle -mt-4 md:-mt-5 lg:-mt-8 text-[2.2rem] md:text-[2.8rem] lg:text-[3.8rem] capitalize font-extrabold">
                                    terms & conditions
                                </div>
                                <div className="tc-page-banner-section-content-description">
                                    <p>Welcome to <span className="font-extrabold capitalize">dasangsherlaam</span>.  By accessing or using this website, you agree to comply with and be bound by these Terms and Conditions.
                                     If you do not agree with any part of these terms, please do not use our website.
                                    </p>
                                </div>
                                <div className="tc-page-banner-section-content-navigation">
                                    <a href="#tc-details" className={`${buttonVariants()} capitalize`}>learn more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="tc-details" className="tc-page-details-section section-base-style">
                   <div className="tc-page-details-container container-base-style flex flex-col md:flex-row w-full gap-10 md:gap-6 lg:gap-10">
                        <div className="tc-page-details-content relative w-full flex flex-1 md:flex-3 bg-accent shadow-sm">
                            <div className="contact-page-section-author-section-title flex gap-2 md:gap-3 items-center absolute -top-5 md:-top-5 lg:-top-8 left-3 md:left-4 lg:left-5 bg-primary max-w-90 px-4 md:px-5 lg:px-8 py-2 md:py-2 lg:py-4 text-card-featured-foreground text-[1rem] md:text-[1.2rem] lg:text-[1.6rem] font-extrabold uppercase rounded-full">
                                <span>more details</span>
                                <FaShieldHalved className="inline w-4 h-4 md:w-5 md:h-5 lg:w-7 lg:h-7"/>
                            </div>
                            <div className="tc-page-details-content-terms flex flex-col gap-8 lg:gap-10 px-2 lg:px-8 py-8 lg:py-10 mt-4 md:mt-6 lg:mt-10">
                                {
                                    TC.map((term) => (
                                        <div key={term.id} className="tc-term flex gap-2">
                                            <div className="tc-term-icon -mt-0.5">
                                                <FaShieldHalved className="inline w-4 h-4 text-primary"/>
                                            </div>
                                            <div className="tc-term-text flex flex-col gap-2">
                                                <span className="tc-term-text-heading text-[1rem] md:text-[1.1] uppercase font-extrabold">
                                                    {term.title}
                                                </span>
                                                <div className="tc-term-text-description border-l border-l-primary/80 px-2">
                                                    <p>{term.description}</p>
                                                </div>
                                                <div className="tc-term-text-bullets flex flex-col gap-2 mt-2">
                                                    {
                                                        term.bullets && 
                                                        term.bullets.map((bullet, _index) => (
                                                            <span key={_index} className="flex gap-2 items-start md:items-center"><FaCircleCheck className="w-4 h-4 text-primary"/> <p>{bullet.point}</p></span>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="tc-page-details-newsletter-card sticky top-20 h-full w-full flex flex-1 md:flex-2 justify-start mt-0 md:-mt-6">
                            <NewsletterPromo/>
                        </div>
                   </div>
                </section>
            </main>
            <Footer/>
        </>
    )
} 