'use client'
import Navbar from '@/components/createCohort/navbar'
import Hero from "@/components/createCohort/hero";
import Cohorts from "@/components/createCohort/cohorts";
import Footer from "@/components/createCohort/footer";
import ViewCohort from "@/components/curentCohort/viewCohort";
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {RootState} from "@/redux/store";
import {setHeroText} from "@/redux/UserSlice";

export default function CreateCohortPage(){
    const clickedCohortIndex= useSelector((state:RootState)=> state.user.clickedCohortIndex)
    const dispatch = useDispatch()
    const heroText = useSelector((state:RootState)=>state.user.heroText)
    const [text, setText] = useState<string>('')
    const [index, setIndex] = useState<number>(clickedCohortIndex);
    useEffect(()=>{
        setText(heroText)
        setIndex(clickedCohortIndex)
        setTimeout(() => {
            dispatch(setHeroText(''))
            setText('');
        }, 5000);
    },[clickedCohortIndex,heroText])
    const createdCohortsCount :number = useSelector((state:RootState)=>state.cohorts.length)
    const shouldShowCohorts = index === -1 || createdCohortsCount === 0;
    return (
        <div className={'flex flex-col justify-between bg-white min-h-[100vh]'}>
            <div>
                <Navbar props={1}/>
                <Hero/>
                <div className={text?'flex justify-center items-center h-[30px] w-full bg-green-700 ':'hidden'}>
                    <p className={'text-sm text-white'}>{text}</p>
                </div>
                {shouldShowCohorts ? <Cohorts /> : <ViewCohort />}
            </div>
           <Footer/>
        </div>
    )
}