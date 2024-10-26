'use client'
import {useSelector,useDispatch} from "react-redux";
import {RootState} from "@/redux/store";
import {Cohort, Course,CohortRigthProps} from "@/interfaces/interfaces";
import Image from 'next/image'
import {Button} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import React, {ReactNode, useEffect, useRef, useState} from "react";
import styles from "@/styles/index.module.css";
import Image1 from '@/assets/unsplash_4_hFxTsmaO4.png'
import Image2 from '@/assets/unsplash_BbSBf5uv50A.png'
import Image3 from '@/assets/unsplash_fIq0tET6llw.png'
import Image4 from '@/assets/unsplash_gbNuQfm9hTE.png'
import Image5 from '@/assets/unsplash_2EdIX-O2lkI.png'
import Image6 from '@/assets/unsplash_2EdIX-O2lkI (1).png'
import Image7 from '@/assets/unsplash_763-mBawsfg.png'
import Image8 from '@/assets/unsplash__7LbC5J-jw4.png'
import RemoveIcon from '@mui/icons-material/Remove';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import VideocamIcon from '@mui/icons-material/Videocam';
import FeedIcon from '@mui/icons-material/Feed';
import MicNoneIcon from '@mui/icons-material/MicNone';
import AddIcon from '@mui/icons-material/Add';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HelpCircle from '@/assets/help-circle.png';
import Heart from '@/assets/heart.png';
import Reply from '@/assets/message-circle.png'
import {setClickedCohortIndex} from "@/redux/UserSlice";

