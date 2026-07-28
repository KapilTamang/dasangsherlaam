import Navbar from "@/components/shared/navbar"
import Footer from "@/components/shared/footer"
import { Button } from "@/components/ui/button"
import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import blogs from "@/data/blogs"

export default function Search() {
    return (
        <>  <Navbar/>
            <main>
                <section className="search-page-section section-base-style">
                    <div className="search-page-section-container container-base-style">
                        <div className="search-page-section-content flex flex-col">
                            <div className="search-page-section-input flex w-full justify-start">
                             <Field className="w-[60%]" orientation="horizontal">
                                <Input type="search" placeholder="Search..." />
                                <Button>Search</Button>
                            </Field>
                        </div>
                        </div>
                    </div>
                </section>
                <div className="section footer-section">
                    <Footer/>
                </div>
            </main>
        </>
    )
}