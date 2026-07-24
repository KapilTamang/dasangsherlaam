"use client";

import React from 'react';
import Link from "next/link";
import { useParams } from 'next/navigation';
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import blogs from "@/data/blogs";
import categories from "@/data/category";
import Footer from '@/components/shared/footer';
import CategoryTag from "@/components/shared/category-tag";
import { CalendarClock, UserPen } from 'lucide-react';
import SectionTitle from "@/components/ui/section-title";
import CardRow from "@/components/shared/card/card-row";
import  Card from '@/components/shared/card/card-column';
import NoData from '@/components/ui/no-data';
import NewsletterPromoCard from "@/components/shared/card/card-newsletter-promo";
import {ImageSkeleton, SingleBlogSkeleton} from '@/components/shared/skeletons';
import CardColumnSkeleton from '@/components/shared/skeleton/card-column-skeleton';
import LikeButton from '@/components/shared/blog-engagement/like-button';
import SocialShare from '@/components/shared/blog-engagement/social-share';

export default function Blog() {
    //Retrieve slug from URL
    const params = useParams();
    const slug = params.slug;

    const currentBlog = blogs.find((blog) => blog.slug === slug);
    //Fetching dummy data..
	const trending = blogs.filter((blog) => blog.category !== 'featured' && blog.id != currentBlog?.id).slice(0,8);
    //Category of current blog
    const currentCategory = categories.find((category) => category.title === currentBlog?.category)
    //Blogs from same category
    const recommendation = blogs.filter((blog) => blog.category === currentCategory?.title && blog.id != currentBlog?.id).slice(0,8);

    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        const timer = setTimeout(()=> {
            setIsLoading(false);
        }, 3000)

        return() => clearTimeout(timer);
    });

    return (
        <main>
            {
                currentBlog ?  
                    (<section className="section-single-blog section-base-style relative">
                        <div className="section-single-blog-container container-base-style">
                            <div className="single-blog-content flex flex-col md:flex-row gap-4 lg:gap-6">
                                {
                                    isLoading ? (
                                        <SingleBlogSkeleton/>
                                    ): (
                                        <article className="sinlge-blog-content-left flex flex-col flex-3 gap-4 md:gap-2 relative">
                                            <div className="single-blog-content-left-info flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-12 items-start md:items-center justify-between">
                                                <div className="single-blog-content-left-info-img w-full relative block md:hidden">
                                                    <div className="single-blog-content-left-img-conatiner">
                                                        <Image
                                                        className="shadow-lg" 
                                                        src={currentBlog.imageURL} 
                                                        alt={currentBlog.title}
                                                        width={1200}
                                                        height={1000}
                                                        priority
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
                                            <div className="single-blog-content-left-title text-[1.1rem] md:text-[1.2rem] lg:text-[1.2rem] font-bold capitalize px-4 py-3 border-l-2 border-l-primary bg-accent sticky top-15 md:top-20">
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
                                    )
                                }
        
                                <div className="single-blog-content-right flex flex-col flex-2 gap-6 sticky top-25 h-full">
                                    <div className="single-blog-content-img w-full relative hidden md:block">
                                        {
                                            isLoading ? (
                                                <ImageSkeleton/>
                                            ): (
                                                <>
                                                    <div className="single-blog-content-img-conatiner">
                                                        <Image
                                                        className="shadow-lg" 
                                                        src={currentBlog.imageURL} 
                                                        alt={currentBlog.title}
                                                        width={1200}
                                                        height={1000}
                                                        priority
                                                        />
                                                    </div>
                                                    <div className="single-blog-content-img-tag absolute top-3 left-2 block md:hidden">
                                                        <CategoryTag title={currentBlog.category}/>
                                                    </div>
                                                </>
                                            )
                                        }
                                    </div>
                                    <div className="single-blog-content-engagement flex items-center text-muted-foreground gap-2 md:gap-3 mt-0 md:-mt-4">
                                        <LikeButton isLoading={isLoading}/>
                                        <SocialShare isLoading={isLoading}/>
                                    </div>
                                    <div className="single-blog-content-recommendation w-full flex flex-col gap-4 md:gap-2">
                                        <SectionTitle title="trending now"/>
                                        {
                                            trending.map((blog) => (
                                                <CardRow key={blog.id} data={blog} isLoading={isLoading} type="trending"/>
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
            <section className="section-related-blogs section-base-style">
                <div className="section-related-blogs-container container-base-style flex flex-col gap-4 md:gap-6">
                    <div className="section-related-blogs-title">
                        <SectionTitle title="realted blogs"/>
                    </div>
                    <div className="section-related-blogs-content flex flex-col gap-4">
                        <div className="section-related-blogs-content-card w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-y-10">
                            {
                                isLoading ? 
                                (
                                    <CardColumnSkeleton cardNumber={4} cardType="grid"/>
                                ):
                                (
                                    !isLoading && recommendation && recommendation.map((blog) => (
                                    <Card key={blog.id} data={blog} width="auto"/>
                                        )
                                    )
                                )
                            }
                        </div>
                        <div className="section-related-blogs-content-button flex justify-end">
                            {
                                !isLoading && currentCategory && (
                                    <Link href={`/categories/${currentCategory.slug}`} className={`self-end capitalize px-3 py-5 text-[1rem] ${buttonVariants()}`}>
                                        {currentCategory.title}...
                                    </Link>
                                )
                            }
                        </div>
                    </div>
                </div>
            </section>
            <section className="footer-section">
                <Footer/>
            </section>
        </main>
    )
}