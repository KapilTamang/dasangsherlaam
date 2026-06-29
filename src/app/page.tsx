import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button';
import EmblaCarousel from '@/components/shared/embla-carousel';
import FeaturedCard from '@/components/shared/featured-card';
import SectionTitle from '@/components/shared/section-title';
import CardRow from '@/components/shared/card-row';
import CardText from '@/components/shared/card-text'
import blogs from '@/data/blogs';
import categories from '@/data/category';

export default function Home() {

	//Fetching dummy data..
	const dummyBlogs = blogs;
	const trending = dummyBlogs.filter((blog) => blog.category !== 'featured').slice(0,6);
	//Finding featured blog
	const featured = dummyBlogs.find((blog) => blog.category == 'featured');

	return (
		<main>
			<section className="section-banner section-base-style bg-accent">
				<div className="banner-conatiner container-base-style">
					<div className="banner-content grid grid-cols-1 lg:grid-cols-4  gap-8">
						<div className="banner-trending col-span-1 md:col-span-1 order-2 md:order-1 flex flex-col gap-3 md:gap-4">
							<SectionTitle title="trending..."/>
							<div className="banner-trending-content flex flex-col gap-8 md:gap-3">
								{
									trending && trending.map((blog) =>(
										<CardRow key={blog.id} data={blog}/>
									))
								}
							</div>
						</div>
						<div className="banner-featured cold-span-1 order-1 md:order-2 lg:col-span-2 col-start-1 flex flex-col gap-3 md:gap-4">
							<SectionTitle title="featured"/>
							{featured && <FeaturedCard data={featured}/>}
							 <Link href="/categories/featured" className={`self-end capitalize px-3 py-5 text-[1rem] ${buttonVariants()}`}>
								read more...
							</Link>
						</div>
						<div className="banner-trending col-span-1 order-3 flex flex-col gap-3 md:gap-4">
							<SectionTitle title="author's pick..."/>
							<div className="banner-trending-content flex flex-col gap-8 md:gap-3">
								{
									trending && trending.map((blog) =>(
										<CardText key={blog.id} data={blog}/>
									))
								}
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Home page section for diffrerent categories */}
			{
				categories && categories.map((category) => (
					<section key={category.id} className="section-base-style">
						<div className="container-base-style">
							<div className="flex flex-col gap-3 md:gap-4">
								<SectionTitle title={category.title}/>
								<div className="todays-pick-card-conatiner">
									<EmblaCarousel data={dummyBlogs}/>
								</div>
								<Link href={`/categories/${category.slug}`} className={`self-end capitalize px-3 py-5 text-[1rem] ${buttonVariants()}`}>
									{category.title}...
								</Link>
							</div>
						</div>
					</section>
				))
			}
		</main>
	);
}