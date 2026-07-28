import Navbar from "@/components/shared/navbar"
import Footer from "@/components/shared/footer"
import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import blogs from "@/data/blogs"

export default function Search() {
    return (
        <>  
            <Navbar/>
            <main>
                <section className="search-page-section section-base-style">
                    <div className="search-page-section-container container-base-style">
                        <div className="search-page-section-content w-full flex flex-col gap-10">
                            <div className="search-page-section-inputs flex gap-12 w-full items-center ">
                                <div className="search-page-section-inputs-text flex flex-3">
                                    <Field>
                                        <Input id="input-button-group" placeholder="Type to search blogs.."/>
                                    </Field>
                                </div>
                                <div className="search-page-section-inputs-select flex flex-1 items-center">
                                    
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