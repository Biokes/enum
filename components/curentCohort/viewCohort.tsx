'use client'
import {useSelector,useDispatch} from "react-redux";
import {RootState} from "@/redux/store";
import {Cohort, Course,CohortRightProps} from "@/interfaces/interfaces";
import Image from 'next/image'
import {Button, useMediaQuery} from "@mui/material";
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
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default  function ViewCohort(){
    const smallTextStyles = 'text-xs font-thin dmSans';
    const dispatch = useDispatch()
    const currentCohort: Cohort = useSelector((rootState: RootState) => rootState.user.clickedCohort);
    const [popUp, setPopUp] = useState<boolean>(false);
    // const [searchTerm, setSearchTerm] = useState('');
    const [style, setStyles] = useState<string>('')
    const popupRef = useRef<HTMLDivElement>(null);
    const [isClickedCohort,setClickedCohort] = useState(false)
    const [clickedPack, setClickedPack ]= useState('')
    const isSmallScreen = useMediaQuery('(max-width:768px)')

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
    }, [currentCohort]);
    const handleClick = () => {
        dispatch(setClickedCohortIndex(-1))
    }
    const PopUp = () => (
        <div className={`${styles.moreActionsPopUp} w-[140px] ${style}`} ref={popupRef}>
            <p onClick={()=>{setStyles('hidden')}}>Manage polls</p>
            <p>view Learners</p>
            <p>Schedule an Event </p>
            <p>Make an Announcement</p>
        </div>
    );
    const getImage = (cohort: Cohort) => {
        if (typeof cohort.avatar === "string") {
            return cohort.avatar;
        } else {
            return cohort.avatar.src;
        }
    };
    const Instructors =()=>(
        <div className={'lg:h-[356px] flex flex-col justify-evenly pr-[10px]'}>
            <p className={`text-bold text-lg ${styles.dmSans} my-[10px]`}>2 Instructors</p>
            <div className={'flex flex-col justify-evenly items-center gap-[10px]'}>
                <section className={'flex flex-col border rounded-md px-[10px] py-[5px] gap-[10px] justify-center mr-[2px]'}>
                    <section className={'flex gap-[10px]'}>
                        <Image src={Image5} alt={''} width={30} height={30}
                               className='object-cover object-center rounded-lg'/>
                        <section className={'flex flex-col justify-center'}>
                            <p className={`${styles.dmSans} text-lg font-bold`}>Olamide Adebisi, Ph.D. </p>
                            <p className={`${smallTextStyles} hidden md:flex`}>Henley Business School • Head Professor </p>
                        </section>
                    </section>
                    <div className={`text-lg font-thin dmSans h-[100px] md:h-[60px] md:text-sm`}>
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
                            <p className={`${smallTextStyles} hidden md:flex`}>Henley Business School • Chief Designer</p>
                        </section>
                    </section>
                    <div className={`text-lg font-thin dmSans h-[120px] md:h-[60px] md:text-xs`}>
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
        <div className={`${styles.moreActionsPopUp} w-[140px] ${style===''?'hidden':'flex'}`} ref={popupRef}>
            <p>Publish Poll</p>
            <p>Schedule a quiz</p>
            <p>Schedule an Event </p>
            <p>Make an Announcement</p>
            <p>Share a resource</p>
        </div>
    )
    const Top= ()=> (
        <div className={'flex flex-col md:mb-[10px]'}>
            <div className={'hidden md:flex gap-[10px] md:h-[24px] md:ml-[60px] my-[10px] ml-[5%]'} onClick={handleClick}>
                <ArrowBackIcon sx={{width:'15px',height:'15px',marginTop:'5px', display:{xs :'none', md:'flex'}}}/>
                <p>Back</p>
            </div>
            <div
                className={'h-[100px] flex flex-col md:flex-row md:h-[80px] justify-between items-center md:px-[60px] px-[20px]'}>
                <section className={'hidden md:flex gap-[10px]'}>
                    <Image src={getImage(currentCohort)} alt={''} width={59} height={59}
                           className='object-contain object-center rounded-md'/>
                    <div className={'flex justify-center items-start flex-col'}>
                        <p className={'md:h-[31px] md:text-md text-black overflow-ellipsis text-bold capitalize'}
                           style={{fontFamily: 'Dm sans'}}>
                            {currentCohort.name}
                        </p>
                        <p className={'overflow-hidden text-ellipsis whitespace-nowrap w-[100px]'}>{currentCohort.program}</p>
                    </div>
                </section>
                <div className={'flex gap-[40vw] mt-[30px] md:mt-0 md:gap-0'}>
                    <Button sx={{
                        textTransform: 'none', fontWeight: 'thin', marginRight: '10px',
                        fontSize: 'small', background: '#008EEF', color: '#ffffff'
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
    const courses: Course[] = [
        {name: 'Design Thinking', image: Image1, modules: 12},
        {name: 'Java', image: Image2, modules: 8},
        {name: 'UX Writer', image: Image3, modules: 9},
        {name: 'Business Management & Africa studies',image:Image4 ,modules:10},
        {name:'Design Thinking',image:Image1 ,modules:12},
        {name:'Java',image:Image2 ,modules:8},
        {name:'UX Writer',image:Image3 ,modules:9},
        {name:'Business Management & Africa studies',image:Image4 ,modules:10},
        {name:'Java',image:Image2 ,modules:10},

    ]
    const Left=()=>(
        <div className={`${!isClickedCohort && isSmallScreen ? 'flex flex-col':'hidden'} md:flex gap-[20px] flex flex-col items-center`}>
            <input
                placeholder="Search..."
                className="w-[90%] h-[40px] pl-[20px] text-base rounded border border-gray-300 mt-[10px]"
            />
            <div className={'md:border md:border-gray-300 md:rounded w-full md:w-[450px] px-[30px] flex flex-col'}>
                <p className={'capitalize text-semibold p-[10px_0_5px_20px]'}>9 courses</p>
                <div className={'flex flex-col md:max-h-[500px] lg:max-h-[300px] md:overflow-y-auto border-1 rounded-md ' +
                    'md:border-gray-200 md:p-[20px] md:mb-[10px] gap-x-[20px]'}>
                    {
                        courses.map((course, index) => (
                            <div key={index} className={'border-[1px] my-[5px] flex md:my-[5px] shadow-sm p-[10px]' +
                                ' rounded hover:border-[#008eef] hover:cursor-pointer'} onClick={()=>{
                                    if(isSmallScreen) {
                                        setClickedCohort(!isClickedCohort)
                                        setClickedPack(course.name)
                                    }
                            }}>
                                <Image src={course.image.src} alt={''} width={59} height={59}
                                       className='object-contain object-center rounded-md'/>
                                <section className={'flex flex-col justify-center ml-[7px]'}>
                                    <p className={'ThickDmSansFont truncate overflow-ellipsis max-w-[150px] md:max-w-[220px]'}>{course.name}</p>
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
        <section className={'md:pl-[30px] flex gap-[10px] md:gap-0 flex-col justify-around ]'}>
            <div className={'my-[20px] w-full'}>
                <p className={'font-bold my-[20px]'}>Course Overview</p>
                <p className={'text-lg md:text-sm'}>This course examines important issues in corporate finance
                    from the perspectives of financial managers who make important
                    investment decisions and financing decisions. This course
                    incorporates an element of financial modelling in teaching
                    and assessments.
                </p>
            </div>
            <div className={`h-auto ${styles.learningOutcome}`}>
                <p className={'font-bold my-[10px]'}>Learning Outcome</p>
                <p className={'text-lg md:text-sm md:font-thin p-[5px]'}>What you are expected to know after this course</p>
                <li>Understand various forms of market imperfections and their implications for financial managers</li>
                <li>Understand various forms of market imperfections and their implications for financial managers</li>
                <li>Generate a valuation range for a project or a company</li>
                <li>Apply option theories to solve corporate finance problems</li>
                <li>Use Excel to conduct a simple DCF analysis, regression analysis and sensitivity analysis</li>
            </div>
        </section>
    )
    const Modules =()=>(
        <div className={'flex'}>
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
                <div className={`flex justify-between items-center px-[20px]`}>
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
        <section className={'h-[365px] py-[10px_20px] gap-[20px]'}>
            <div className={'flex gap-[20px] p-[10px]'}>
                <Button variant={'outlined'} sx={{
                    borderColor: '#008EEF',
                    color:'#008EEF',
                    textTransform: 'none',
                    backgroundColor:'#aecae1',
                    padding: '3px 5px',
                    cursor:'pointer',
                    borderRadius: '15px',
                    border: '1px solid #008EEF'
                }}>All </Button>
                <Button variant={'outlined'} sx={{
                    "&:hover": {
                        borderColor: '#aecae1',
                        color:'#008EEF'
                    },
                    textTransform: 'none',
                    padding: '3px 5px',
                    cursor:'pointer',
                    color: '#151515',
                    borderRadius: '15px',
                    border: '1px solid #151515'
                }}>Post </Button>
                <Button variant={'outlined'} sx={{
                    "&:hover": {
                        borderColor: '#aecae1',
                        color:'#008EEF'
                    },
                    textTransform: 'none',
                    padding: '3px 5px',
                    cursor:'pointer',
                    borderRadius: '15px',
                    color: '#151515',
                    border: '1px solid #151515'
                }}>Questions </Button>
            </div>
            <div className={'flex flex-col md:h-[310px] gap-[10px] md:overflow-y-auto '}>
                <section className={'gap-[10px] mt-[5px] flex flex-col justify-between'}>
                    <div className={'flex items-center gap-[10px] pt-[5px]'}>
                        <Image src={Image7} alt={''} height={40} width={40}
                               className='object-cover object-center rounded-lg'/>
                        <p className={'text-sm font-bold'}>Chukwudi Brutus</p>
                    </div>
                    <div className={styles.questionPack}>
                        <div className={styles.forumHeader}>
                            <Image src={HelpCircle} alt={''} width={18} height={18}/>
                            <p>What are the best tools or methods for the empathize phase ?</p>
                        </div>
                        <p className={styles.comment}>
                            I really like how engaging this classroom is.
                            The instructors have made all the necessary resources available
                            and we just have to go through them.
                        </p>
                        <div>
                            <p className={styles.forumDate}>Dec. 12, 2021. 9am</p>
                        </div>
                        <footer className={`flex justify-between ${styles.forumFooter} px-[10px]`}>
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
                <section className={'gap-[10px] mt-[5px] flex flex-col justify-between'}>
                    <div className={'flex items-center gap-[10px] pt-[5px]'}>
                        <Image src={Image8} alt={''} height={40} width={40}
                               className='object-cover object-center rounded-lg'/>
                        <p className={'text-sm font-bold'}>Ambrose Nwankwo</p>
                    </div>
                    <div className={styles.questionPack}>
                        <div className={styles.forumHeader}>
                            <Image src={HelpCircle} alt={''} width={18} height={18}/>
                            <p>What are the best tools or methods for the empathize phase ?</p>
                        </div>
                        <p className={styles.comment}>
                            I really like how engaging this classroom is.
                            The instructors have made all the necessary resources available
                            and we just have to go through them.
                        </p>
                        <div>
                            <p className={styles.forumDate}>Dec. 12, 2021. 9am</p>
                        </div>
                        <footer className={`flex justify-between ${styles.forumFooter} px-[10px]`}>
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
    const RightSubDivisions: CohortRightProps[] = [
        {text: 'instructors', component: <Instructors/>},
        {text: 'Modules', component: <Modules/>},
        {text: 'Course Information', component: <CourseOverview/>},
        {text: 'Forum', component: <Forum/>}
    ]
    const [current, setCurrent] = useState<number>(0);
    const Right = () => (
        <section  className={`${isSmallScreen && !isClickedCohort ? 'hidden' : 'flex flex-col'} md:flex md:flex-col border border-gray-300 rounded-md md:w-[600px] lg:w-[800px]`}>
            <div className={styles.listDiv}>
                    {RightSubDivisions.map((data, index) => (
                    <p key={index} onClick={() => {
                        setComponent(data.component);
                        setCurrent(index)
                    }}
                       className={`capitalize p-[8px]  ${current === index ? `currentP ${styles.navbarListDiv}`
                           : styles.navbarHomePage}`}>
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
            <div className={'flex md:hidden w-full gap-[15px] pl-[7%]'}>
                <p className={'capitalize dmSans hover:cursor-pointer'}>Cohorts</p>
                <KeyboardArrowRightIcon className={'w-[20px] h-[20px]'}/>
                <p className={`${!isClickedCohort? 'text-[#008eef]': 'text-black'} capitalize hover:cursor-pointer`}
                onClick={()=> {
                    if (isClickedCohort) {
                        setClickedCohort(!isClickedCohort)
                    }
                }}>
                    {currentCohort.name}
                </p>
                <KeyboardArrowRightIcon className={isClickedCohort?'w-[20px] h-[20px]':'hidden'}/>
                <p className={isClickedCohort?'text-[#008eef] capitalize hover:cursor-pointer':'hidden'}>{clickedPack}</p>

            </div>
            <section className={'md:flex justify-center md:px-[30px] mb-[20px]'}>
                <Left/>
                <Right/>
            </section>
        </div>
    )
}