'use client';
import {Cohort, CohortGroup} from "@/interfaces/interfaces";
import CohortIcon from '@/assets/user.png';
import briefcase from '@/assets/briefcase.svg';
import users from '@/assets/users.svg';
import openedBook from '@/assets/book-open.svg';
import Image from 'next/image';
import styles from '@/styles/index.module.css';
import {Button, FormControl, InputAdornment, MenuItem, Select, SelectChangeEvent, TextField, useMediaQuery} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React, {useEffect, useState} from "react";
import Empty from '@/assets/empty.png';
import {RootState} from "@/redux/store";
import {useSelector} from "react-redux";
import {format} from 'date-fns';
// import {Accept, useDropzone} from "react-dropzone";
import {DialogComponent} from "@/components/createCohort/dialogComponent";

export default function Cohorts() {

    const [isOpen, setOpen] = useState<boolean>(false);
    useEffect(()=>{
    },[isOpen])

    // const onDrop = useCallback((acceptedFiles: File[]) => {
    //     if (acceptedFiles.length > 0) {
    //         const file = acceptedFiles[acceptedFiles.length-1];
    //         const imageUrl = URL.createObjectURL(file);
    //         setData((prevData) => ({
    //             ...prevData,
    //             avatar: imageUrl,
    //         }));
    //     }
    // }, []);
    // const accept: Accept = {
    //     'image/*': []
    // };
    // const { getRootProps, getInputProps, isDragActive } = useDropzone({
    //     onDrop,
    //     accept,
    // });
    const [selectedIndex, setSelectedIndex] = useState<number>(0);
    const isMdScreen = useMediaQuery('(min-width: 768px)');
    const [inputValue, setInputValue] = useState<string>('');
    // const [errors, setErrors] = useState<{ [key: string]: boolean }>({});
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };
    const handleClick = (index: number) => {
        setSelectedIndex(index);
    };
    const handleSelectChange = (event: SelectChangeEvent<number>) => {
        setSelectedIndex(Number(event.target.value));
    };
    const storeState =  useSelector((state:RootState)=> state.cohorts)
    const SelectedCohortPopUp=()=>{
       return (
           <div>

           </div>
       )
    };
    const Instructors = () => {
        return (
            <div className={'flex justify-center items-center flex-col gap-2 md:gap-5 w-full'}>
                <div className={'m-[10px] md:m-[30px]'}>
                    <Image src={Empty} alt={''} />
                </div>
                <div className={'flex justify-center items-center flex-col gap-3'}>
                    <p className={'font-semibold text-sm'}>Empty Space</p>
                    <p className={'text-sm md:text-xs px-[30px] md:px-0 text-center'}>
                        No cohort has been created yet, let&#39;s get started by clicking the button below
                    </p>
                    <Button variant='contained' onClick={() => setOpen(true)} sx={{fontSize:'extra-small'}}>Create a Cohort</Button>
                </div>
            </div>
        );
    };
    const MapCohorts = ()=>{
        const cohorts:Cohort[] = storeState
        return (
            <div className={'flex flex-col gap-[20px] overflow-y-auto md:w-full md:gap-y-[30px]'}>
                <div className={'h-[60px]'}>
                    <TextField
                        label="Enter your input" variant="outlined"
                        value={inputValue} onChange={handleInputChange}
                        sx={{
                            width:'120px'
                        }}
                        slotProps={{
                            input: {
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            },
                        }}
                    />
                    <section>
                        <Button variant={'contained'}>Create a cohort</Button>
                        <Button  endIcon={<MoreVertIcon />} variant={'outlined'}
                           sx={{color:'#008EEF', background:'#ffffff'}}>
                            more actions
                        </Button>
                    </section>
                </div>
                <div className={'gap-y-[15px]'}>
                    {
                        cohorts.map((cohort,index)=>(
                            <div key={index} className={'py-[10px] shadow-[0_4px_10px_2px] bg-white flex'}>
                              <section>
                                  {typeof cohort.avatar === 'string' ? (
                                      <Image src={cohort.avatar} alt="" width={50} height={50} className={'rounded-md'}/>
                                  ) : (<Image src={cohort.avatar.src} alt="" width={50} height={50}/>)}
                                  <div>
                                      <section>
                                          <p>{cohort.name}</p>
                                          <section className={'flex flex-col items-start justify-center'}>
                                              <p>{cohort.description}</p>
                                              <p> {cohort.numberOfLearners} Learners</p>
                                          </section>
                                      </section>
                                  </div>
                              </section>
                                <div className={'flex gap-[10px]'}>
                                    <p className={'text-sm font-thin'}>Date created: {format(cohort.dateCreated, 'dd MMM, yyyy')}</p>
                                    <MoreVertIcon onClick={()=><SelectedCohortPopUp/>}/>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
    const CreateCohortDialog = () => {
        const numberOfCohorts =storeState.length
        return (
            <div className={'flex flex-col md:ml-[100px]'}>
                {
                    numberOfCohorts===0?
                        <div className={'md:ml-[-300px]'}>
                            <Instructors/>
                        </div>
                        :
                        <MapCohorts/>
                }
            </div>
        );
    };
    const groups: CohortGroup[] = [
        { image: users, text: 'Cohorts', component: <CreateCohortDialog/> },
        { image: briefcase, text: 'Instructors', component: <Instructors /> },
        { image: CohortIcon, text: 'Learners', component: <Instructors /> },
        { image: openedBook, text: 'Programs', component: <Instructors /> }
    ];
    const SmallScreenComponent=()=> (
        <div className={'flex flex-col'}>
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
            <DialogComponent
                isOpen={isOpen}
                setOpen={setOpen}
                // getRootProps={getRootProps}
                // isDragActive={isDragActive}
                // getInputProps={getInputProps}
            />
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
                    <SmallScreenComponent/>
                )}
            </div>
            <section className={'w-full px-[20px] flex md:flex-col justify-center'}>
                <p className={` font-semibold hidden ${selectedIndex === 0 ? 'md:flex pt-[15px]' : ''}`}>Cohorts</p>
                <div className={'w-full flex justify-center items-center'}>
                    {groups[selectedIndex].component}
                </div>
            </section>
            <Dialog_Component/>
        </div>
    );
}
