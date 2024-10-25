'use client'
import Navbar from "@/components/createCohort/navbar";
import Hero from "@/components/createCohort/hero";
import Footer from "@/components/createCohort/footer";
import ViewCohort from "@/components/curentCohort/viewCohort";

export default function CurrentCohort(){
    return (
        <div>
            <div className={'flex flex-col justify-between h-[100vh] md:h-[100vh] bg-white'}>
                <div>
                    <Navbar props={1}/>
                    <Hero/>
                    <ViewCohort/>
                </div>
                <Footer/>
            </div>
        </div>
    )
}