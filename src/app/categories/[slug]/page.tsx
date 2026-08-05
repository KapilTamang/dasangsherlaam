"use client"

import React from 'react';
import { useParams } from "next/navigation";
import Navbar from '@/components/shared/navbar';
import Image from "next/image";
import blogs from "@/data/blogs";
import categories from '@/data/category';
import SectionTitle from '@/components/ui/section-title';
import NoData from '@/components/ui/no-data';
import Card from '@/components/shared/card/card-column';
import { Button, buttonVariants } from '@/components/ui/button';
import Footer from '@/components/shared/footer';
import CardColumnSkeleton from '@/components/shared/skeleton/card-column-skeleton';
import { CardRowSkeleton } from '@/components/shared/skeleton/card-row-skeleton';
import CardRow from '@/components/shared/card/card-row';
import NewsletterPromoCard from '@/components/shared/card/card-newsletter-promo';

export default function Category() {
    const params = useParams();
    const slug = params.slug;

    //Retrieve the current category
    const currentCategory = categories.find((category) => category.slug == slug);
    
    //Retrieving current category blogs
    // const categoryBlogs = blogs.filter((blog) => blog.category == currentCategory ?.title);
    const categoryBlogs = blogs;

    //Retrieving trending blogs
    const trending = blogs.slice(0, 10);

    //Define the loading state
    const [isLoading, setIsLoading] = React.useState(true);
    const [isBlogLoading, setIsBlogLoading] = React.useState(false);

    //Define the visible blog count
    const [visibleBlogCount, setVisibleBlogCount] = React.useState(4)

    //Set blogs to display
    const visibleCategoryBlogs = categoryBlogs.slice(0, visibleBlogCount);

    //const to track has more blogs to show after load more click
    const hasMore = visibleBlogCount < categoryBlogs.length;

    React.useEffect(() => {
        //Simulating API call 
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000)

        return() => clearTimeout(timer);
    }, [isLoading]);

    //Callback function to handle load more blogs
    const handleLoadMore = () => {
        setIsBlogLoading(true);
        //scroll down to 500 to display loading cards
        window.scrollBy({
            top: 500,
            left: 0
        });
        //Simulating API call
        const timer = setTimeout(() => {
            setIsBlogLoading(false);
            setVisibleBlogCount((prev) => Math.min(prev+visibleBlogCount, categoryBlogs.length));
        }, 2000)

        return () => clearTimeout(timer);
    }

    return (
        <>
            <Navbar/>
            <main>
                <section id="category-page-banner-section" className="section-base-style relative bg-accent">
                    <div className="category-page-banner-section-container container-base-style flex flex-col-reverse md:flex-col gap-4 items-center">
                        <div className="category-page-banner-section-image w-full h-auto flex justify-center">
                                <Image
                                src={currentCategory?.imageURL ?? ''}
                                width={1400}
                                height={1000}
                                alt={currentCategory?.title ?? ''}
                                preload
                                />
                        </div>
                        <div className="category-page-banner-section-details bg-background static md:absolute md:top-[50%] md:left-[50%] md:translate-x-[-50%] md:translate-y-[-50%] w-full md:min-w-[550px] lg:min-w-[650px] md:max-w-[580px] lg:max-w-[650px] flex flex-col gap-4 md:gap-6 px-4 md:px-10 py-4 md:py-6 rounded-sm shadow-2xl">
                            <div className="category-page-banner-section-details-title text-[1rem] lg:text-[1.1rem] font-medium capitalize">
                                explore more...
                                <h1 className="flex items-center text-[1rem] md:text-[1.6rem] lg:text-[2rem] font-extrabold uppercase mt-3 md:mt-5 bg-accent p-2 md:p-4 lg:p-5  border-l-2 border-l-primary">
                                    <span className="text-card-featured-foreground uppercase text-[0.9rem] md:text-[1.3rem] lg::text-[1.6rem] font-extrabold bg-primary px-2 py-0 md:p-2 mr-2 md:mr-4 rounded">{currentCategory?.abbreviation}</span>
                                    {currentCategory?.title} 
                                </h1>
                            </div>
                            <div className="category-page-banner-section-details-description text-[0.9rem] md:text-[1rem] lg:text-[1.125rem]">
                                {currentCategory?.description} 
                            </div>
                        </div>
                    </div>
                </section>
                <section className="category-page-blogs-section section-base-style">
                    <div className="category-page-blogs-section-container container-base-style flex flex-col gap-4 md:gap-6">
                        <div className="category-page-blogs-title">
                            <SectionTitle title={`${currentCategory?.title}`}/>
                        </div>
                        <div className="category-page-blogs-content flex flex-col gap-4">
                                {
                                    isLoading ? 
                                    (
                                        <div className="category-page-blogs-content-card w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-y-10">
                                            <CardColumnSkeleton cardNumber={4} cardType="grid"/>
                                        </div>
                                    ):
                                    (
                                        
                                        categoryBlogs && categoryBlogs.length > 0 ? (
                                            <div className="category-page-blogs-content-card w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-y-10">
                                                {
                                                    visibleCategoryBlogs.map((blog) => (
                                                        <Card key={blog.id} data={blog} width="auto"/>
                                                    ))
                                                }
                                                {
                                                    isBlogLoading &&
                                                    <CardColumnSkeleton cardType="grid" cardNumber={4}/> 
                                                }
                                            </div>
                                        ):
                                        (
                                            <NoData content="currently no blogs to show" orientation="horizontal"/>
                                        )
                                    )
                                }
                            <div className="category-page-blogs-content-button flex justify-end">
                                {
                                    !isLoading && hasMore && (
                                        <Button className={`self-end capitalize px-3 py-5 text-[1rem] cursor-pointer ${isBlogLoading ? 'pointer-events-none opacity-50' : ''} ${buttonVariants()}`} onClick={handleLoadMore}>
                                            load more...
                                        </Button>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </section>
                <section className="category-page-trending-newslettor-section section-base-style">
                    <div className="category-page-trending-newsletter-section-container container-base-style flex flex-col md:flex-row gap-4 lg:gap-12">
                        <section className="category-page-trending w-full flex flex-4 flex-col gap-4 md:gap-2">
                            <SectionTitle title="trending now"/>
                            {
                                isLoading ? 
                                (
                                    <CardRowSkeleton type="trending" cardNumber={5} cardHeight={180}/>
                                ):
                                (
                                    trending && trending.length < 1 ? (
                                        <NoData orientation="vertical" content="currently no blogs to show"/>
                                    ):
                                    (
                                        trending.map((blog) => (
                                            <CardRow key={blog.id} data={blog} type="trending"/>
                                        ))
                                    )
                                )
                            }
                        </section>
                        <section className="category-page-newsletter flex flex-3 mt-2 sticky top-20 h-full">
                            <NewsletterPromoCard/>
                        </section>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}