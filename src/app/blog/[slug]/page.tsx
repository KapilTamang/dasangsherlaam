import Link from "next/link";
import Image from "next/image";
import blogs from "@/data/blogs";
import Footer from '@/components/shared/footer';
import CategoryTag from "@/components/shared/category-tag";
import { CalendarClock, UserPen } from 'lucide-react';
import SectionTitle from "@/components/ui/section-title";
import CardRow from "@/components/shared/card-row";
import NewsletterPromoCard from "@/components/shared/card-newsletter-promo"
1
export default async function Blog({params,} : {params: Promise<{slug: string}>}) {
    const {slug} = await params;

    const currentBlog = blogs.find((blog) => blog.slug === slug);
    //Fetching dummy data..
	const trending = blogs.filter((blog) => blog.category !== 'featured').slice(0,5);

    return (
        <main>
            {
                currentBlog ?  
                    (<section className="section-single-blog section-base-style">
                        <div className="section-single-blog-container container-base-style">
                            <div className="single-blog-content grid grid-flow-row-dense grid-cols-1 md:grid-cols-7 gap-4 lg:gap-12">
                                <div className="sinlge-blog-content-text grid row-span-2 gap-4 md:gap-2 col-span-1 md:col-span-4 order-2 md:order-1">
                                    <div className="single-blog-content-info flex flex-col md:flex-row gap-0 md:gap-6 lg:gap-12 items-start md:items-center justify-between">
                                        <div className="single-blog-content-info-category hidden md:block">
                                             <CategoryTag title={currentBlog.category}/>
                                        </div>
                                        <div className="single-blog-content-info-author-date w-full md:w-auto flex gap-6 lg:gap-10 justify-between text-[0.9rem] md:text-[1rem] text-muted-foreground">
                                            <div className="flex gap-2 items-center">
                                                <UserPen className="inline" size={20}/>
                                                {currentBlog.author}
                                            </div>
                                            <div className="flex gap-2 items-center">
                                                <CalendarClock className="inline" size={20}/>
                                                {currentBlog.date}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-blog-content-title text-[1.3rem] md:text-[1.2rem] lg:text-[1.4rem] font-bold capitalize px-4 py-3 border-l-2 border-l-primary/50 bg-accent">
                                        {currentBlog.title}
                                    </div>
                                    <div className="single-blog-content-description order-4 mt-1 md:mt-2 lg:mt-4">
                                        <p>
                                            {currentBlog.description}<br></br><br></br>
                                            {currentBlog.description}<br></br><br></br>
                                            {currentBlog.description}<br></br><br></br>
                                            {currentBlog.description}<br></br><br></br>
                                            {currentBlog.description}<br></br><br></br>
                                        </p>
                                    </div>
                                </div>
                                <div className="single-blog-content-img relative row-span-1 col-span-1 md:col-span-3 order-1 md:order-2">
                                    <div className="single-blog-content-img-conatiner">
                                        <Image
                                        className="object-contain shadow-lg" 
                                        src={currentBlog.imageURL} 
                                        alt={currentBlog.title}
                                        width={1200}
                                        height={1000}
                                        />
                                    </div>
                                    <div className="single-blog-content-img-tag absolute top-3 left-2 block md:hidden">
                                        <CategoryTag title={currentBlog.category}/>
                                    </div>
                                </div>
                                <div className="single-blog-content-trending flex flex-col gap-8 md:gap-2 row-span-2 col-span-1 md:col-span-3 col-start-1 md:col-start-5 order-3">
                                    <SectionTitle title="trending now..."/>
                                    {
                                        trending.map((blog) => (
                                            <CardRow key={blog.id} data={blog} isLoading={false} type="trending"/>
                                        ))
                                    }
                                    <NewsletterPromoCard/>
                                </div>
                            </div>
                        </div>
                    </section>)
                : (
                    <section className="section-blog section-base-style">
                        <div className="section-blog-container container-base-style">
                            <h1>Resource Not Found.</h1>
                        </div>
                    </section>)
            }
            <Footer/>
        </main>
    )
}