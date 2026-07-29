"use client"

import React, { ChangeEvent } from "react"
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
    const [isLoading, setIsLoading] = React.useState<boolean>(true);
    //Define searcg loading state
    const [isSearching, setIsSearching] = React.useState<boolean>(false);
    //Search result blogs
    const [resultBlogs, setResultBlogs] = React.useState<Array<any>>([]);

    //Define the structural shape of form state]
    interface FormValues {
        query: string;
        category: string;
    }

    //Define state for form values
    const [formValues, setFormValues] = React.useState<FormValues>({
        query: '',
        category: 'all'
    });

    //Initial setup on page render
    React.useEffect(() => {
        const timer = setTimeout(() => {
            //Get random blogs on page load
            setResultBlogs(getRandomBLogs(blogs))
            setIsLoading(false);
        }, 2000);
       return() => clearTimeout(timer)
    }, []);

    //Tracking input changes with useEffect
    React.useEffect(() => {
        setIsSearching(true)
        const timer = setTimeout(() => {
            //Filter blogs based on search query and category
            const filtered = blogs.filter((blog) => {
                //match input query with blogs title
                const matchesQuery = blog.title
                .toLowerCase()
                .includes(formValues.query.toLowerCase());
                //match input category with blog category
                const matchesCategory = formValues.category === 'all' || formValues.category === blog.category;

                return matchesQuery && matchesCategory;
            });

            //Check if searching reaches initial state of page loading
            if(formValues.query === "")
            {
                setResultBlogs(getRandomBLogs(blogs));
            }
            else{
                setResultBlogs(filtered);  
            }
            
            //set search loading state
            setIsSearching(false)
        }, 2000)
        return () => clearTimeout(timer);
    }, [formValues]);

    //helper function to filter random blogs for inital page loading state
    const getRandomBLogs = (blogs: any[]) => {
        return blogs.sort(() => Math.random()- 0.5).slice(0,4);
    }

    //Callback function to handle input change for search query
    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormValues((prev) => ({
            ...prev,
            [name]: value,
        }));
        //set select input category value to default if search input is empty
        if(value === "") {
            setFormValues({
                query: "",
                category: "all"
            })
        }
    };

    //Callback function to hand select input change for category
    const handleCategoryChange = (value: string) => {
        setFormValues((prev) => ({
            ...prev,
            category: value
        }));
    };

    return (
        <>  
            <Navbar/>
            <main>
                <section className="search-page-section section-base-style">
                    <div className="search-page-section-container container-base-style">
                        <div className="search-page-section-content w-full flex flex-col gap-8 md:gap-12 lg:gap-16">
                            <div className="search-page-section-inputs flex flex-col sm:flex-row gap-4 sm:gap-6 w-full items-center ">
                                <div className="search-page-section-inputs-text relative w-full flex flex-1 sm:flex-2 lg:flex-3">
                                    <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"/>
                                    <Input className="pl-9" placeholder="Search blogs..." name="query" value={formValues.query} onChange={handleInputChange} disabled={isLoading}/>
                                </div>
                                <div className="search-page-section-inputs-select w-full flex flex-1 items-center">
                                    <Select name="category" value={formValues.category} onValueChange={handleCategoryChange} disabled={isLoading || formValues.query === ""}>
                                        <SelectTrigger className="w-full sm:w-50 md:w-64">
                                            <SelectValue/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>categories</SelectLabel>
                                                <SelectItem value="all">all categories</SelectItem>
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
                            <div className="search-page-section-blogs flex flex-col gap-4 md:gap-6">
                                {
                                    isLoading || isSearching ? 
                                    (
                                        <div className="section-related-blogs-content-card w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-y-10">
                                            <CardColumnSkeleton cardNumber={4} cardType="grid"/>
                                        </div>
                                    ):
                                    (
                                        resultBlogs && resultBlogs.length > 0 ? 
                                        (
                                            <>
                                                <div className="flex justify-end items-center gap-2 text-[1rem] lg:text-[1rem] capitalize">
                                                    {   
                                                        formValues.query === "" && formValues.category === 'all' ?
                                                        (
                                                            'random blogs'
                                                        ):
                                                        (
                                                            'searched results:'
                                                        )
                                                       
                                                    } 
                                                    <span className="font-extrabold bg-accent px-2 py-0.5 rounded-sm">
                                                        {resultBlogs.length}
                                                    </span>
                                                </div>
                                                <div className="section-related-blogs-content-card w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-y-10">
                                                    {
                                                        resultBlogs.map((blog) => (
                                                            <Card key={blog.id} data={blog} width="auto"/>
                                                        ))
                                                    }
                                                </div>
                                            </>
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