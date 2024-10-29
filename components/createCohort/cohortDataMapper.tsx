import {InstructorData} from "@/interfaces/interfaces";
import React from "react";
import styles from "@/styles/index.module.css";
import Image from "next/image";
import avatar from "@/assets/imageAvatar.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";

export default function MapData(instructorsData: InstructorData[], popUp: (value: {
    state: boolean[];
    index: number
}) => void, popupStates: boolean[], PopUp: (props: {
    array: boolean[];
    index: number
}) => React.JSX.Element, togglePopup: (index: number) => void) {
    return (
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
                        instructorsData.map((data, index) => (
                            <div key={index} className={'flex w-[100%] px-[30px] justify-between items-center'}>
                                <section className={'flex justify-center items-center gap-[10px]'}>
                                    <div>
                                        <Image alt='' src={avatar} width={35} height={35}/>
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
                                    <div
                                        className={'active:bg-gray-200 h-[30px] w-[30px] rounded-xl cursor-pointer flex justify-center items-center'}
                                        onClick={() => popUp({state: popupStates, index: index})}>
                                        <MoreVertIcon sx={{width: '15px', height: '40px'}}/>
                                    </div>
                                    <PopUp array={popupStates} index={index}/>
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
                                                sx={{
                                                    width: '14px',
                                                    height: '14px',
                                                    display: `${data.deleted ? 'none' : ''}`
                                                }}/>
                                            <p className={'text-sm font-thin text-gray-400'}>8 Courses</p>
                                        </div>
                                        <div className={`${data.deleted ? 'hidden' : 'flex items-center gap-[10px]'}`}>
                                            <WorkOutlineIcon sx={{
                                                width: '14px',
                                                height: '14px',
                                                display: `${data.deleted ? 'none' : ''}`
                                            }}/>
                                            <p className={'text-sm font-thin text-gray-400'}>Instructors</p>
                                        </div>
                                    </section>
                                    <p className={`${data.deleted ? 'hidden' : 'text-gray-400 text-sm'}`}>{data.active ? 'Active' : 'Pending'}</p>
                                </div>
                            </div>
                            <div className={'active:bg-gray-200 h-[30px] w-[30px] rounded-xl cursor-pointer' +
                                ' flex justify-center items-center'} onClick={() => togglePopup(index)}>
                                <MoreVertIcon sx={{width: '15px', height: '40px'}}/>
                                <PopUp array={popupStates} index={index}/>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}