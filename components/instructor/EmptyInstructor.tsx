// import Image from "next/image";
// import {Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton} from "@mui/material";
// import React, {useEffect, useRef, useState} from "react";
// import styles from '@/styles/index.module.css';
// import {Course, InstructorData, Organization} from "@/interfaces/interfaces";
// import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
// import GroupIcon from '@mui/icons-material/Group';
// import beans from '@/assets/beans.png'
// import semicolon from '@/assets/semicolon.png'
// import blueRidge from '@/assets/blueRidge.png'
// import henley from '@/assets/henley.png'
// import PermIdentityIcon from '@mui/icons-material/PermIdentity';
// import CloseIcon from "@mui/icons-material/Close";
// import Image1 from "@/assets/unsplash_4_hFxTsmaO4.png";
// import Image2 from "@/assets/unsplash_BbSBf5uv50A.png";
// import Image3 from "@/assets/unsplash_fIq0tET6llw.png";
// import Image4 from "@/assets/unsplash_gbNuQfm9hTE.png";
// import {setHeroText} from "@/redux/UserSlice";
// import {useDispatch} from 'react-redux';
// import DeleteInstructorDialog from "@/components/instructor/deleteInstructorDialog";
// import MapData from "@/components/createCohort/cohortDataMapper";
// import InvitationComponent from "@/components/createCohort/invitationComponent";

