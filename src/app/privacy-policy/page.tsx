import Image from "next/image";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import { buttonVariants } from "@/components/ui/button";

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
                                className=""
                                src="/images/privacy.svg"
                                width={600}
                                height={600}
                                alt="privacy-policy"
                                preload
                                />
                            </div>
                            <div className="privacy-policy-page-banner-section-content-text-container w-full flex flex-1 flex-col gap-3 md:gap-4 lg:gap-5 px-6 border-l border-primary/80">
                                <div className="privacy-policy-page-banner-section-content-sub-title text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] font-normal uppercase text-primary">
                                    legal & transparency
                                </div>
                                <div className="privacy-policy-page-banner-section-content-main-tittle -mt-4 md:-mt-5 lg:-mt-8 text-[2.2rem] md:text-[2.8rem] lg:text-[3.8rem] capitalize font-extrabold">
                                    privacy policy
                                </div>
                                <div className="privacy-policy-page-banner-section-content-description">
                                    <p>How we collect, use and protect your data</p>
                                </div>
                                <div className="privacy-policy-page-banner-section-content-navigation">
                                    <a href="#privacy-policy-details" className={`${buttonVariants()} capitalize`}>learn more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="privacy-policy-details" className="privacy-policy-page-details-section section-base-style">
                   <div className="privacy-policy-page-details-container container-base-style">
                        sdfad
                   </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}