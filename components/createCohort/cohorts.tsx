'use client';
import {Cohort, CohortGroup} from "@/interfaces/interfaces";
import CohortIcon from '@/assets/user.png';
import briefcase from '@/assets/briefcase.svg';
import users from '@/assets/users.svg';
import openedBook from '@/assets/book-open.svg';
import Image from 'next/image';
import styles from '@/styles/index.module.css';
import {Button, FormControl, MenuItem, Select, SelectChangeEvent, useMediaQuery} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React, {useEffect, useState} from "react";
import Empty from '@/assets/empty.png';
import {RootState} from "@/redux/store";
import {setCohorts} from '@/redux/cohortSlice'
import {useDispatch, useSelector} from "react-redux";
import MapCohortsSaved from './cohortMapper';
import {DialogComponent} from "@/components/createCohort/dialogComponent";

export default function Cohorts() {
    const [isOpen, setOpen] = useState<boolean>(false);
    const cohortsSaved: string | null = sessionStorage.getItem('cohorts')
    const storeState: Cohort[] = cohortsSaved ? JSON.parse(cohortsSaved) : [];
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(setCohorts());
        console.log("store state: ",storeState);
    },[isOpen])
    const [popUp,setPopUp]= useState(false);
    const [selectedIndex, setSelectedIndex] = useState<number>(0);
    const isMdScreen = useMediaQuery('(min-width: 768px)');
    const numberOfCohorts = useSelector((state :RootState)=>state.cohorts).length
    const handleClick = (index: number) => {setSelectedIndex(index)};
    const handleSelectChange = (event: SelectChangeEvent<number>) => {
        setSelectedIndex(Number(event.target.value));
    };

    const Instructors = () => {
        return (
            <div className={'flex justify-center items-center flex-col gap-2 md:gap-5 w-full'}>
                <div className={'m-[10px] md:m-[10px]'}>
                    <Image src={Empty} alt={''}/>
                </div>
                <div className={'flex justify-center items-center flex-col gap-3'}>
                    <p className={'font-semibold text-sm'}>Empty Space</p>
                    <p className={'text-sm md:text-xs px-[30px] md:px-0 text-center'}>
                        No cohort has been created yet, let&#39;s get started by clicking the button below
                    </p>
                    <Button variant='contained' onClick={() => setOpen(true)} sx={{fontSize: 'small',textTransform:'none'}}>Create
                        a Cohort
                    </Button>
                </div>
            </div>
        );
    };

    const moreActions =()=>{
        setPopUp(!popUp)
    };

    const PopUp=()=>{
        return (
            <div className={styles.moreActionsPopUp}>
                <p>Publish a Poll</p>
                <p>Schedule an Event</p>
                <p>Make an announcement</p>
            </div>
        )
    };

    const MapCohorts = () => {
        return (
            <div className={styles.mapCohort}>
                <div className={styles.mapCohortDivInner1}>
                    <section className={styles.mapCohortDivSection1}>
                        <SearchIcon style={{width: '32px', height: '32px', border: 'none'}}/>
                        <input type="text" style={{outline: 'none', width: '90%', height: '30px'}}/>
                    </section>
                    <section>
                        <Button variant={'contained'} sx={{
                            background: '#008EEF',
                            color: '#ffffff',
                            textTransform: 'none',
                            fontWeight: 'thin',
                            fontSize: 'small',
                            width: '155px',
                            height: '40px',
                            marginRight:'10px'
                        }} onClick={() => setOpen(true)}>
                            Create a cohort
                        </Button>
                        <Button endIcon={<MoreVertIcon/>} variant={'outlined'} onClick={moreActions}
                                sx={{
                                    color: '#008EEF', background: '#ffffff', height: '40px', overflow: 'none',
                                    fontWeight: 'thin', fontSize: 'small', textTransform: 'none', position:'relative'
                                }}>
                            more actions
                        </Button>
                        {popUp&& (<PopUp/>)}
                    </section>
                </div>
                <div className={'md:overflow-y-auto '}>
                    <MapCohortsSaved cohorts={storeState}/>
                </div>
            </div>

        )
    };

    const groups: CohortGroup[] = [
        { image: users, text: 'Cohorts', component: numberOfCohorts ===0? <Instructors/> : <MapCohorts/>},
        { image: briefcase, text: 'Instructors', component: <Instructors /> },
        { image: CohortIcon, text: 'Learners', component: <Instructors /> },
        { image: openedBook, text: 'Programs', component: <Instructors /> }
    ];

    const SmallScreenComponent=()=> (
        <div className={'flex flex-col md:hidden '}>
            <p className={'text-xs w-full'}>Switch between tabs</p>
            <FormControl sx={{width: '80vw'}}>
                <Select labelId="my-select-label" value={selectedIndex} onChange={handleSelectChange}
                        displayEmpty sx={{width: '100%'}}>
                    {groups.map((item, index) => (
                        <MenuItem key={index} value={index} sx={{
                            display: 'flex', justifyContent: 'center',
                            alignItems: 'center', paddingInline: '10px'
                        }}>
                            <div className={'flex gap-[10px] mt-[-20px]'}>
                                <Image src={item.image} alt=""/>
                                <p>{item.text}</p>
                            </div>
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    )

    const Dialog_Component = ()=> {
        return (
            <DialogComponent isOpen={isOpen} setOpen={setOpen}/>
        );
    }

    return (
        <div className={styles.cohortsDiv}>
            <div className={styles.groupPack}>
                {  isMdScreen ? (groups.map((item, index)=>(
                        <div key={index} onClick={() => handleClick(index)}
                             className={`flex gap-[20px] my-[10px] ${selectedIndex === index ? 'bg-blue-100 rounded-lg  p-[20px]' : 'pl-[30px]'}`}>
                            <Image src={item.image} alt=""/>
                            <p className={`${selectedIndex === index ? 'text-blue-400' : 'text-black'}`}>{item.text}</p>
                        </div>
                    ))
                ) : (
                    <div className={'md:hidden'}>
                        <SmallScreenComponent/>
                    </div>
                )}
            </div>
            <section className={'w-full px-[20px] flex md:flex-col justify-between h-[100%]'}>
                <p className={` font-semibold hidden md:flex my-[10px] pt-[10px] mb-[30px]`}>{groups[selectedIndex].text}</p>
                <div className={`w-[100%] h-[60%] flex ${numberOfCohorts===0? 'md:m-[-7%_0_3%_0]': '' }`}>
                    {groups[selectedIndex].component}
                </div>
            </section>
            <Dialog_Component/>
        </div>
    );
}
