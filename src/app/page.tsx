import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button';
import EmblaCarousel from '@/components/shared/embla-carousel';
import CardFeatured from '@/components/shared/card-featured';
import SectionTitle from '@/components/shared/section-title';
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
			<section className="section-banner section-base-style bg-accent">
				<div className="section-banner-conatiner container-base-style">
					<div className="section-banner-content grid grid-cols-1 lg:grid-cols-4  gap-8">
						<div className="section-banner-content-trending col-span-1 md:col-span-1 order-2 md:order-1 flex flex-col gap-3 md:gap-4">
							<SectionTitle title="trending..."/>
							<div className="section-banner-content-trending-cards flex flex-col gap-8 md:gap-3">
								{
									trending && trending.map((blog) =>(
										<CardRow key={blog.id} data={blog} type="trending"/>
									))
								}
							</div>
						</div>
						<div className="section-banner-content-featured col-span-1 order-1 md:order-2 lg:col-span-2 col-start-1 flex flex-col gap-3 md:gap-4">
							<SectionTitle title="featured"/>
							{featured && <CardFeatured data={featured}/>}
							 <Link href="/categories/featured" className={`self-end capitalize px-3 py-5 text-[1rem] ${buttonVariants()}`}>
								read more...
							</Link>
						</div>
						<div className="section-banner-content-authors-pick col-span-1 order-3 flex flex-col gap-3 md:gap-4">
							<SectionTitle title="author's pick..."/>
							<div className="section-banner-content-authors-pick-cards flex flex-col gap-8 md:gap-3">
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
			<section className="section-exclusive section-base-style">
				<div className="section-exclusive-container container-base-style flex flex-col gap-3 md:gap-4">
					<div className="section-exclusive-title">
						<SectionTitle title="exclusive"/>
					</div>
					<div className="section-exclusive-content flex flex-col gap-8">
						<div className="section-exclusive-content-main">
							{exclusiveMain && <CardRowLarge data={exclusiveMain} />}
						</div>
						<div className="section-exclusive-content-cards flex-col flex md:flex-row gap-8 md:gap-3">
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
					<section key={category.id} className="section-category section-base-style">
						<div className="section-category-container container-base-style">
							<div className="section-category-content flex flex-col gap-2 md:gap-6">
								<SectionTitle title={category.title}/>
								<div className="section-category-content-card">
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
			<section className="section-newsletter section-base-style">
				<div className="section-newsletter-container container-base-style flex flex-col gap-6 md:gap-8">
					<SectionTitle title="newsletter"/>
					<div className="section-newsletter-content flex flex-col md:flex-row gap-6 md:gap-8">
						<div className="section-newsletter-content-img flex flex-1">
							<img src="/images/newsletter.svg" alt="" />
						</div>
						<div className="section-newsletter-content-form flex flex-1 justify-center items-center p-4">
							<p>
								lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
							</p>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}