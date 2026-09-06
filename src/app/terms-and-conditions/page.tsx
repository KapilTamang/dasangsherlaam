import Image from "next/image";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import { buttonVariants } from "@/components/ui/button";
import NewsLetterForm from "@/components/features/newsletter/newsletter-form";

export default function TermsAndConditions() {
    return(
        <>
            <Navbar/>
            <main>
                Terms and conditions
            </main>
            <Footer/>
        </>
    )
} 