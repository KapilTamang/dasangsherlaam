import Link from "next/link";
import {
	RiFacebookBoxLine,
	RiInstagramLine,
	RiLinkedinBoxLine,
} from 'react-icons/ri';

import categories from "@/data/category";
import navlinks from "@/data/navlinks";

export default function Footer() {
    return (
       <footer className="footer-section-content flex flex-col gap-10 text-foreground">
            <section className="footer-section-content-top flex flex-col md:flex-row justify-between gap-10 md:gap-12 lg:gap-10">
                <section className="footer-section-content-info flex flex-1 flex-col gap-6 md:gap-8">
                    <div className="footer-section-content-info-company flex flex-col gap-6 items-center md:items-start">
                        <div className="footer-section-content-info-company-name text-[1.2rem] md:text-[1.5rem] uppercase font-bold">
                            <span className="bg-primary text-card-featured-foreground px-2 py-2 rounded-md">dasang blogs</span>
                        </div>
                        <div className="footer-section-content-info-company-description text-[1rem] text-center md:text-left">
                           Websites that provides you the most interesting & educational blogs.
                        </div>
                    </div>
                    <nav className="footer-section-content-info-sociallinks flex flex-col gap-3 items-center md:items-start">
                        <div className="footer-section-content-info-sociallinks-title text-[1.125rem] md:text-[1.1rem] font-bold uppercase">
                            social links
                        </div>
                        <div className="footer-section-content-info-sociallinks-links flex gap-2">
                           <Link className="text-[2rem] text-foreground hover:text-primary duration-300" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><RiFacebookBoxLine/></Link>
                           <Link className="text-[2rem] text-foreground hover:text-primary duration-300" href="https://www.instragram.com" target="_blank" rel="noopener noreferrer"><RiInstagramLine/></Link>
                           <Link className="text-[2rem] text-foreground hover:text-primary duration-300" href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><RiLinkedinBoxLine/></Link>
                        </div>
                    </nav>
                </section>
                <section className="footer-section-content-links flex flex-1 md:flex-2 flex-col md:flex-row gap-8 lg:gap-16 xl:gap-20">
                    <nav className="footer-section-content-links-categories flex flex-col gap-3 md:gap-4 items-center md:items-start">
                        <div className="footer-section-content-links-categories-title text-[1.1rem] uppercase font-bold">
                            categories
                        </div>
                        <div className="footer-section-content-links-categories-links flex flex-col gap-3 text-[1rem] items-center md:items-start text-muted-foreground font-medium capitalize">
                            {
                                categories.map((category) => (
                                    <Link key={category.id} href={`/categories/${category.slug}`} className="hover:text-primary duration-300">
                                        {category.title}
                                    </Link>
                                ))
                            }
                        </div>
                    </nav>
                    <nav className="footer-section-content-links-quicklinks flex flex-col gap-3 md:gap-4 items-center md:items-start">
                        <div className="footer-section-content-links-quicklinks-title text-[1.1rem] uppercase font-bold">
                            quick links
                        </div>
                        <div className="footer-section-content-links-quicklinks-links flex flex-col gap-3 items-center md:items-start text-[1rem] text-muted-foreground font-medium capitalize">
                            {
                                navlinks.map((navlink) => (
                                    <Link key={navlink.id} href={`/categories/${navlink.slug}`} className="hover:text-primary duration-300">
                                        {navlink.title}
                                    </Link>
                                ))
                            }
                        </div>
                    </nav>
                    <nav className="footer-section-content-links-legalinfo flex flex-col gap-3 md:gap-4 items-center md:items-start">
                        <div className="footer-section-content-links-legalinfo-title text-[1.1rem] uppercase font-bold">
                            legal informations
                        </div>
                        <div className="footer-section-content-links-legalinfo-links flex flex-col gap-3 items-center md:items-start text-[1rem] text-muted-foreground font-medium capitalize">
                           <Link href="/privacy-policy" className="hover:text-primary duration-300">privacy policy</Link>
                           <Link href="/cookie-policy" className="hover:text-primary duration-300">cookie policy</Link>
                           <Link href="/terms-condition" className="hover:text-primary duration-300">terms & condition</Link>
                        </div>
                    </nav>
                </section>
            </section>
            <section className="footer-section-content-botton">
                <div className="footer-section-content-additional-info flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-0 justify-start md:justify-between text-[1rem] text-center md:text-left">
                    <div className="footer-section-content-additional-info-copyright text-muted-foreground">
                        Copyright&copy; 2026 dasangsherlaam.com. All Rights Reserved.
                    </div>
                    <div className="footer-section-content-additional-info-developer">
                        Developed By <Link href="https://kapiltamang.com.np" className="text-primary font-semibold hover:opacity-70 duration-300">Kapil Tamang</Link>
                    </div>
                </div>
            </section>
       </footer>
    )
}