import Link from "next/link";
import Image from "next/image";
import NewsletterForm from "../features/newsletter/newsletter-form";
import SectionTitle from "../ui/section-title";

export default function Newsletter() {
    return (
        <div className="section-base-style">
            <div className="newsletter-section-container container-base-style flex flex-col gap-6 md:gap-8">
                <SectionTitle title="newsletter"/>
                <div className="newsletter-section-content flex flex-col md:flex-row gap-2 md:gap-4 lg:gap-10">
                    <figure className="newsletter-section-content-img flex flex-1">
                        <Image 
                            className="w-full h-auto object-cover"
                            src="/images/newsletter.svg" 
                            alt="newsletter img"
                            width={600}
                            height={500} 
                            priority />
                    </figure>
                    <div className="newsletter-section-content-text bg-accent flex flex-1 lg:flex-2 flex-col gap-6 justify-center items-center px-4 pt-6 pb-2 md:pt-8 md:pb-4 md:px-6 lg:pt-12 lg:pb-6 rounded-lg">
                        <div className="newsletter-section-content-text-subscribe flex flex-col gap-7 md:gap-10 justify-center items-center">
                            <h1 className="text-[1.3rem] lg:text-[1.6rem] uppercase font-bold">join the community !</h1>
                            <div className="newsletter-section-content-text-newsletter -skew-x-12">
                                <span className="text-[1.5rem] md:text-[1.6rem] lg:text-[2rem] text-card-featured-foreground font-bold uppercase px-6 py-2 bg-primary">newsletter</span>
                            </div>
                            <p className="w-full md:w-[95%] lg:w-[80%] text-center">
                                Get the latest updates, behind-the-scenes stories, and monthly roundups delivered directly to you.
                            </p>
                        </div>
                        <div className="newsletter-section-content-form w-full xl:w-[60%] min-h-[180px] md:min-h-[200px] flex flex-col justify-center gap-4 md:gap-6">
                            <NewsletterForm/> 
                            <div>
                                <Link href="/privacy-policy" className="text-[0.9rem] md:text-[1rem] text-foreground capitalize underline hover:text-primary duration-300">
                                    terms & conditions
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}