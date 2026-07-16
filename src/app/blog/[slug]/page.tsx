import React from 'react';
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import blogs from "@/data/blogs";
import categories from "@/data/category";
import Footer from '@/components/shared/footer';
import CategoryTag from "@/components/shared/category-tag";
import { CalendarClock, UserPen } from 'lucide-react';
import SectionTitle from "@/components/ui/section-title";
import CardRow from "@/components/shared/card-row";
import  Card from '@/components/shared/card-column';
import NewsletterPromoCard from "@/components/shared/card-newsletter-promo"
1
export default async function Blog({params,} : {params: Promise<{slug: string}>}) {
    //Retrieve slug from URL
    const {slug} = await params;

    const currentBlog = blogs.find((blog) => blog.slug === slug);
    //Fetching dummy data..
	const trending = blogs.filter((blog) => blog.category !== 'featured').slice(0,5);
    //Category of current blog
    const currentCategory = categories.find((category) => category.title === currentBlog?.category)
    //Blogs from same category
    const recommendation = blogs.filter((blog) => blog.category === currentCategory?.title).slice(0,8);

    return (
        <main>
            {
                currentBlog ?  
                    (<section className="section-single-blog section-base-style relative">
                        <div className="section-single-blog-container container-base-style">
                            <div className="single-blog-content flex flex-col md:flex-row gap-4 lg:gap-6">
                                <article className="sinlge-blog-content-left flex flex-col flex-3 gap-4 md:gap-2 relative">
                                    <div className="single-blog-content-left-info flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-12 items-start md:items-center justify-between">
                                        <div className="single-blog-content-left-info-img relative block md:hidden">
                                            <div className="single-blog-content-left-img-conatiner">
                                                <Image
                                                className="shadow-lg" 
                                                src={currentBlog.imageURL} 
                                                alt={currentBlog.title}
                                                width={1200}
                                                height={1000}
                                                />
                                            </div>
                                            <div className="single-blog-content-left-img-tag absolute top-3 left-2">
                                                <CategoryTag title={currentBlog.category}/>
                                            </div>
                                        </div>
                                        <div className="single-blog-content-left-info-category hidden md:block">
                                             <CategoryTag title={currentBlog.category}/>
                                        </div>
                                        <div className="single-blog-content-left-info-author-date w-full md:w-auto flex gap-6 lg:gap-12 justify-between text-[0.9rem] md:text-[1rem] text-muted-foreground">
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
                                    <div className="single-blog-content-left-title text-[1.3rem] md:text-[1.2rem] lg:text-[1.4rem] font-bold capitalize px-4 py-3 border-l-2 border-l-primary/50 bg-accent sticky top-15 md:top-20">
                                        {currentBlog.title}
                                    </div>
                                    <div className="single-blog-content-left-description order-4 mt-0 md:mt-2 lg:mt-4">
                                        <p>
                                            {currentBlog.description}<br></br><br></br>
                                            {currentBlog.description}<br></br><br></br>
                                            {currentBlog.description}<br></br><br></br>
                                            {currentBlog.description}<br></br><br></br>
                                            {currentBlog.description}<br></br><br></br>
                                            {currentBlog.description}<br></br><br></br>
                                            {currentBlog.description}<br></br><br></br>
                                            {currentBlog.description}<br></br><br></br>
                                            {currentBlog.description}<br></br><br></br>
                                        </p>
                                    </div>
                                </article>
                                <div className="single-blog-content-right flex flex-col flex-2 gap-6 sticky top-25 h-full">
                                    <div className="single-blog-content-img relative hidden md:block">
                                        <div className="single-blog-content-img-conatiner">
                                            <Image
                                            className="shadow-lg" 
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
                                    <div className="single-blog-content-recommendation w-full flex flex-col gap-4 md:gap-2">
                                        <SectionTitle title="trending now"/>
                                        {
                                            trending.map((blog) => (
                                                <CardRow key={blog.id} data={blog} isLoading={false} type="trending"/>
                                            ))
                                        }
                                        <NewsletterPromoCard/>
                                    </div>
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
            <section className="section-similar section-base-style">
                <div className="section-similar-container container-base-style flex flex-col gap-2 md:gap-6">
                    <div className="section-similar-title">
                        <SectionTitle title="similar blogs"/>
                    </div>
                    <div className="section-similar-content w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-x-4 md:gap-y-10">
                        {
                            recommendation && recommendation.map((blog) => (
                                <Card key={blog.id} data={blog} isLoading={false} width={0} height={0}/>
                                )
                            )
                        }
                    </div>
                    {
                        currentCategory && (
                            <Link href={`/categories/${currentCategory.slug}`} className={`self-end capitalize px-3 py-5 text-[1rem] ${buttonVariants()}`}>
                                {currentCategory.title}...
                            </Link>
                        )
                    }
                </div>
            </section>
            <section className="footer-section">
                <Footer/>
            </section>
        </main>
    )
}