export default function Instructor() {
    // const [invite,setInvite] = useState<boolean>(false)
    // const [invitation, setInvitation] = useState<boolean>(false)
    // const [data,setData] = useState('');
    // const [assignedInstructor,setAssignInstructor] = useState(false)
    // const semicolonOrg:Organization = {image: semicolon, orgName:'Semicolon'}
    // const beansOrg:Organization = {image: beans,orgName:'N/A'}
    // const henleyOrg:Organization = {image: henley, orgName:'Henley Business School'}
    // const andelaOrg:Organization = {image: blueRidge, orgName:'Andela'}
    // const [isOpen, setOpen] = useState(false)
    // const popUpRef = useRef<HTMLDivElement>(null);
    // const dispatch = useDispatch()
    //
    // const togglePopup = (index: number) => {
    //     setInvite(invite)
    //     setPopupStates((prev) => {
    //         const newState = [...prev];
    //         newState[index] = !newState[index];
    //         return newState;
    //     });
    // };
    // const instructorsData: InstructorData[] = [
    //     {name:'jame nwankwo',email: 'james',instructor:0,active:true,deleted:false,course:'Design thinking',dateAdded:'12 Aug, 2021',organization:henleyOrg},
    //     {name:'great ndabia',email: 'james',instructor:0,active:true,deleted:false ,course:'Design thinking',dateAdded:'13 Aug, 2021',organization:beansOrg},
    //     {name:'florence olanike',email: 'james',instructor:0,active:true,deleted:false,course:'Design Hstory',dateAdded:'12 Aug, 2021', organization:semicolonOrg},
    //     {name:'joel onojason',email: 'james',instructor:0,active:false,deleted:true,course:'Software Engineering',dateAdded:'12 Aug, 2021',organization:andelaOrg},
    //     {name:'nonso okoroafor',email: 'james',instructor:0,active:true,deleted:false,course:'Django Language',dateAdded:'14 Aug, 2021',organization:henleyOrg},
    //     {name:'dummy name',email: 'james',instructor:0,active:true,deleted:false,course:'Java& Springboot',dateAdded:'14 Aug, 2021',organization:beansOrg},
    //     {name:'tunde tunde',email: 'james',instructor:0,active:true,deleted:false,course:'Design thinking',dateAdded:'12 Aug, 2021',organization:semicolonOrg},
    //     {name:'tade tobi',email: 'james',instructor:0,active:false,deleted:true,course:'Design thinking',dateAdded:'12 Aug, 2021',organization:andelaOrg},
    //     {name:'jane mike',email: 'james',instructor:0,active:true,deleted:false,course:'Java & Springboot',dateAdded:'12 Aug, 2021',organization:beansOrg},
    //     {name:'tola segun',email: 'james',instructor:0,active:true,deleted:false,course:'Django fundamentals',dateAdded:'14 Aug, 2021',organization:henleyOrg}
    // ]
    // const [popupStates, setPopupStates]=useState<boolean[]>(Array(instructorsData.length).fill(false));
    // const popUp= (value:{state:boolean[],index:number})=>{
    //     const newState = [...value.state];
    //     newState[value.index] = !newState[value.index];
    // }
    // const handleClickOutside = (event: MouseEvent) => {
    //     if (popUpRef.current && !popUpRef.current.contains(event.target as Node)) {
    //         setAssignInstructor(!assignInstructor);
    //     }
    // };
    // const showDialog= ()=>{
    //     setOpen(true)
    // }
    // useEffect(() => {
    //     document.addEventListener('mousedown', handleClickOutside);
    //     return () => {
    //         document.removeEventListener('mousedown', handleClickOutside);
    //     };
    // });
    // const SmallAssignInstructor=()=>(
    //     <div className={assignedInstructor? 'md:hidden w-[80vw] md:w-[400px]':'hidden'}>
    //         <p>Assign Instructor to Course</p>
    //         <p>select a course</p>
    //         <input type="text" placeholder={'search for a course'}/>
    //         <div className={'flex flex-col gap-[20px] py-[10px] justify-center mx-auto'}>
    //             {courses.map((data,index)=> (
    //                 <div key={index}
    //                      className={'flex gap-[20px] border-[1px] hover:border-blue-400 hover:bg-blue-200 p-[5px]'}>
    //                     <div>
    //                         <Image src={data.image.src} alt={''} width={50} height={50}
    //                                className={'object-center object-cover'}/>
    //                     </div>
    //                     <div className={`flex flex-col`}>
    //                         <p>{data.name}</p>
    //                         <div>
    //                             <div className={'flex gap-[5px] justify-center'}>
    //                                 <p className={'text-xs'}>5 Classes</p>
    //                                 <WorkOutlineIcon/>
    //                             </div>
    //                             <div className={'flex gap-[5px] justify-center'}>
    //                                 <p className={'text-xs'}>22 Learners</p>
    //                                 <WorkOutlineIcon/>
    //                             </div>
    //                         </div>
    //                         <div className={'flex gap-[5px] justify-center'}>
    //                             <PermIdentityIcon/>
    //                             <p className={'text-xs'}>0 Instructor</p>
    //                         </div>
    //                     </div>
    //                     <PopUp array={popupStates} index={index}/>
    //                 </div>
    //
    //             ))
    //             }
    //         </div>
    //     </div>
    // )
    // const courses: Course[] = [
    //     {name: 'Design Thinking', image: Image1, modules: 12},
    //     {name: 'Java', image: Image2, modules: 8},
    //     {name: 'UX Writer', image: Image3, modules: 9},
    //     {name: 'Business Management & Africa studies', image: Image4, modules: 10},
    //     {name: 'Design Thinking', image: Image1, modules: 12},
    //     {name: 'Java', image: Image2, modules: 8},
    //     {name: 'UX Writer', image: Image3, modules: 9},
    //     {name: 'Business Management & Africa studies', image: Image4, modules: 10},
    //     {name: 'Java', image: Image2, modules: 10},
    //
    // ]
    // const LargeAssignInstructor = () => {
    //     return (
    //         <div className={assignedInstructor ? 'hidden md:flex' : 'hidden'}>
    //             <Dialog open={assignedInstructor} className={'bg-[#557790] bg-opacity-80'}
    //                     sx={{color: 'inherit', opacity: 'inherit'}}>
    //                 <DialogTitle>
    //                     Assign Instructor To Cohort
    //                     <IconButton style={{float: 'right'}} onClick={() => setAssignInstructor(false)}>
    //                         <CloseIcon/>
    //                     </IconButton>
    //                 </DialogTitle>
    //                 <DialogContent>
    //                     <div className={'gap-[20px]'}>
    //                         {
    //                             courses.map((course, index) => (
    //                                 <div key={index}
    //                                      className={'border-[1px] flex md:gap-[20px] shadow-sm p-[10px] hover:border-blue-400'}>
    //                                     <Image src={course.image.src} alt={''} width={59} height={59}
    //                                            className='object-contain object-center rounded-md'/>
    //                                     <section className={'flex flex-col justify-center'}>
    //                                         <p className={'ThickDmSansFont overflow-ellipsis md:max-w-[300px]'}>{course.name}</p>
    //                                         <div className={styles.sectionStyles}>
    //                                             <section>
    //                                                 <p className={'text-xs'}>5 Classes </p>
    //                                                 <WorkOutlineIcon/>
    //                                             </section>
    //                                             <section>
    //                                                 <p className={'text-xs'}>22 Learners</p>
    //                                                 <GroupIcon/>
    //                                             </section>
    //                                             <section>
    //                                                 <p className={'text-xs'}>5 Classes </p>
    //                                                 <WorkOutlineIcon/>
    //                                             </section>
    //                                         </div>
    //                                     </section>
    //                                 </div>
    //                             ))
    //                         }
    //                     </div>
    //                 </DialogContent>
    //                 <DialogActions>
    //                     <Button variant={'outlined'} sx={{textTransform:'none'}} onClick={()=>{
    //                         setAssignInstructor(false)
    //                     }}>
    //                         Cancel
    //                     </Button>
    //                     <Button variant={'contained'} sx={{textTransform:'none'}} onClick={()=>{
    //                         dispatch(setHeroText('instructor successfully assigned to course'))
    //                         setAssignInstructor(false)
    //                     }}>
    //                         Assign
    //                     </Button>
    //                 </DialogActions>
    //             </Dialog>
    //         </div>
    //     )
    // }
    // const assignInstructor = () => {
    //     setAssignInstructor(!assignInstructor)
    // }
    // const PopUp = (props:{array:boolean[],index:number}) => {
    //     const newValue = [...props.array]
    //     return (
    //         <div className={newValue[props.index]? styles.moreActionsPopUp :'hidden'}>
    //             <p onClick={assignInstructor}>Assign Instructors</p>
    //             <p onClick={showDialog}>Remove Instructors</p>
    //             <DeleteInstructorDialog isOpen={isOpen} setOpen={()=>setOpen(!isOpen)}/>
    //             <SmallAssignInstructor/>
    //             <LargeAssignInstructor/>
    //         </div>
    //     )
    // }
    // const Invite= ()=>(
    //     <div className={!invite ?
    //         'gap-[15px] mt-[45px] md:mt-[10px] my-[20px] justify-start mx-[20px] md:mx-0 md:grid md:grid-cols-2 md:grid-rows-1'
    //         :'hidden'}>
    //         <div className={'flex flex-col gap-[15px] md:grid md:grid-cols-2 md:grid-rows-1 md:order-2'}>
    //             <div className={'md:order-2'}>
    //                 <Button variant='contained' sx={{textTransform:'none', width:'150px'}} onClick={()=>{setInvitation(true)}}>
    //                     Invite instructors</Button>
    //             </div>
    //             <input placeholder={'search'}
    //             className={'border-[1px] p-[10px] w-[80vw] md:w-[100%] h-[40px] rounded-md md:order-1 md:h-[40px]'}/>
    //         </div>
    //         <div className={'gap-[10px] md:order-1 md:flex md:items-center'}>
    //             <p className={`${styles.dmSans} font-bold text-lg md:hidden`}>Instructors</p>
    //             <p className={`${styles.dmSans} font-semibold text-sm `}>You have a total of 30 instructors</p>
    //         </div>
    //     </div>
    // )
    // const DataMapper =()=>(MapData(instructorsData, popUp, popupStates, PopUp, togglePopup))
    // const InvitationForm = InvitationComponent(data, setData);
    //
    // return (
    //     <div className={!assignedInstructor ? `${invitation ? 'mt-[50px] ml-[20px] md:ml-0 md:mt-0' : ''}
    //      md:mt-[30px] md:w-[100%]`:'hidden'}>
    //         <div className={`${invitation ? 'hidden' : ''}`}>
    //             <Invite/>
    //         </div>
    //         {!invitation ? <DataMapper/> : <InvitationForm setInvitation={()=>setInvitation(false)}/>}
    //     </div>
    // )

    return <div>
        <p>I am about to work on this</p>
    </div>
}
