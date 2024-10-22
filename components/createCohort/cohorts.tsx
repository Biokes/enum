'use client';
import { CohortGroup } from "@/interfaces/interfaces";
import CohortIcon from '@/assets/user.png';
import briefcase from '@/assets/briefcase.svg';
import users from '@/assets/users.svg';
import openedBook from '@/assets/book-open.svg';
import Image from 'next/image';
import styles from '@/styles/index.module.css';
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, IconButton,
    MenuItem, Select, SelectChangeEvent, TextField, useMediaQuery} from "@mui/material";
import React, { useState } from "react";
import { CloseIcon } from "next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon";
import Empty from '@/assets/empty.png';

export default function Cohorts() {
    const [isOpen, setOpen] = useState<boolean>(false);
    const [selectedIndex, setSelectedIndex] = useState<number>(0);
    const isMdScreen = useMediaQuery('(min-width: 768px)');

    const handleClick = (index: number) => {
        setSelectedIndex(index);
    };

    const handleSelectChange = (event: SelectChangeEvent<number>) => {
        setSelectedIndex(Number(event.target.value));
    };

    const CreateCohortDialog = () => {
        return (
            <Dialog open={isOpen}>
                <DialogTitle id='dialog-title'>
                    Cohorts
                    <IconButton style={{ float: 'right' }} onClick={() => setOpen(false)}>
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                {/*<DialogContent>*/}
                {/*    <TextField label="Create Cohort" variant="outlined" fullWidth />*/}
                {/*    <TextField label="Description" multiline rows={5} variant="outlined" fullWidth />*/}
                {/*    <TextField label="Program" variant="outlined" fullWidth />*/}
                {/*</DialogContent>*/}
                <DialogActions>
                    <Button variant='outlined' onClick={() => setOpen(false)}>Cancel</Button>
                    <Button variant='contained'>Create Cohort</Button>
                </DialogActions>
            </Dialog>
        );
    };

    const Instructors = () => {
        return (
            <div className={'flex justify-center items-center flex-col gap-2 md:gap-5'}>
                <div className={'m-[10px] md:m-[30px]'}>
                    <Image src={Empty} alt={''} />
                </div>
                <div className={'flex justify-center items-center flex-col gap-3'}>
                    <p className={'font-semibold text-sm'}>Empty Space</p>
                    <p className={'text-sm md:text-xs px-[30px] md:px-0 text-center'}>
                        No cohort has been created yet, let&#39;s get started by clicking the button below
                    </p>
                    <Button variant='contained' onClick={() => setOpen(true)}>Create a Cohort</Button>
                </div>
            </div>
        );
    };

    const groups: CohortGroup[] = [
        { image: users, text: 'Cohorts', component: <CreateCohortDialog /> },
        { image: briefcase, text: 'Instructors', component: <Instructors /> },
        { image: CohortIcon, text: 'Learners', component: <Instructors /> },
        { image: openedBook, text: 'Programs', component: <Instructors /> }
    ];

    return (
        <div className={styles.cohortsDiv}>
            <div className={styles.groupPack}>
                {isMdScreen ? (
                    groups.map((item, index) => (
                        <div key={index} onClick={() => handleClick(index)}
                             className={`flex gap-[20px] my-[10px] ${selectedIndex === index ? 'bg-blue-100 rounded-lg  p-[20px]' : 'pl-[30px]'}`}>
                            <Image src={item.image} alt="" />
                            <p className={`${selectedIndex === index ? 'text-blue-400' : 'text-black'}`}>{item.text}</p>
                        </div>
                    ))
                ) : (
                    <div className={'flex flex-col'}>
                        <p className={'text-xs w-full'}>Switch between tabs</p>
                        <FormControl sx={{width:'80vw'}}>
                            <Select labelId="my-select-label" value={selectedIndex} onChange={handleSelectChange}
                                    displayEmpty  sx={{ width: '100%'}}>
                                {groups.map((item, index) => (
                                    <MenuItem key={index} value={index} sx={{display:'flex', justifyConntent:'center',
                                    alignItems:'center',paddingInline:'10px'}}>
                                        <div className={'flex gap-[10px] mt-[-20px]'}>
                                            <Image src={item.image} alt="" />
                                            <p>{item.text}</p>
                                        </div>
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                )}
            </div>
            <section className={`mt-[20px] md:mt-0`}>
                <p className={`${styles.fontText} text-lg font-semibold mt-[10px] hidden ${selectedIndex === 0 ? 'md:flex' : ''}`}>Cohorts</p>
                <div className={'w-full flex justify-center items-center'}>
                    {groups[selectedIndex].component}
                </div>
            </section>
        </div>
    );
}
