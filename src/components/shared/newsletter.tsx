export default function Newsletter() {
    return(
        <div className="section-newsletter-content flex flex-col md:flex-row gap-6 md:gap-8">
            <div className="section-newsletter-content-img flex flex-1">
                <img className="w-full h-full object-cover" src="/images/newsletter.svg" alt="" />
            </div>
            <div className="section-newsletter-content-form flex flex-1 flex-col gap-8 justify-center items-center p-4">
                <div className="section-newsletter-content-form-text flex flex-col gap-6 justify-center items-center">
                    <p className="text-[1.3rem] capitalize font-medium">subscribe to our</p>
                    <div className="section-newsletter-content-form-text-newsletter -skew-x-12">
                         <span className="text-[2rem] text-card-featured-foreground font-bold uppercase px-4 py-2 bg-primary">newsletter</span>
                    </div>
                    <p className="text-[1.1rem] capitalize font-normal">for latest blogs and updates</p>
                </div>
                <div className="section-newsletter-content-form-input flex flex-col gap-4">
                    sdfsdf
                    <div className="section-newsletter-content-form-input">
                        checkbox
                    </div>
                </div>
            </div>
        </div>
    )
}