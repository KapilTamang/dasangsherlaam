"use client"

import React from 'react';
import { useParams } from "next/navigation";
import Image from "next/image";
import blogs from "@/data/blogs";
import categories from '@/data/category';
import SectionTitle from '@/components/ui/section-title';
import CardColumnSkeleton from '@/components/shared/skeleton/card-column-skeleton';
import NoData from '@/components/ui/no-data';
import Card from '@/components/shared/card/card-column';
import { Button, buttonVariants } from '@/components/ui/button';
import Footer from '@/components/shared/footer';

export default function Category() {
    //Define the loading state
    const [isLoading, setIsLoading] = React.useState(true);

    const params = useParams();
    const slug = params.slug;

    //Retrieve the current category
    const currentCategory = categories.find((category) => category.slug == slug);
    //Retrieving current category blogs
    // const categoryBlogs = blogs.filter((blog) => blog.category == currentCategory ?.title);
    const categoryBlogs = blogs;

    React.useEffect(() => {
        //Simulating API call 
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000)

        return() => clearTimeout(timer);
    }, [isLoading]);

    return (
        <main>
           <section id="category-page-banner-section" className="section-base-style bg-accent relative">
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
                    <div className="category-page-banner-section-details bg-background static md:absolute md:top-[50%] md:left-[50%] md:translate-x-[-50%] md:translate-y-[-50%] w-full md:w-auto max-w-[600px] md:min-w-[550px] lg:min-w-[600px] md:max-w-[550px] lg:max-w-[600px] flex flex-col gap-4 md:gap-6 px-4 md:px-10 py-4 md:py-6 rounded-sm shadow-2xl">
                        <div className="category-page-banner-section-details-title text-[1rem] lg:text-[1.1rem] font-medium capitalize">
                            explore more...<h1 className="text-[1rem] md:text-[1.6rem] lg::text-[2rem] font-extrabold uppercase mt-3 md:mt-5 bg-accent p-2 md:p-4 lg:p-6  border-l-2 border-l-primary">
                                <span className="text-card-featured-foreground uppercase text-[1rem] md:text-[1.3rem] lg::text-[1.6rem] font-extrabold bg-primary p-2 mr-2 md:mr-4 rounded">{currentCategory?.abbreviation}</span>
                                {currentCategory?.title} 
                            </h1>
                        </div>
                        <div className="category-page-banner-section-details-description text-[0.9rem] md:text-[1rem] lg:text-[1.125rem]">
                            {currentCategory?.description} 
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ipsum reprehenderit dignissimos at! Similique excepturi reiciendis, doloremque quam dolorum molestiae.
                        </div>
                    </div>
                </div>
           </section>
           <section className="category-page-blogs section-base-style">
                <div className="category-page-blogs-container container-base-style flex flex-col gap-4 md:gap-6">
                     <div className="section-related-blogs-title">
                        <SectionTitle title={`${currentCategory?.title}`}/>
                    </div>
                    <div className="section-related-blogs-content flex flex-col gap-4">
                            {
                                isLoading ? 
                                (
                                    <div className="section-related-blogs-content-card w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-y-10">
                                        <CardColumnSkeleton cardNumber={4} cardType="grid"/>
                                    </div>
                                ):
                                (
                                    
                                    categoryBlogs && categoryBlogs.length > 0 ? (
                                        <div className="section-related-blogs-content-card w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-y-10">
                                            {
                                                categoryBlogs.map((blog) => (
                                                    <Card key={blog.id} data={blog} width="auto"/>
                                                ))
                                            }
                                         </div>
                                    ):
                                    (
                                        <NoData content="currently no blogs to show" orientation="horizontal"/>
                                    )
                                )
                            }
                        <div className="section-related-blogs-content-button flex justify-end">
                            {
                                !isLoading && categoryBlogs && (
                                    <Button className={`self-end capitalize px-3 py-5 text-[1rem] ${buttonVariants()}`}>
                                        load more...
                                    </Button>
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