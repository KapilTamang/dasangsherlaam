"use client"

import React from "react"
import Navbar from "@/components/shared/navbar"
import Footer from "@/components/shared/footer"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel,  SelectTrigger, SelectValue } from "@/components/ui/select"
import blogs from "@/data/blogs"
import categories from "@/data/category"
import { SearchIcon } from "lucide-react"
import Card from "@/components/shared/card/card-column"
import CardColumnSkeleton from "@/components/shared/skeleton/card-column-skeleton"
import NoData from "@/components/ui/no-data"

export default function Search() {
    //Define loading state
    const [isLoading, setIsLoading] = React.useState(true);

    //Search result blogs
    const [resultBlogs, setResultBlogs] = React.useState<Array<any>>([])

    //Initial setup on page render
    React.useEffect(() => {
        const timer = setTimeout(() => {
            const initialBlogs = blogs.sort(() => Math.random() - 0.5).slice(0,4);
            setResultBlogs(initialBlogs)
            setIsLoading(false);
        }, 2000);
       return() => clearTimeout(timer)
    }, []);

    return (
        <>  
            <Navbar/>
            <main>
                <section className="search-page-section section-base-style">
                    <div className="search-page-section-container container-base-style">
                        <div className="search-page-section-content w-full flex flex-col gap-10 md:gap-12 lg:gap-16">
                            <div className="search-page-section-inputs flex flex-col sm:flex-row gap-4 sm:gap-6 w-full items-center ">
                                <div className="search-page-section-inputs-text relative w-full flex flex-1 sm:flex-2 lg:flex-3">
                                    <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"/>
                                    <Input id="input-button-group" className="pl-9" placeholder="Search blogs..." disabled={isLoading}/>
                                </div>
                                <div className="search-page-section-inputs-select w-full flex flex-1 items-center">
                                    <Select defaultValue="all" disabled={isLoading}>
                                        <SelectTrigger className="w-full sm:w-50 md:w-64">
                                            <SelectValue/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>categories</SelectLabel>
                                                <SelectItem value="all" defaultChecked>all categories</SelectItem>
                                                {
                                                    categories.map((category) => (
                                                        <SelectItem key={category.id} value={category.title}>
                                                            {category.title}
                                                        </SelectItem>
                                                    ))
                                                }
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            <div className="search-page-section-blogs flex flex-col gap-4">
                                {
                                    isLoading ? 
                                    (
                                        <div className="section-related-blogs-content-card w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-y-10">
                                            <CardColumnSkeleton cardNumber={4} cardType="grid"/>
                                        </div>
                                    ):
                                    (
                                        resultBlogs && resultBlogs.length > 0 ? 
                                        (
                                            <div className="section-related-blogs-content-card w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-y-10">
                                                {
                                                    resultBlogs.map((blog) => (
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
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}