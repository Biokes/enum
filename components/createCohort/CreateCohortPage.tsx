'use client'
import Navbar from '@/components/createCohort/navbar'
import Hero from "@/components/createCohort/hero";
import Cohorts from "@/components/createCohort/cohorts";
import Footer from "@/components/createCohort/footer";
export default function CreateCohortPage(){
    return (
        <div className={'flex flex-col justify-between bg-white min-h-[100vh]'}>
            <div>
                <Navbar props={1}/>
                <Hero/>
                <Cohorts/>
            </div>
           <Footer/>
        </div>
    )
}