export default  function ViewCohort(){
    const selector = useSelector((rootState:RootState)=>rootState.user)
    const cohorts = useSelector((state:RootState)=> state.cohorts)
    const selectedCohort = selector.clickedCohortIndex
    const smallTextStyles = 'text-xs font-thin dmSans';
    const dispatch = useDispatch()
    const currentCohort: Cohort = useSelector((rootState: RootState) => rootState.user.clickedCohort);
    const [popUp, setPopUp] = useState<boolean>(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [style, setStyles] = useState<string>('')
    const popupRef = useRef<HTMLDivElement>(null);

    useEffect(() =>{
        const handleClickOutside = (event: MouseEvent) => {
            if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
                setPopUp(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    const handleClick = () => {
        dispatch(setClickedCohortIndex(-1))
    }
    const getCurrentImage = (cohort: Cohort) => {
        if (typeof cohort.avatar === "string") {
            return cohorts[selectedCohort].avatar
        } else {
            return cohort.avatar.src;
        }
    }
    const PopUp = () => (
        <div className={`${styles.moreActionsPopUp} ${styles}`} ref={popupRef}>
            <p onClick={()=>{setStyles('hidden')}}>Manage polls</p>
            <p>view Learners</p>
            <p>Schedule an Event </p>
            <p>Make an Announcement</p>
        </div>
    );
    const Instructors =()=>(
        <div className={'h-[356px] flex flex-col justify-evenly pr-[10px]'}>
            <p className={`text-bold text-lg ${styles.dmSans} my-[10px]`}>2 Instructors</p>
            <div className={'flex flex-col justify-evenly items-center gap-[10px]'}>
                <section className={'flex flex-col border rounded-md px-[10px] py-[5px] gap-[10px] justify-center mr-[2px]'}>
                    <section className={'flex gap-[10px]'}>
                        <Image src={Image5} alt={''} width={30} height={30}
                               className='object-cover object-center rounded-lg'/>
                        <section className={'flex flex-col justify-center'}>
                            <p className={`${styles.dmSans} text-lg font-bold`}>Olamide Adebisi, Ph.D. </p>
                            <p className={smallTextStyles}>Henley Business School • Head Professor </p>
                        </section>
                    </section>
                    <div className={`font-thin dmSans h-[60px] text-sm`}>
                        Olamide taught Donald Trump in Kindergarten. She has 25 years
                        experience teaching presidents design related courses.
                        She has a PhD in Education management and is a member of
                        faculty at the Henley Business School.
                    </div>
                </section>
                <section className={'flex flex-col border rounded-md px-[10px] py-[5px] gap-[10px] justify-center mr-[2px]'}>
                    <section className={'flex gap-[10px]'}>
                        <Image src={Image6} alt={''} width={30} height={30}
                               className='object-cover object-center rounded'/>
                        <section className={'flex flex-col justify-center'}>
                            <p className={`${styles.dmSans} text-lg font-bold`}>Morire Johnson Alausa</p>
                            <p className={smallTextStyles}>Henley Business School • Chief Designer</p>
                        </section>
                    </section>
                    <div className={` dmSans h-[70px] text-xs`}>
                        Morire taught Donald Trump in Kindergarten. She has 25
                        years experience teaching presidents design related courses.
                        She has a PhD in Education management and is a member of
                        faculty at the Henley Business School.Morire taught Donald
                        Trump in Kindergarten. She has 25 years experience teaching
                        presidents design related courses. She has a PhD in Education
                        management and is a member of faculty at the Henley Business School.
                    </div>
                </section>
            </div>
        </div>
    )
    const moreActions = () => {
        setPopUp(!popUp)
    }
    const InnerPopUp=()=> (
        <div className={`${styles.moreActionsPopUp} ${style===''?'hidden':'flex'}`} ref={popupRef}>
            <p>Publish Poll</p>
            <p>Schedule a quiz</p>
            <p>Schedule an Event </p>
            <p>Make an Announcement</p>
            <p>Share a resource</p>
        </div>
    )
    const Top= ()=> (
        <div className={'flex flex-col md:mb-[10px]'}>
            <div className={'md:w-[64px] flex justify-center gap-[5px] items-center md:h-[24px] md:mt-[10px] ml-[60px]'} onClick={handleClick}>
                <ArrowBackIcon sx={{width:'15px',height:'15px'}}/>
                <p>Back</p>
            </div>
            <div className={'flex md:h-[80px] justify-between items-center md:px-[60px]'}>
                <section className={'flex gap-[10px]'}>
                    <Image src={getCurrentImage(currentCohort)}
                        width={59} height={59} className='object-cover object-center rounded-md' alt={''}/>
                    <div>
                        <p className={'md:h-[31px] w-[50px] text-black overflow-ellipsis text-bold capitalize'}
                           style={{fontFamily: 'Dm sans'}}>
                            {cohorts[selectedCohort].name}
                        </p>
                        <p className={'overflow-ellipsis w-[100px]'}>{cohorts[selectedCohort].program}</p>
                    </div>
                </section>
                <div >
                    <Button sx={{textTransform: 'none', fontWeight: 'thin',marginRight:'10px',
                        fontSize: 'small', background:'#008EEF', color:'#ffffff'
                    }} variant={'contained'}>
                        Add Learners
                    </Button>
                    <Button endIcon={<MoreVertIcon/>} variant={'outlined'} onClick={moreActions}
                            sx={{
                                color: '#008EEF', background: '#ffffff', height: '40px', overflow: 'none',
                                fontWeight: 'thin', fontSize: 'small', textTransform: 'none', position: 'relative'
                            }}>
                        more actions
                    </Button>
                    {popUp && (<PopUp/>)}
                    {popUp && (<InnerPopUp/>)}
                </div>
            </div>

        </div>
    )
    const [component, setComponent] = useState<ReactNode>(<Instructors/>)
    const courses:Course[] = [
        {name:'Design Thinking',image:Image1 ,modules:12},
        {name:'Java',image:Image2 ,modules:8},
        {name:'UX Writer',image:Image3 ,modules:9},
        {name:'Business Management & Africa studies',image:Image4 ,modules:10},
        {name:'Design Thinking',image:Image1 ,modules:12},
        {name:'Java',image:Image2 ,modules:8},
        {name:'UX Writer',image:Image3 ,modules:9},
        {name:'Business Management & Africa studies',image:Image4 ,modules:10},
        {name:'Java',image:Image2 ,modules:10},

    ]
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };
    const Left=()=>(
        <div className={'gap-[20px] flex flex-col items-center'}>
            <input
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-[90%] h-[40px] text-base rounded border border-gray-300 mt-[10px]"
            />
            <div className={'md:border md:border-gray-300 md:rounded md:w-[450px] mx-[20px] flex flex-col'}>
                <p className={'capitalize text-semibold p-[10px_0_5px_20px]'}>9 courses</p>
                <div className={'md:max-h-[500px] lg:max-h-[300px] overflow-y-auto border-1 rounded-md border-gray-200 p-[20px] md:mb-[10px]'}>
                    {
                        courses.map((course, index) => (
                            <div key={index} className={'border-[1px] flex md:gap-[20px] shadow-sm p-[10px] hover:border-blue-400'}>
                                <Image src={course.image.src} alt={''} width={59} height={59}
                                       className='object-contain object-center rounded-md'/>
                                <section className={'flex flex-col justify-center'}>
                                    <p className={'ThickDmSansFont overflow-ellipsis md:max-w-[300px]'}>{course.name}</p>
                                    <p className={'text-sm font-semibold'}>{course.modules} modules</p>
                                </section>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>

    )
    const CourseOverview = () => (
        <section className={'md:pl-[30px] flex md:flex-col md:justify-around'}>
            <div className={'my-[20px] w-full'}>
                <p className={'font-bold my-[20px]'}>Course Overview</p>
                <p className={'text-sm '}>This course examines important issues in corporate finance
                    from the perspectives of financial managers who make important
                    investment decisions and financing decisions. This course
                    incorporates an element of financial modelling in teaching
                    and assessments.
                </p>
            </div>
            <div className={styles.learningOutcome}>
                <p className={'font-bold my-[10px]'}>Learning Outcome</p>
                <p className={'font-thin'}>What you are expected to know after this course</p>
                <li>Understand various forms of market imperfections and their implications for financial managers</li>
                <li>Understand various forms of market imperfections and their implications for financial managers</li>
                <li>Generate a valuation range for a project or a company</li>
                <li>Apply option theories to solve corporate finance problems</li>
                <li>Use Excel to conduct a simple DCF analysis, regression analysis and sensitivity analysis</li>
            </div>
        </section>

    )
    const Modules =()=>(
        <div className={'flex '}>
            <section className={styles.modules}>
                <p>Module 1</p>
                <p>Extra module</p>
                <p>Module 2</p>
                <p>Module 3</p>
                <p>Module 4</p>
                <p>Module 5</p>
                <p>Module 6</p>
                <p>Module 7</p>
                <p>Module 8</p>
                <p>Module 9</p>
                <p>Module 10</p>
            </section>
            <section className={styles.modulesSection2}>
                <div className={'flex justify-between items-center px-[20px]'}>
                    <p className={'hover:text-blue-300 text-sm uppercase'}>Session 1</p>
                    <RemoveIcon sx={{'& hover':{color: '#008eef'}}}/>
                </div>
                <div className={styles.articles}>
                    <section>
                        <div>
                            <p>Introduction to module</p>
                            <article>
                                <AccessTimeIcon sx={{'& hover': {color: '#008eef'}}}/>
                                <p>3 mins</p>
                            </article>
                        </div>
                        <VideocamIcon sx={{'& hover': {color:'#008eef'}}}/>
                    </section>
                    <section>
                        <div>
                            <p>Learning content 1</p>
                            <article>
                                <AccessTimeIcon sx={{'& hover': {color:'#008eef'}}}/>
                                <p>3 mins</p>
                            </article>
                        </div>
                        <FeedIcon sx={{'& hover': {color:'#008eef'}}}/>
                    </section>
                    <section>
                        <div>
                            <p>Learning content 2</p>
                            <article>
                                <AccessTimeIcon sx={{'& hover': {color:'#008eef'}}}/>
                                <p>3 mins</p>
                            </article>
                        </div>
                        <MicNoneIcon sx={{'& hover': {color:'#008eef'}}}/>
                    </section>
                    <div>
                        <p className={'dateCreated'}>Section 2</p>
                        <AddIcon sx={{'& hover': {color:'#008eef'}}}/>
                    </div>
                    <div>
                        <p className={'dateCreated'}>Section 2</p>
                        <AddIcon sx={{'& hover': {color:'#008eef'}}}/>
                    </div>
                    <div className={'dateCreated'}>
                        <p>Section 2</p>
                        <AddIcon sx={{'& hover': {color:'#008eef'}}}/>
                    </div>
                    <div className={'dateCreated'}>
                        <p>Section 2</p>
                        <AddIcon sx={{'& hover': {color:'#008eef'}}}/>
                    </div>
                </div>
            </section>
        </div>
    )
    const Forum =()=>(
        <section>
            <div>
                <Button variant={'outlined'} sx={{
                    "&:hover": {
                        borderColor: '#008EEF',
                    },
                    textTransform: 'none',
                    padding: '10px',
                    borderRadius: '10px',
                    border: '1px solid #656464'
                }}>All </Button>
                <Button variant={'outlined'} sx={{
                    "&:hover": {
                        borderColor: '#008EEF',
                    },
                    textTransform: 'none',
                    padding: '10px',
                    borderRadius: '10px',
                    border: '1px solid #656464'
                }}>Post </Button>
                <Button variant={'outlined'} sx={{
                    "&:hover": {
                        borderColor: '#008EEF',
                    },
                    textTransform: 'none',
                    padding: '10px',
                    borderRadius: '10px',
                    border: '1px solid #656464'
                }}>Questions </Button>
            </div>
            <div>
                <section>
                    <div>
                        <Image src={Image7} alt={''} height={59} width={59}
                               className='object-cover object-center rounded-lg'/>
                        <p>Chukwudi Brutus</p>
                    </div>
                    <div>
                        <div>
                            <Image src={HelpCircle} alt={''} width={16} height={16}/>
                            <p className={'h-[16px]'}>What are the best tools or methods for the empathize phase ?</p>
                        </div>
                        <p>I really like how engaging this classroom is.
                            The instructors have made all the necessary resources available
                            and we just have to go through them.
                        </p>
                        <div>
                            <p>Dec. 12, 2021. 9am</p>
                        </div>
                        <footer>
                            <div className={'flex gap-[15px]'}>
                                <div className={'flex gap-[12px]'}>
                                    <Image src={Heart} alt={''} height={12} width={12}/>
                                    <p className={'dateCreated text-sm text-blue-950'}>12 Likes</p>
                                </div>
                                <p className={'dateCreated text-sm text-blue-950'}>24 Comments</p>
                            </div>
                            <div className={'flex gap-[10px]'}>
                                <Image src={Reply} alt={''} height={12} width={12}/>
                                <p className={'text-gray-400 dmSans'}>Reply</p>
                            </div>
                        </footer>
                    </div>
                </section>
                <section>
                    <div>
                        <Image src={Image8} alt={''} height={59} width={59}
                               className='object-cover object-center rounded-lg'/>
                        <p>Chukwudi Brutus</p>
                    </div>
                    <div>
                        <div>
                            <Image src={HelpCircle} alt={''} width={16} height={16}/>
                            <p className={'h-[16px]'}>Can Affinity Diagramming be used during the Ideate Phase?</p>
                        </div>
                        <p>
                            I really like how engaging this classroom is.
                            The instructors have made all the necessary resources
                            available and we just have to go through them.
                        </p>
                        <div>
                            <p>Dec. 12, 2021. 9am</p>
                        </div>
                        <footer>
                            <div className={'flex gap-[15px]'}>
                                <div className={'flex gap-[12px]'}>
                                    <Image src={Heart} alt={''} height={12} width={12}/>
                                    <p className={'dateCreated text-sm text-blue-950'}>16 Likes</p>
                                </div>
                                <p className={'dateCreated text-sm text-blue-950'}>4 Comments</p>
                            </div>
                            <div className={'flex gap-[10px]'}>
                                <Image src={Reply} alt={''} height={12} width={12}/>
                                <p className={'text-gray-400 dmSans'}>Reply</p>
                            </div>
                        </footer>
                    </div>
                </section>

            </div>
        </section>

    )
    const RightSubDivisions: CohortRigthProps[] = [
        {text: 'instructors', component: <Instructors/>},
        {text: 'Modules', component: <Modules/>},
        {text: 'Course Information', component: <CourseOverview/>},
        {text: 'Forum', component: <Forum/>}
    ]
    const [current , setCurrent] = useState<number>(0);
    const Right = () => (
            <section className={'border border-gray-300 rounded-md md:w-[600px] lg:w-[800px]'}>
                <div className={styles.listDiv}>
                    {RightSubDivisions.map((data, index) => (
                            <p key={index} onClick={() => {
                                setComponent(data.component);
                                setCurrent(index)
                            }}
                               className={`capitalize p-[8px]  ${current===index?`currentP ${styles.navbarListDiv}`
                                   :styles.navbarHomePage}`}>
                                {data.text}
                            </p>
                    ))}
                </div>
                <div className={'ml-[10px]'}>
                    {component}
                </div>
            </section>
    )
    return (
        <div>
            <Top/>
            <section className={'md:flex justify-center px-[30px] mb-[20px]'}>
                <Left/>
                <Right/>
            </section>
        </div>
    )
}