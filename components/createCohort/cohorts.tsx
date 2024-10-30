'use client';
import React, { useEffect, useState, useRef } from 'react';
import { Cohort, CohortGroup } from "@/interfaces/interfaces";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import Image from 'next/image';
import styles from '@/styles/index.module.css';
import { Button, FormControl, MenuItem, Select, SelectChangeEvent, useMediaQuery } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Empty from '@/assets/empty.png';
import { RootState } from "@/redux/store";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { useSelector, useDispatch } from "react-redux";
import MapCohortsSaved from "@/components/createCohort/cohortMapper";
import { setClickedCohort } from "@/redux/UserSlice";
import Instructor from "@/components/instructor/EmptyInstructor";
import CreateCohortModal from "@/components/curentCohort/dialog";

export default function Cohorts() {
    const [isOpen, setOpen] = useState<boolean>(false);
    const cohortsSaved: Cohort[] = useSelector((state:RootState)=> state.cohorts)
    const [popUp,setPopUp]= useState(false);
    const dispatch = useDispatch()
    const [selectedIndex, setSelectedIndex] = useState<number>(0);
    const isMdScreen = useMediaQuery('(min-width: 768px)');
    const handleClick = (index: number) => {
        setSelectedIndex(index)
        dispatch(setClickedCohort(cohortsSaved[index]))
    };
    const handleSelectChange = (event: SelectChangeEvent<number>) => {
        setSelectedIndex(Number(event.target.value))
    };
    const popupRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
                setPopUp(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    },[isOpen, cohortsSaved]);
    const EmptyCohort = () => {
        return (
            <div className={'flex justify-center items-center mt-[100px] md:mt-[100px] md:mr-[15%] flex-col gap-2 md:gap-5 w-full'}>
                <div className={'m-[10px] md:m-[10px]'}>
                    <Image src={Empty} alt={''} className={'w-[100px] h-auto md:w-[200px]'} />
                </div>
                <div className={'flex justify-center items-center flex-col gap-3'}>
                    <p className={'font-semibold text-sm text-black'}>Empty Space</p>
                    <p className={'text-sm md:text-xs px-[30px] md:px-0 text-center text-black'}>
                        No cohort has been created yet, let&#39;s get started by clicking the button below
                    </p>
                    <Button variant='contained' onClick={() => setOpen(true)} sx={{fontSize: 'small',textTransform:'none'}}>Create
                        a Cohort
                    </Button>
                </div>
            </div>
        );
    }

    const moreActions =()=>{
        setPopUp(!popUp)
    }

    const PopUp=()=>{
        const p_style: string=  `hover:border-[1px] hover:border-[#ededed] text-xs my-[7px] cursor-pointer
                                 hover:bg-blue-100 hover:rounded-md p-[5px_7px]`;
        return (
            <div className={`shadow-md absolute bg-white m-[-40px_95px_0_0] md:-mt-[15px] md:ml-[15%] md:my-0
             rounded-md gap-x-[10px] px-[5px] w-[160px]`} ref={popupRef}>
                <p className={`${p_style}`}>Publish a Poll</p>
                <p className={p_style}>Schedule an Event</p>
                <p className={p_style}>Make an announcement</p>
            </div>
        )
    };
    const InputAndActionsBar=()=> (
        <div className={`${cohortsSaved.length === 0 ? 'hidden': styles.mapCohortDivInner1} grid-rows-2 md:grid-rows-1 mt-[-10px]`}>
            <section className={styles.mapCohortDivSection1}>
                <SearchIcon style={{width: '32px', height: '32px', border: 'none'}}/>
                <input type="text" className={'w-[100%] md:w-[70%] h-[100%] md:h-[30px] outline-0 '}/>
            </section>
            <section className={'flex justify-around md:justify-between order-1 md:order-2'}>
                <Button variant={'contained'} sx={{
                    background: '#008EEF',
                    color: '#ffffff',
                    textTransform: 'none',
                    fontWeight: 'thin',
                    fontSize: 'small',
                    width: {xs:'40%',md:'155px'},
                    height: '40px',
                    marginRight: '10px'
                }} onClick={() => setOpen(true)}>
                    Create a cohort
                </Button>
                <Button endIcon={<MoreVertIcon/>} variant={'outlined'} onClick={moreActions}
                        sx={{
                            color: '#008EEF', background: '#ffffff', height: '40px', overflow: 'none',width: {xs:'40%',md:'155px'},
                            fontWeight: 'thin', fontSize: 'small', textTransform: 'none', position: 'relative'
                        }}>
                    more actions
                </Button>
                {popUp && (
                    <PopUp/>)}
            </section>
        </div>

    )
    const MapCohorts = () => (
            <div className={styles.mapCohort}>
                <InputAndActionsBar/>
                <MapCohortsSaved/>
            </div>
        )

    const groups: CohortGroup[] = [
        {image: <PeopleAltIcon  className="group-hover:text-blue-500 mt-[-2px] md:mt-[-10px]" sx={{ color: 'inherit' }} />,
            text: 'Cohorts', component: cohortsSaved.length === 0 ? <EmptyCohort/> : <MapCohorts/>},
        {image: <MenuBookIcon className="group-hover:text-blue-500 mt-[-2px] md:mt-[-10px]" sx={{ color: 'inherit' }}/>,
            text: 'Programs', component: <EmptyCohort/>},
        {image: <WorkOutlineIcon className="group-hover:text-blue-500 mt-[-2px] md:mt-[-10px]" sx={{ color: 'inherit' }}/>,
            text: 'Instructors', component: <Instructor/>},
        {image: <PermIdentityIcon className="group-hover:text-blue-500 mt-[-2px] md:mt-[-10px]" sx={{ color: 'inherit' }}/>,
            text: 'Learners', component: <EmptyCohort/>}
    ];

    const SmallScreenComponent = () => (
        <div className={'flex flex-col md:hidden ml-[1%] mt-[-30px]'}>
            <div className={'h-[50px]'}></div>
            <p className={'text-xs w-full ml-[5px]'}>Switch between tabs</p>
            <FormControl sx={{width: '85vw'}}>
                <Select labelId="my-select-label" value={selectedIndex} onChange={handleSelectChange}
                        displayEmpty sx={{width: '100%'}}>
                    {groups.map((item, index) => (
                        <MenuItem key={index} value={index} sx={{
                            display: 'flex', justifyContent: 'start',
                            alignItems: 'center', paddingInline: '10px'}}>
                            <div className={'flex gap-[10px] mt-[-20px]'}>
                                <div className={`mt-[-5px] ${selectedIndex === index ? styles.svg : ''}`}>{item.image}</div>
                                <p>{item.text}</p>
                            </div>
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    )
    const close=()=> setOpen(false)


    return (
        <div className={styles.cohortsDiv}>
            <div className={styles.groupPack}>
                {  isMdScreen ? (groups.map((item, index)=>(
                        <div key={index} onClick={() => handleClick(index)}
                             className={`flex gap-[20px] my-[10px] ${selectedIndex === index ? 'bg-blue-100 rounded-lg  p-[20px]' : 'pl-[30px]'}`}>
                            <div className={selectedIndex === index ? styles.svg : ''}>
                                {item.image}
                            </div>
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
                <div className={`w-[100%] h-[60%] flex ${cohortsSaved.length ===0? 'md:m-[-7%_0_3%_0]': '' }`}>
                    {groups[selectedIndex].component}
                </div>
            </section>
            <CreateCohortModal isOpen={isOpen} onClose={close}/>
        </div>
    )
}