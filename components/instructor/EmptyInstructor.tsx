import Image from "next/image";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, TextField} from "@mui/material";
import React, {useEffect, useRef, useState} from "react";
import styles from '@/styles/index.module.css';
import {Course, InstructorData, Organization} from "@/interfaces/interfaces";
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import GroupIcon from '@mui/icons-material/Group';
import beans from '@/assets/beans.png'
import semicolon from '@/assets/semicolon.png'
import blueRidge from '@/assets/blueRidge.png'
import henley from '@/assets/henley.png'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CloseIcon from "@mui/icons-material/Close";
import Image1 from "@/assets/unsplash_4_hFxTsmaO4.png";
import Image2 from "@/assets/unsplash_BbSBf5uv50A.png";
import Image3 from "@/assets/unsplash_fIq0tET6llw.png";
import Image4 from "@/assets/unsplash_gbNuQfm9hTE.png";
import {setHeroText} from "@/redux/UserSlice";
import {useDispatch} from 'react-redux';
import DeleteInstructorDialog from "@/components/instructor/deleteInstructorDialog";
import InvitationComponent from "@/components/createCohort/invitationComponent";
import MapData from "@/components/createCohort/cohortDataMapper";

export default function Instructor() {
    const [isInvited, setIsInvited] = useState<boolean>(false)
    const [assignedInstructor,setAssignInstructor] = useState(false)
    const semicolonOrg:Organization = {image: semicolon, orgName:'Semicolon'}
    const beansOrg:Organization = {image: beans,orgName:'N/A'}
    const henleyOrg:Organization = {image: henley, orgName:'Henley Business School'}
    const andelaOrg:Organization = {image: blueRidge, orgName:'Andela'}
    const [isOpen, setOpen] = useState(false)
    const popUpRef = useRef<HTMLDivElement>(null);
    const dispatch = useDispatch()

    const instructorsData: InstructorData[] = [
        {name:'jame nwankwo',email: 'james',instructor:0,active:true,deleted:false,course:'Design thinking',dateAdded:'12 Aug, 2021',organization:henleyOrg},
        {name:'great ndabia',email: 'james',instructor:0,active:true,deleted:false ,course:'Design thinking',dateAdded:'13 Aug, 2021',organization:beansOrg},
        {name:'florence olanike',email: 'james',instructor:0,active:true,deleted:false,course:'Design Hstory',dateAdded:'12 Aug, 2021', organization:semicolonOrg},
        {name:'joel onojason',email: 'james',instructor:0,active:false,deleted:true,course:'Software Engineering',dateAdded:'12 Aug, 2021',organization:andelaOrg},
        {name:'nonso okoroafor',email: 'james',instructor:0,active:true,deleted:false,course:'Django Language',dateAdded:'14 Aug, 2021',organization:henleyOrg},
        {name:'dummy name',email: 'james',instructor:0,active:true,deleted:false,course:'Java& Springboot',dateAdded:'14 Aug, 2021',organization:beansOrg},
        {name:'tunde tunde',email: 'james',instructor:0,active:true,deleted:false,course:'Design thinking',dateAdded:'12 Aug, 2021',organization:semicolonOrg},
        {name:'tade tobi',email: 'james',instructor:0,active:false,deleted:true,course:'Design thinking',dateAdded:'12 Aug, 2021',organization:andelaOrg},
        {name:'jane mike',email: 'james',instructor:0,active:true,deleted:false,course:'Java & Springboot',dateAdded:'12 Aug, 2021',organization:beansOrg},
        {name:'tola segun',email: 'james',instructor:0,active:true,deleted:false,course:'Django fundamentals',dateAdded:'14 Aug, 2021',organization:henleyOrg}
    ]

    const [popupIndex, setPopupIndex] = useState<number| null>(null);
    const handleClickOutside = (event: MouseEvent) => {
        if (popUpRef.current && !popUpRef.current.contains(event.target as Node)) {
            setAssignInstructor(!assignInstructor);
            setPopupIndex(null);
        }
    };

    const showDialog= ()=>{
        setOpen(true)
    }

    useEffect(() => {
        setPopupIndex(null)
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    },[]);

    const SmallAssignInstructor=()=>(
        <div className={assignedInstructor? 'md:hidden w-[80vw] md:w-[400px]':'hidden'}>
            <p>Assign Instructor to Course</p>
            <p>select a course</p>
            <input type="text" placeholder={'search for a course'}/>
            <div className={'flex flex-col gap-[20px] py-[10px] justify-center mx-auto'}>
                {courses.map((data,index)=> (
                    <div key={index}
                         className={'flex gap-[20px] border-[1px] hover:border-blue-400 hover:bg-blue-200 p-[5px]'}>
                        <div>
                            <Image src={data.image.src} alt={''} width={50} height={50}
                                   className={'object-center object-cover'}/>
                        </div>
                        <div className={`flex flex-col`}>
                            <p>{data.name}</p>
                            <div>
                                <div className={'flex gap-[5px] justify-center'}>
                                    <p className={'text-xs'}>5 Classes</p>
                                    <WorkOutlineIcon/>
                                </div>
                                <div className={'flex gap-[5px] justify-center'}>
                                    <p className={'text-xs'}>22 Learners</p>
                                    <WorkOutlineIcon/>
                                </div>
                            </div>
                            <div className={'flex gap-[5px] justify-center'}>
                                <PermIdentityIcon/>
                                <p className={'text-xs'}>0 Instructor</p>
                            </div>
                        </div>
                        <PopUp isOpen={index===popupIndex} />
                    </div>
                ))
                }
            </div>
        </div>
    )

    const courses: Course[] = [
        {name: 'Design Thinking', image: Image1, modules: 12},
        {name: 'Java', image: Image2, modules: 8},
        {name: 'UX Writer', image: Image3, modules: 9},
        {name: 'Business Management & Africa studies', image: Image4, modules: 10},
        {name: 'Design Thinking', image: Image1, modules: 12},
        {name: 'Java', image: Image2, modules: 8},
        {name: 'UX Writer', image: Image3, modules: 9},
        {name: 'Business Management & Africa studies', image: Image4, modules: 10},
        {name: 'Java', image: Image2, modules: 10},

    ]

    const LargeAssignInstructor = () => {
        return (
            <div className={assignedInstructor ? 'hidden md:flex' : 'hidden'}>
                <Dialog open={assignedInstructor} className={'bg-[#557790] bg-opacity-80'}
                        sx={{color: 'inherit', opacity: 'inherit'}}>
                    <DialogTitle>
                        Assign Instructor To Cohort
                        <IconButton style={{float: 'right'}} onClick={() => setAssignInstructor(false)}>
                            <CloseIcon/>
                        </IconButton>
                    </DialogTitle>
                    <DialogContent>
                        <div className={'gap-[20px]'}>
                            {
                                courses.map((course, index) => (
                                    <div key={index}
                                         className={'border-[1px] flex md:gap-[20px] shadow-sm p-[10px] hover:border-blue-400'}>
                                        <Image src={course.image.src} alt={''} width={59} height={59}
                                               className='object-contain object-center rounded-md'/>
                                        <section className={'flex flex-col justify-center'}>
                                            <p className={'ThickDmSansFont overflow-ellipsis md:max-w-[300px]'}>{course.name}</p>
                                            <div className={styles.sectionStyles}>
                                                <section>
                                                    <p className={'text-xs'}>5 Classes </p>
                                                    <WorkOutlineIcon/>
                                                </section>
                                                <section>
                                                    <p className={'text-xs'}>22 Learners</p>
                                                    <GroupIcon/>
                                                </section>
                                                <section>
                                                    <p className={'text-xs'}>5 Classes </p>
                                                    <WorkOutlineIcon/>
                                                </section>
                                            </div>
                                        </section>
                                    </div>
                                ))
                            }
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <Button variant={'outlined'} sx={{textTransform:'none'}} onClick={()=>{
                            setAssignInstructor(false)
                            setIsInvited(isInvited)
                        }}>
                            Cancel
                        </Button>
                        <Button variant={'contained'} sx={{textTransform:'none'}} onClick={()=>{
                            dispatch(setHeroText('instructor successfully assigned to course'))
                            setAssignInstructor(false)
                        }}>
                            Assign
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }

    const assignInstructor = () => {
        setAssignInstructor(!assignInstructor)
    }

    const PopUp = (props:{isOpen:boolean})=>{
        if(props.isOpen) {
            return (
                <div className={popupIndex? `w-[300px] ${styles.moreActionsPopUp}` : 'hidden'} ref={popUpRef}>
                    <p onClick={assignInstructor}>Assign Instructors</p>
                    <p onClick={showDialog}>Remove Instructors</p>
                    <DeleteInstructorDialog isOpen={isOpen} setOpen={() => setOpen(!isOpen)}/>
                    <SmallAssignInstructor/>
                    <LargeAssignInstructor/>
                </div>
            )
        }
        return (
            <>
            </>
        )
    };

    const Invite= ()=>(
        <div className={!isInvited ? 'gap-[15px] mt-[50px] md:mt-[10px] my-[20px] justify-start mx-[20px] md:mx-0 md:grid md:grid-cols-2 md:grid-rows-1'
         :'hidden'}>
            <div className={'flex flex-col gap-[15px] md:grid md:grid-cols-2 md:grid-rows-1 md:order-2'}>
                <div className={'md:order-2'}>
                    <Button variant='contained' sx={{textTransform:'none'}} onClick={()=>{setIsInvited(true)}}>
                        Invite instructors
                    </Button>
                </div>
                <form onChange={(e)=>{e.preventDefault()}}>
                    <TextField placeholder={'search'} className={styles.inputTag}/>
                </form>
            </div>
            <div className={'gap-[10px] md:order-1 md:flex md:items-center'}>
                <p className={`${styles.dmSans} font-bold text-lg md:hidden`}>Instructors</p>
                <p className={`${styles.dmSans} font-semibold text-sm `}>You have a total of 30 instructors</p>
            </div>
        </div>
    )

    return (
        <div className={!assignedInstructor ? 'md:mt-[30px] md:w-[100%]' : 'md:mt-[30px] md:w-[100%]'}>
            <div className={!isInvited?'flex':'hidden'}>
                <Invite/>
            </div>
            {isInvited?
                <>
                    <InvitationComponent initialState={isInvited} initialStateClosure={setIsInvited}/>
                </>
                :
                <>
                    <MapData instructorsData={instructorsData} PopUp={PopUp}/>
                </>
            }
        </div>
    )
}