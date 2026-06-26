import Card from '@/components/shared/card';
import FeaturedCard from '@/components/shared/featured-card';
import SectionTitle from '@/components/shared/section-title';
import ThumbnailCard from '@/components/shared/thumbnail-card';
import blogs from '@/data/blogs';

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
					<div className="banner-content grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
						<div className="banner-featured cold-span-1 lg:col-span-2 flex flex-col gap-3 md:gap-4">
							<SectionTitle title="featured"/>
							<FeaturedCard/>
						</div>
						<div className="banner-trending col-span-1 flex flex-col gap-3 md:gap-4">
							<SectionTitle title="trending"/>
							<div className="banner-trending-content flex flex-col gap-8 md:gap-3">
								{
									trending.map((blog) =>(
										<ThumbnailCard key={blog.id} data={blog}/>
									))
								}
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="section-todays-pick section-base-style">
				<div className="todays-pick-container container-base-style">
					<div className="todays-pick-content flex flex-col gap-3 md:gap-4">
						<SectionTitle title="today's pick"/>
						<div className="todays-pick-card-conatiner">
							<Card/>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}