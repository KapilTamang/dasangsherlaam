"use client";

import React from 'react';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import EmblaCarousel from '@/components/shared/embla-carousel';
import CardFeatured from '@/components/shared/card/card-featured';
import Footer from '@/components/shared/footer'
import SectionTitle from '@/components/ui/section-title';
import CardRow from '@/components/shared/card/card-row';
import CardText from '@/components/shared/card/card-text'
import blogs from '@/data/blogs';
import categories from '@/data/category';
import CardRowLarge from '@/components/shared/card/card-row-large';
import Newsletter from'@/components/shared/newsletter';
import SectionTitleSkeleton from '@/components/shared/skeleton/section-title-skeleton';
import { CardRowSkeleton } from '@/components/shared/skeleton/card-row-skeleton';

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
	//Assingning static number of categories
	const total_categories = 5;

	React.useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 2000);
		//Clear timer
		return() => clearTimeout(timer);
	},[isLoading])

	return (
		<main>
			<section id="banner-section" className="section-base-style bg-accent">
				<div className="banner-section-conatiner container-base-style">
					<div className="banner-section-content grid grid-cols-1 lg:grid-cols-4 gap-8">
						<div className="banner-section-content-trending col-span-1 md:col-span-1 order-2 md:order-1 flex flex-col gap-3 md:gap-4">
							<SectionTitle title="trending now"/>
							<div className="banner-section-content-trending-cards flex flex-col gap-4 md:gap-3">
								{
									isLoading ? (
										<CardRowSkeleton type="trending" cardNumber={5} />
									) :
									(
										trending && trending.map((blog) =>(
										<CardRow key={blog.id} data={blog} type="trending"/>
									))
									)
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
								<Link href="/categories/featured" className={`self-end capitalize px-2 text-[0.9rem] ${buttonVariants()}`}>
									read more...
								</Link>
							}
						</div>
						<div className="banner-section-content-authors-pick col-span-1 order-3 flex flex-col gap-3 md:gap-4">
							<SectionTitle title="author's pick"/>
							<div className="banner-section-content-authors-pick-cards flex flex-col gap-4 md:gap-3">
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
					<div className="exclusive-section-content flex flex-col gap-4 md:gap-8">
						<div className="exclusive-section-content-main">
							{exclusiveMain && <CardRowLarge data={exclusiveMain} isLoading={isLoading}/>}
						</div>
						<div className="exclusive-section-content-cards flex-col flex md:flex-row gap-4 md:gap-3">
							{
								exclusiveCard && exclusiveCard.map((blog) => (
									<CardRow key={blog.id} data={blog} type="exclusive"/>
								))
							}
						</div>				
					</div>
				</div>
			</section>
			{/* Home page section for diffrerent categories */}
			{
				isLoading && 
				//Mapping total no of categories to render skeleton for actual no of categories
				[...Array(total_categories)].map((_, index) => (
					<section key={index} id="category-section" className="section-base-style">
						<div className="category-section-container container-base-style">
							<div className="category-section-content flex flex-col gap-0">
								<div className="category-section-content-title">
									<SectionTitleSkeleton/>
								</div>
								<div className="category-section-content-carousel flex flex-col gap-3 md:gap-4">
									<div className="category-section-content-carousel-card">
										<EmblaCarousel data={blogs} isLoading={isLoading}/>
									</div>
								</div>
							</div>
						</div>
					</section>
				))
			}
			{	
				!isLoading && categories && categories.map((category) => (
					<section key={category.id} id="category-section" className="section-base-style">
						<div className="category-section-container container-base-style">
							<div key={category.id} className="category-section-content flex flex-col gap-0">
								<div className="category-section-content-title">
									<SectionTitle title={category.title}/>
								</div>
								<div className="category-section-content-carousel flex flex-col gap-3 md:gap-4">
									<div className="category-section-content-carousel-card">
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
						</div>
					</section>
					))
				}		
			<section id="newsletter-section">
				<Newsletter/>
			</section>
			<section id="footer-section">
				<Footer/>
			</section>
		</main>
	);
}