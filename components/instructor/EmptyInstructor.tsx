import Image from "next/image";
import Empty from "@/assets/empty.png";
import {Button} from "@mui/material";
import React from "react";
import {useState} from "react";
import styles from '@/styles/index.module.css';
import {InstructorData} from "@/interfaces/interfaces";
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import avatar from '@/assets/imageAvatar.png'
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function Instructor() {
    const [invite,setInvite] = useState<boolean>(false)
    const [invitation, setInvitation] = useState<boolean>(false)
    const [data,setData] = useState('');
    const instructorsData: InstructorData[] = [
        {name:'jame nwankwo',email: 'james',instructor:0,active:true,deleted:false},
        {name:'great ndabia',email: 'james',instructor:0,active:true,deleted:false},
        {name:'florence olanike',email: 'james',instructor:0,active:true,deleted:false},
        {name:'joel onojason',email: 'james',instructor:0,active:false,deleted:true},
        {name:'nonso okoroafor',email: 'james',instructor:0,active:true,deleted:false},
        {name:'dummy name',email: 'james',instructor:0,active:true,deleted:false},
        {name:'tunde tunde',email: 'james',instructor:0,active:true,deleted:false},
        {name:'tade tobi',email: 'james',instructor:0,active:false,deleted:true},
        {name:'jane mike',email: 'james',instructor:0,active:true,deleted:false},
        {name:'tola segun',email: 'james',instructor:0,active:true,deleted:false}
    ]
    const EmptyState = () =>(

            <div className={!invite && !invitation ? 'flex justify-center items-center mt-[40px] md:mt-[30px] md:mr-[20vw] flex-col gap-2 md:gap-5 w-full' : 'hidden'}>
                <div className={'m-[10px] md:m-[10px]'}>
                    <Image src={Empty} alt={''} className={'w-[100px] md:w-[150px] md:h-auto h-[100px]'}/>
                </div>
                <div className={'flex justify-center items-center flex-col gap-3'}>
                    <p className={'font-semibold text-sm'}>Empty Space</p>
                    <p className={'text-sm md:text-xs px-[30px] md:px-0 text-center'}>
                        No Instructor has been invited, let&#39;s get you started by clicking the button below
                    </p>
                    <Button variant='contained' onClick={() => {
                        setInvite(!invite)
                    }} sx={{fontSize: 'small', textTransform: 'none'}}>
                        Invite Instructor
                    </Button>
                </div>
            </div>
        )
    const Invite= ()=>(
        <div className={invite ?
            'gap-[15px] mt-[45px] md:mt-[10px] my-[20px] justify-start mx-[20px] md:mx-0 md:grid md:grid-cols-2 md:grid-rows-1'
            :'hidden'}>
            <div className={'flex flex-col gap-[15px] md:grid md:grid-cols-2 md:grid-rows-1 md:order-2'}>
                <div className={'md:order-2'}>
                    <Button variant='contained' sx={{textTransform:'none', width:'150px'}} onClick={()=>{setInvitation(true)}}>Invite instructors</Button>
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
        <div className={`${!invite && !invitation? 'h-[500px] overflow-y-auto gap-[20px] my-[30px]': 'hidden'}`}>
            {
                instructorsData.map((data,index)=>(
                    <div key={index} className={'h-[100px] w-[80%] flex justify-between'}>
                        <div className={'flex'}>
                            <Image alt='' src={avatar} width={32} height={32} className={'object-cover object-center rounded-md'}/>
                            <div className={''}>
                                <p className={'text-md font-semibold capitalize'}>{data.name}</p>
                                <p className={'text-sm font-thin text-gray-400'}>{data.email}@semicolon.africa</p>
                                <section>
                                    <div className={`${data.deleted ? 'hidden' : ''}`}>
                                        <ImportContactsIcon
                                            sx={{width: '14px', height: '14px', display: `${data.deleted ? 'none' : ''}`}}/>
                                        <p className={'text-sm font-thin text-gray-400'}>8 Courses</p>
                                    </div>
                                    <div className={`${data.deleted? 'hidden':''}`}>
                                        <WorkOutlineIcon sx={{width:'14px', height:'14px',display:`${data.deleted? 'none':''}`}}/>
                                        <p>Instructors</p>
                                    </div>
                                </section>
                                <p className={`${data.deleted? 'hidden':''}`}>{data.active? 'Active': 'Pending'}</p>
                            </div>
                        </div>
                        <div className={'hover:bg-gray-500 p-[10px] rounded-xl cursor-pointer'}>
                            <MoreVertIcon sx={{width:'15px', height:'30px'}}/>
                        </div>
                    </div>
                ))
            }
        </div>
    )
    const Invitation = ()=>(
        <div className={'md:hidden'}>
            <div>
                <p className={`${styles.ThickDmSansFont}`}>Invite Instructors</p>
                <input placeholder={'Email, comma seperated'} onClick={(e)=>{setData(e.target.value)}} className={'w-[80vw]'}/>
            </div>
            <Button disabled={!data} onClick={()=>{setInvitation(false)}}>Send Invite</Button>
        </div>
    )
    return (
        <div className={'md:mt-[30px] md:w-[100%]'}>
            <EmptyState/>
            <Invite/>
            <DataMapper/>
            <Invitation/>
        </div>
    )
}