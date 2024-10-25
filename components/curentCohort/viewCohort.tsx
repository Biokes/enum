'use client'
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import {Cohort, Course,CohortRigthProps} from "@/interfaces/interfaces";
import Link from "next/link";
import Image from 'next/image'
import {Button, TextField} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import React, {ReactNode, useState} from "react";
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
import HelpCircle from '@/assets/help-circle.png';
import Heart from '@/assets/heart.png';
import Reply from '@/assets/message-circle.png'

export default  function ViewCohort(){
    const selector = useSelector((rootState:RootState)=>rootState.user)
    const selectedCohort = selector.clickedCohortIndex
    const smallTextStyles = 'text-xs font-thin dmSans';
    const allCohorts : string | null = sessionStorage.getItems('cohorts')
    const Instructors =()=>(
        <div>
            <p className={'dateCreated'}>2 Instructors</p>
            <div>
                <section>
                    <section className={'flex gap-[10px]'}>
                        <Image src={Image5} alt={''} width={59} height={59}
                               className='object-cover object-center rounded-lg'/>
                        <section className={'flex flex-col'}>
                            <p className={'ThickDmSansFont'}>Olamide Adebisi, Ph.D. </p>
                            <p className={smallTextStyles}>Henley Business School • Head Professor </p>
                        </section>
                    </section>
                    <div className={smallTextStyles}>
                        Olamide taught Donald Trump in Kindergarten. She has 25 years
                        experience teaching presidents design related courses.
                        She has a PhD in Education management and is a member of
                        faculty at the Henley Business School.
                    </div>
                </section>

                <section className={'flex gap-[10px]'}>
                    <Image src={Image6} alt={''} width={59} height={59}
                           className='object-cover object-center rounded-lg'/>
                    <section className={'flex flex-col'}>
                        <p className={'ThickDmSansFont'}>Morire Johnson Alausa</p>
                        <p className={smallTextStyles}>Henley Business School • Chief Designer</p>
                    </section>
                </section>
                <div className={smallTextStyles}>
                    Morire taught Donald Trump in Kindergarten. She has 25
                    years experience teaching presidents design related courses.
                    She has a PhD in Education management and is a member of
                    faculty at the Henley Business School.Morire taught Donald
                    Trump in Kindergarten. She has 25 years experience teaching
                    presidents design related courses. She has a PhD in Education
                    management and is a member of faculty at the Henley Business School.
                </div>
            </div>
        </div>
    )
    const data = allCohorts ? JSON.parse(allCohorts) : []
    const currentCohort: Cohort = data[selectedCohort];
    const [component, setComponent] = useState<ReactNode>(<Instructors/>)
    const [popUp, setPopUp] = useState<boolean>(false);
    const [searchTerm, setSearchTerm] = useState('');
    const moreActions = () => {
        setPopUp(!popUp)
    }
    const PopUp = () => (
        <div className={styles.moreActionsPopUp}>
            <p>Manage polls</p>
            <p>view Learners</p>
            <p>Schedule an Event </p>
            <p>Make an Announcement</p>
        </div>
    );
    // const InnerPopUp=()=> (
    //     <div className={styles.moreActionsPopUp}>
    //         <p>Publish Poll</p>
    //         <p>Schedule a quiz</p>
    //         <p>Schedule an Event </p>
    //         <p>Make an Announcement</p>
    //         <p>Share a resource</p>
    //     </div>
    // )
    const Top= ()=> (
        <div>
            <Link className={'md:w-[64px] md:h-[24px] md:mt-[40px]'} href={'/createCohort'}> Back</Link>
            <div>
                <section>
                    <Image
                        src={typeof currentCohort.avatar === 'string' ? currentCohort.avatar : currentCohort.avatar.src}
                        width={59} height={59} className='object-cover object-center rounded-md' alt={''}/>
                    <div>
                        <p className={'md:h-[31px]'} style={{fontFamily: 'Dm sans'}}>{currentCohort.name}</p>
                        <p className={''}>{currentCohort.program}</p>
                    </div>
                </section>
                <div>
                    <Button sx={{textTransform: 'none', fontWeight: 'thin', fontSize: 'small',}}>
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
                </div>
            </div>

        </div>
    )
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
        //if(module .name!== searchTerm){module.setStyle('hidden')}
    };
    const Left=()=>(
        <div>
            <TextField
                variant="outlined"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearchChange}
                sx={{width:'408px',textTransform:'none', height:'38px',borderRadius:'8px',borderWidth:'1px'}}
            />
            <div className={''}>
                <p className={''}>9 courses</p>
                <div>
                    {
                        courses.map((course, index)=>(
                            <div key={index}>
                                <Image src={course.image.src} alt={''} width={59}
                                       height={59} className='object-contain object-center rounded-md'/>
                                <section>
                                    <p>{course.name}</p>
                                    <p>{course.modules} modules</p>
                                </section>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>

    )
    const CourseInformation=()=>(
        <section >
            <div>
                <p>Course Overview</p>
                <p>This course examines important issues in corporate finance
                    from the perspectives of financial managers who make important
                    investment decisions and financing decisions. This course
                    incorporates an element of financial modelling in teaching
                    and assessments.
                </p>
            </div>
            <div>
                <p>Learning Outcome</p>
                <p>What  you are expected to know after this course</p>
                <li>Understand various forms of market imperfections and their implications for financial managers</li>
                <li>Understand various forms of market imperfections and their implications for financial managers</li>
                <li>Generate a valuation range for a project or a company</li>
                <li>Apply option theories to solve corporate finance problems</li>
                <li>Use Excel to conduct a simple DCF analysis, regression analysis and sensitivity analysis</li>
            </div>
        </section>

    )
    const Modules =()=>(
        <div>
            <section>
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
            <section>
                <div>
                    <p>Session 1</p>
                    <RemoveIcon sx={{color: 'blue'}}/>
                </div>
                <div>
                    <section>
                        <div>
                            <p>Introduction to module</p>
                            <AccessTimeIcon sx={{'& hover': {color:'#008eef'}}}/>
                        </div>
                        <article>
                            <VideocamIcon sx={{'& hover': {color:'#008eef'}}}/>
                            <p>3 mins</p>
                        </article>
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
                    <section>
                        <p className={'dateCreated'}>Section 2</p>
                        <AddIcon sx={{'& hover': {color:'#008eef'}}}/>
                    </section>
                    <section>
                        <p className={'dateCreated'}>Section 2</p>
                        <AddIcon sx={{'& hover': {color:'#008eef'}}}/>
                    </section>
                    <section className={'dateCreated'}>
                        <p>Section 2</p>
                        <AddIcon sx={{'& hover': {color:'#008eef'}}}/>
                    </section>
                    <section className={'dateCreated'}>
                        <p>Section 2</p>
                        <AddIcon sx={{'& hover': {color:'#008eef'}}}/>
                    </section>
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
        {text: 'Course Information', component: <CourseInformation/>},
        {text: 'Modules', component: <Modules/>},
        {text: 'Forum', component: <Forum/>}
    ]
    const Right = () => (
        <div>
            <section>
                <div>
                    {RightSubDivisions.map((data, index) => (
                        <p key={index} onClick={() => {
                            setComponent(data.component)
                        }}>{data.text}</p>
                    ))}
                </div>
                <div>
                    {component}
                </div>
            </section>
        </div>
    )
    return (
        <div>
            <Top/>
            <section className={'md:flex'}>
                <Left/>
                <Right/>
            </section>
        </div>
    )
}