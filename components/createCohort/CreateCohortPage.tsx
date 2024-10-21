'use client'
import Navbar from '@/components/createCohort/navbar'
import CreateCohortPageHeroSection from '@/components/createCohort/hero'
export default function CreateCohortPage(){
    return (
        <div>
            <Navbar props={1}/>
            <CreateCohortPageHeroSection/>
        </div>
    )
}