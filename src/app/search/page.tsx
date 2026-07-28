import Navbar from "@/components/shared/navbar"
import Footer from "@/components/shared/footer"
import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel,  SelectTrigger, SelectValue } from "@/components/ui/select"
import blogs from "@/data/blogs"
import categories from "@/data/category"
import { SearchIcon } from "lucide-react"

export default function Search() {
    return (
        <>  
            <Navbar/>
            <main>
                <section className="search-page-section section-base-style">
                    <div className="search-page-section-container container-base-style">
                        <div className="search-page-section-content w-full flex flex-col gap-10">
                            <div className="search-page-section-inputs flex flex-col sm:flex-row gap-4 sm:gap-6 w-full items-center ">
                                <div className="search-page-section-inputs-text relative w-full flex flex-1 sm:flex-2 lg:flex-3">
                                    <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"/>
                                    <Input id="input-button-group" className="pl-9" placeholder="Search blogs..."/>
                                </div>
                                <div className="search-page-section-inputs-select w-full flex flex-1 items-center">
                                    <Select defaultValue="all">
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
                            <div className="search-page-section-blogs">
                                blogs
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}