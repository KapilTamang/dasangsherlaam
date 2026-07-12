"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
import { buttonVariants } from '@/components/ui/button';
import EmblaCarousel from '@/components/shared/embla-carousel';
import CardFeatured from '@/components/shared/card-featured';
import NewsletterForm from '@/components/features/newsletter/newsletter-form';
import Footer from '@/components/shared/footer'
import SectionTitle from '@/components/ui/section-title';
import CardRow from '@/components/shared/card-row';
import CardText from '@/components/shared/card-text'
import blogs from '@/data/blogs';
import categories from '@/data/category';
import CardRowLarge from '@/components/shared/card-row-large';

export default function Home() {

	const [isLoading, setIsLoading] = React.useState(true);

	//Fetching dummy data..
	const trending = blogs.filter((blog) => blog.category !== 'featured').slice(0,5);
	//Fetching author's pick blogs
	const authorsPick = blogs.filter((blog) => blog.category !== 'featured').slice(0,6);
	//Finding featured blog
	const featured = blogs.find((blog) => blog.category == 'featured');
	//Finding most recent exclusive blog
	const exclusiveMain = blogs.find((blog) => blog.category == 'exclusive')
	//Finding all exclusive bolgs
	const exclusiveCard = blogs.filter((blog) => blog.category == 'exclusive').slice(0,3)

	React.useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 3000);
	})

	return (
		<main>
			<section id="banner-section" className="section-base-style bg-accent">
				<div className="banner-section-conatiner container-base-style">
					<div className="banner-section-content grid grid-cols-1 lg:grid-cols-4  gap-8">
						<div className="banner-section-content-trending col-span-1 md:col-span-1 order-2 md:order-1 flex flex-col gap-3 md:gap-4">
							<SectionTitle title="trending..."/>
							<div className="banner-section-content-trending-cards flex flex-col gap-8 md:gap-3">
								{
									trending && trending.map((blog) =>(
										<CardRow key={blog.id} data={blog} type="trending" isLoading={isLoading}/>
									))
								}
							</div>
						</div>
						<div className="banner-section-content-featured col-span-1 order-1 md:order-2 lg:col-span-2 col-start-1 flex flex-col gap-3 md:gap-4">
							<SectionTitle title="featured"/>
							{ 
								featured && <CardFeatured data={featured} isLoading={isLoading}/>
							}
							{
								!isLoading && 
								<Link href="/categories/featured" className={`self-end capitalize px-3 py-5 text-[1rem] ${buttonVariants()}`}>
									read more...
								</Link>
							}
						</div>
						<div className="banner-section-content-authors-pick col-span-1 order-3 flex flex-col gap-3 md:gap-4">
							<SectionTitle title="author's pick..."/>
							<div className="banner-section-content-authors-pick-cards flex flex-col gap-8 md:gap-3">
								{
									authorsPick && authorsPick.map((blog) =>(
										<CardText key={blog.id} data={blog} isLoading={isLoading}/>
									))
								}
							</div>
						</div>
					</div>
				</div>
			</section>
			<section id="exclusive-section" className="section-base-style">
				<div className="exclusive-section-container container-base-style flex flex-col gap-3 md:gap-4">
					<div className="exclusive-section-title">
						<SectionTitle title="exclusive"/>
					</div>
					<div className="exclusive-section-content flex flex-col gap-8">
						<div className="exclusive-section-content-main">
							{exclusiveMain && <CardRowLarge data={exclusiveMain} isLoading={isLoading}/>}
						</div>
						<div className="exclusive-section-content-cards flex-col flex md:flex-row gap-8 md:gap-3">
							{
								exclusiveCard && exclusiveCard.map((blog) => (
									<CardRow key={blog.id} data={blog} type="exclusive" isLoading={isLoading}/>
								))
							}
						</div>				
					</div>
				</div>
			</section>
			{/* Home page section for diffrerent categories */}
			{
				categories && categories.map((category) => (
					<section key={category.id} id="category-section" className="section-base-style">
						<div className="category-section-container container-base-style">
							<div className="category-section-content flex flex-col gap-2 md:gap-6">
								<SectionTitle title={category.title}/>
								<div className="category-section-content-card">
									<EmblaCarousel data={blogs} isLoading={isLoading}/>
								</div>
								{
									!isLoading && 
									<Link href={`/categories/${category.slug}`} className={`self-end capitalize px-3 py-5 text-[1rem] ${buttonVariants()}`}>
										{category.title}...
									</Link>
								}
							</div>
						</div>
					</section>
				))
			}
			<section id="newsletter-section" className="section-base-style">
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
			</section>
			<section id="footer-section" className="section-base-style bg-accent">
				<div className="footer-section-container container-base-style">
					<Footer/>
				</div>
			</section>
		</main>
	);
}