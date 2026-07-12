import blogs from "@/data/blogs";
import Newsletter from "@/components/shared/newsletter";
import Footer from '@/components/shared/footer';

export default async function Blog({params,} : {params: Promise<{slug: string}>}) {
    const {slug} = await params;

    const blog = blogs.find((blog) => blog.slug === slug);

    return (
        <main>
            {
                blog ?  
                    (<section className="section-blog section-base-style">
                        <div className="section-blog-container container-base-style">
                            {blog.title}
                        </div>
                    </section>)
                : (
                    <section className="section-blog section-base-style">
                        <div className="section-blog-container container-base-style">
                            <h1>Resource Not Found.</h1>
                        </div>
                    </section>)
            }
            <Newsletter/>
            <Footer/>
        </main>
    )
}