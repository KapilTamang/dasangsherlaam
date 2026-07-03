export default function Newsletter() {
    return(
        <div className="section-newsletter-content flex flex-col md:flex-row gap-6 md:gap-8">
            <div className="section-newsletter-content-img flex flex-1">
                <img src="/images/newsletter.svg" alt="" />
            </div>
            <div className="section-newsletter-content-form flex flex-1 flex-col gap-4 justify-center items-center p-4">
                <p className="text-[1.3rem] capitalize">
                   subscribe to our
                </p>
                <span className="text-[2rem] text-card-featured-foreground font-bold uppercase px-4 py-2 bg-primary">newsletter</span>
                <p className="text-[1.125rem] capitalize font-normal">for latest blogs and updates</p>
            </div>
        </div>
    )
}