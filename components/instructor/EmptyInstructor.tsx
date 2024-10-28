import Image from "next/image";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton} from "@mui/material";
import React from "react";
import {useState} from "react";
import styles from '@/styles/index.module.css';
import {Course, InstructorData, Organization} from "@/interfaces/interfaces";
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import avatar from '@/assets/imageAvatar.png'
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import GroupIcon from '@mui/icons-material/Group';
import beans from '@/assets/beans.png'
import semicolon from '@/assets/semicolon.png'
import blueRidge from '@/assets/blueRidge.png'
import henley from '@/assets/henley.png'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CloseIcon from "@mui/icons-material/Close";
import Image1 from "@/assets/unsplash_4_hFxTsmaO4.png";
import Image2 from "@/assets/unsplash_BbSBf5uv50A.png";
import Image3 from "@/assets/unsplash_fIq0tET6llw.png";
import Image4 from "@/assets/unsplash_gbNuQfm9hTE.png";
import {setHeroText} from "@/redux/UserSlice";
import {useDispatch} from 'react-redux';

export default function Instructor() {
    const [invite,setInvite] = useState<boolean>(false)
    const [popupStates, setPopupStates] = useState<boolean[]>(Array(instructorsData.length).fill(false));
    const [invitation, setInvitation] = useState<boolean>(false)
    const [data,setData] = useState('');
    const [popup, setPopUp] = useState(false)
    const [assignedInstructor,setAssignInstructor] = useState(false)
    const semicolonOrg:Organization = {image: semicolon, orgName:'Semicolon'}
    const beansOrg:Organization = {image: beans,orgName:'N/A'}
    const henleyOrg:Organization = {image: henley, orgName:'Henley Business School'}
    const andelaOrg:Organization = {image: blueRidge, orgName:'Andela'}
    const [isOpen, setOpen] = useState(false)
    const dispatch = useDispatch()
    const togglePopup = (index: number) => {
        setPopupStates((prev) => {
            const newState = [...prev];
            newState[index] = !newState[index];
            return newState;
        });
    };
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
    const popUp= ()=>{
        setPopUp(true)
        setInvite(invite)
    }
    const showDialog= ()=>{
        setOpen(true)
    }
    const DialogComponent=()=>(
        <Dialog open={isOpen}
                sx={{
                    '& .MuiBackdrop-root': {
                        backgroundColor: 'transparent',
                    },
                }}
        >
            <DialogTitle >
                Delete Instructor
                <IconButton style={{ float: 'right' }} onClick={() => setOpen(false)}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent sx={{width:"100%"}}>
                <DialogContentText sx={{width:"100%"}}>
                    Deleting this Instructor cannot be undone,
                    but if you really want to, proceed by clicking the delete button.
                </DialogContentText>
            </DialogContent>
            <DialogActions sx={{width:'100%'}}>
                <Button variant={'text'}  sx={{ texTransform:'none',fontWeight:'bold',color:'black'}}
                        onClick={() => {setOpen(false)}}>
                    Cancel
                </Button>
                <Button variant={'contained'} sx={{backgroundColor:'red',text:'white',fontWeight:'bold'}}
                        onClick={()=>{setOpen(false)}}>
                    Delete
                </Button>
            </DialogActions>
        </Dialog>
    )
    const SmallAssignInstructor=()=>(
        <div className={assignedInstructor?'md:hidden w-[80vw] md:w-[400px]':'hidden'}>
            <p>Assign Instructor to Course</p>
            <p>select a course</p>
            <input type="text" placeholder={'search for a course'}/>
            {/*//h-[300px] overflow-y-auto*/}
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
                        {popupStates[index] && <PopUp/>}
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
        setAssignInstructor(true)
    }
    const PopUp = () => (
        <div className={styles.moreActionsPopUp}>
            <p onClick={assignInstructor}>Assign Instructors</p>
            <p onClick={showDialog}>Remove Instructors</p>
            {isOpen && <DialogComponent/>}
            {assignedInstructor && <SmallAssignInstructor/>}
            {assignedInstructor&&<LargeAssignInstructor/>}
        </div>
    )
    const Invite= ()=>(
        <div className={!invite ?
            'gap-[15px] mt-[45px] md:mt-[10px] my-[20px] justify-start mx-[20px] md:mx-0 md:grid md:grid-cols-2 md:grid-rows-1'
            :'hidden'}>
            <div className={'flex flex-col gap-[15px] md:grid md:grid-cols-2 md:grid-rows-1 md:order-2'}>
                <div className={'md:order-2'}>
                    <Button variant='contained' sx={{textTransform:'none', width:'150px'}} onClick={()=>{setInvitation(true)}}>
                        Invite instructors</Button>
                </div>
                <input placeholder={'search'} className={'border-[1px] p-[10px] w-[80vw] md:w-[100%] h-[40px] rounded-md md:order-1 md:h-[40px]'}/>
            </div>
            <div className={'gap-[10px] md:order-1 md:flex md:items-center'}>
                <p className={`${styles.dmSans} font-bold text-lg md:hidden`}>Instructors</p>
                <p className={`${styles.dmSans} font-semibold text-sm `}>You have a total of 30 instructors</p>
            </div>
        </div>
    )
    const DataMapper = ()=>(
        <div className={'md:h-[310px] gap-[20px] mt-[30px] '}>
            <div className={'hidden md:flex md:flex-col'}>
                <div className={styles.forumFooterInners}>
                    <p>Instructor</p>
                    <p>Organization</p>
                    <p>Course</p>
                    <p>Status</p>
                    <p>Date Added</p>
                </div>
                <div className={'flex flex-col px-[15px] gap-[20px] py-[15px] overflow-y-auto h-[280px]'}>
                    {
                        instructorsData.map((data,index)=>(
                            <div key={index} className={'flex w-[100%] px-[10px] justify-between items-center'}>
                                <section className={'flex justify-center items-center gap-[10px]'}>
                                    <div>
                                        <Image alt='' src={avatar} width={32} height={32}/>
                                    </div>
                                    <div>
                                        <p className={'font-semibold capitalize'}>{data.name}</p>
                                        <p className={'text-sm font-thin text-gray-400'}>{data.email}@semicolon.africa</p>
                                    </div>
                                </section>
                                <section className={`${styles.organization}`}>
                                    <div className={'flex justify-center items-center'}>
                                        <Image alt='' src={data.organization.image} width={18} height={18}/>
                                    </div>
                                    <p className="capitalize w-[100px] text-sm text-ellipsis overflow-hidden whitespace-nowrap">
                                        {data.organization.orgName}</p>
                                </section>
                                <section className={'flex'}>
                                    <p>Design Thinking</p>
                                    <ArrowDropDownIcon/>
                                </section>
                                <div className={'flex justify-center items-center'}>
                                    <p className={`font-thin text-lg`}>{data.active && !data.deleted ? 'Active' : 'Pending'}</p>
                                </div>
                                <section className={'flex justify-between items-center'}>
                                    <p>{data.dateAdded}</p>
                                    <div className={'active:bg-gray-200 h-[30px] w-[30px] rounded-xl cursor-pointer flex justify-center items-center'}
                                         onClick={popUp}>
                                        <MoreVertIcon sx={{width: '15px', height: '40px'}}/>
                                    </div>
                                    {popup&&(<PopUp/>)}
                                </section>
                            </div>
                        ))
                    }
                </div>

            </div>
            <div className={'md:hidden'}>
                {
                    instructorsData.map((data, index) => (
                        <div key={index} className={'h-[100px] w-[100%] flex justify-between'}>
                            <div className={'flex gap-[10px]'}>
                                <div>
                                    <Image alt='' src={avatar} width={32} height={32}/>
                                </div>
                                <div className={''}>
                                    <p className={'text-md font-semibold capitalize'}>{data.name}</p>
                                    <p className={'text-sm font-thin text-gray-400'}>{data.email}@semicolon.africa</p>
                                    <section className={'flex gap-[20px]'}>
                                        <div className={`${data.deleted ? 'hidden' : 'flex items-center gap-[10px]'}`}>
                                            <ImportContactsIcon
                                                sx={{width: '14px', height: '14px', display: `${data.deleted ? 'none' : ''}`}}/>
                                            <p className={'text-sm font-thin text-gray-400'}>8 Courses</p>
                                        </div>
                                        <div className={`${data.deleted? 'hidden':'flex items-center gap-[10px]'}`}>
                                            <WorkOutlineIcon sx={{width:'14px', height:'14px',display:`${data.deleted? 'none':''}`}}/>
                                            <p className={'text-sm font-thin text-gray-400'}>Instructors</p>
                                        </div>
                                    </section>
                                    <p className={`${data.deleted? 'hidden':'text-gray-400 text-sm'}`}>{data.active? 'Active': 'Pending'}</p>
                                </div>
                            </div>
                            <div className={'active:bg-gray-200 h-[30px] w-[30px] rounded-xl cursor-pointer' +
                                ' flex justify-center items-center'} onClick={() => togglePopup(index)}>
                                <MoreVertIcon sx={{width:'15px', height:'40px'}}/>
                                {popupStates[index] && <PopUp/>}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
    const Invitation = ()=>(
        <div className={`flex flex-col gap-[30px]`}>
            <div>
                <p className={`${styles.ThickDmSansFont}`}>Invite Instructors</p>
                <input placeholder={'Email'} value={data} type={'text'}
                       onChange={(e)=>{setData(e.target.value)}}
                       className={'w-[80vw] md:w-[300px] h-[30px] mh:h-[50px] rounded border-[1px] border-gray-300 pl-[20px]'}/>
            </div>
            <Button disabled={!data} sx={{width:{
                sm:'150px',md:'200px'
                }}} variant={'contained'} onClick={()=>{setInvitation(false)}}>Send Invite</Button>
        </div>
    )
    return (
        <div className={!assignedInstructor ?`${invitation ? 'mt-[50px] ml-[20px] md:ml-0 md:mt-0' : ''} md:mt-[30px] md:w-[100%]`:'hidden'}>
            <div className={`${invitation ? 'hidden' : ''}`}>
                <Invite/>
            </div>
            {!invitation ? <DataMapper/> : <Invitation/>}
        </div>
    )
}
