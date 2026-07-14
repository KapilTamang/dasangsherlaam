import { CalendarCheck } from 'lucide-react';
import { buttonVariants } from '../ui/button';

export default function NewsletterPromo () {
    return(
        <article className="newsletter-promo h-[300px] lg:h-[350px] mt-0 md:mt-6 bg-accent flex flex-col gap-8 justify-center items-center shadow-sm">
           <div className="newsletter-promo-title text-[2.8rem] lg:text-[3.5rem] font-extrabold">
                <h1>Newsletter</h1>
           </div>
           <div className="newsletter-promo-description font-light pl-2 border-l border-l-foreground">
                <p>For latest and interesing artilces.</p>
           </div>
           <div className="newsletter-promo-subscription-btn flex flex-col gap-4 items-center">
                <p className="text-[1.2rem] lg:text-[1.3rem] uppercase font-bold animate-pulse">Subscribe now !!!</p>
                 <a href="/#newsletter-section" className={`px-3 py-4.5 text-[0.9rem] ${buttonVariants()}`}>
                    <CalendarCheck data-icon="inline" /> Subscribe
                </a>
           </div>
        </article>
    )
}