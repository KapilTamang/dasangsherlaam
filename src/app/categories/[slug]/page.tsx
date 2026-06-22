
export default async function Category({params,} : {params: Promise<{slug: string}>}) {
    const {slug} = await params;
    return (
        <div className="px-[8%] md:px-[10%] lg:px-[15%] py-[20px] md:py-[40px]">
            <main>
                This is {slug} Page.
            </main>
        </div>
    )
}