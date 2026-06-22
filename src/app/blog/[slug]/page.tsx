
export default async function Blog({params,} : {params: Promise<{slug: string}>}) {
    const {slug} = await params;
    return (
        <div className="global-padding">
            <main>
                This is {slug} Page.
            </main>
        </div>
    )
}