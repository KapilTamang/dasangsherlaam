import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button';
import EmblaCarousel from '@/components/shared/embla-carousel';
import CardFeatured from '@/components/shared/card-featured';
import NewsletterForm from '@/components/features/newsletter/newsletter-form';
import SectionTitle from '@/components/ui/section-title';
import CardRow from '@/components/shared/card-row';
import CardText from '@/components/shared/card-text'
import blogs from '@/data/blogs';
import categories from '@/data/category';
import CardRowLarge from '@/components/shared/card-row-large';

export default function Home() {

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
										<CardRow key={blog.id} data={blog} type="trending"/>
									))
								}
							</div>
						</div>
						<div className="banner-section-content-featured col-span-1 order-1 md:order-2 lg:col-span-2 col-start-1 flex flex-col gap-3 md:gap-4">
							<SectionTitle title="featured"/>
							{featured && <CardFeatured data={featured}/>}
							 <Link href="/categories/featured" className={`self-end capitalize px-3 py-5 text-[1rem] ${buttonVariants()}`}>
								read more...
							</Link>
						</div>
						<div className="banner-section-content-authors-pick col-span-1 order-3 flex flex-col gap-3 md:gap-4">
							<SectionTitle title="author's pick..."/>
							<div className="banner-section-content-authors-pick-cards flex flex-col gap-8 md:gap-3">
								{
									authorsPick && authorsPick.map((blog) =>(
										<CardText key={blog.id} data={blog}/>
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
							{exclusiveMain && <CardRowLarge data={exclusiveMain} />}
						</div>
						<div className="exclusive-section-content-cards flex-col flex md:flex-row gap-8 md:gap-3">
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
				categories && categories.map((category) => (
					<section key={category.id} id="category-section" className="section-base-style">
						<div className="category-section-container container-base-style">
							<div className="category-section-content flex flex-col gap-2 md:gap-6">
								<SectionTitle title={category.title}/>
								<div className="category-section-content-card">
									<EmblaCarousel data={blogs}/>
								</div>
								<Link href={`/categories/${category.slug}`} className={`self-end capitalize px-3 py-5 text-[1rem] ${buttonVariants()}`}>
									{category.title}...
								</Link>
							</div>
						</div>
					</section>
				))
			}
			<section id="newsletter-section" className="section-base-style">
				<div className="newsletter-section-container container-base-style flex flex-col gap-6 md:gap-8">
					<SectionTitle title="newsletter"/>
					<div className="newsletter-section-content flex flex-col md:flex-row gap-6 md:gap-8">
						<figure className="newsletter-section-content-img flex flex-1">
							<img className="w-full h-full object-cover" src="/images/newsletter.svg" alt="" />
						</figure>
						<div className="newsletter-section-content-text flex flex-1 flex-col gap-8 justify-center items-center p-4">
							<div className="newsletter-section-content-text-subscribe flex flex-col gap-6 justify-center items-center">
								<p className="text-[1.3rem] capitalize font-medium">subscribe to our</p>
								<div className="newsletter-section-content-text-newsletter -skew-x-12">
									<span className="text-[2rem] text-card-featured-foreground font-bold uppercase px-4 py-2 bg-primary">newsletter</span>
								</div>
								<p className="text-[1.1rem] capitalize font-normal">for latest blogs and updates</p>
							</div>
							<div className="newsletter-section-content-form flex flex-col gap-4">
								<NewsletterForm/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}