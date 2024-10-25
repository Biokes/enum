'use client'
import { Cohort } from "@/interfaces/interfaces";
import styles from "@/styles/index.module.css";
import Link from "next/link";
import Image from "next/image";
import CohortIcon from "@/assets/user.png";
import { format } from "date-fns";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import React, { useEffect, useState } from "react";
import { setClickedCohortIndex } from "@/redux/UserSlice";
import { useDispatch } from 'react-redux';
interface MapCohortProps {
    cohorts: Cohort[];
}

export default function MapCohortsSaved({ cohorts: initialCohorts }: MapCohortProps) {
    const dispatch = useDispatch();
    const [cohorts, setCohortsState] = useState<Cohort[]>(initialCohorts);

    useEffect(()=>{
        const predictedData: string|null = sessionStorage.getItem('cohorts')
        setCohortsState(predictedData ? JSON.parse(predictedData) : null);
        console.log('Data gotten :', cohorts)
    }, [dispatch]);

    const viewCohort = (index: number) => {
        dispatch(setClickedCohortIndex(index));
    };

    const PopUp = () => (
        <div className={styles.moreActionsPopUp}>
            <p>Publish a Poll</p>
            <p>Schedule an Event</p>
            <p>Make an announcement</p>
        </div>
    );

    return (
        <div className={styles.mapCohortsCreated}>
            {cohorts.map((cohort, index) => (
                <Link key={index} className={styles.mappedCohortsContainer}
                      onClick={() => viewCohort(index)} href={'/currentCohort'}>
                    <section className={'flex gap-x-[20px] items-center justify-center'}>
                        <div className="w-[59px] h-[59px] overflow-hidden rounded-md">
                            {typeof cohort.avatar === 'string' ?
                                <Image src={cohort.avatar} alt="" width={59} height={59} />
                                :
                                <Image src={cohort.avatar.src} alt="" width={59} height={59} className="object-cover object-center" />
                            }
                        </div>
                        <section className={'md:h-[44px] flex flex-col justify-center items-start'}>
                            <p className={styles.cohortName}>{cohort.name}</p>
                            <section className={'flex items-start justify-center gap-x-[15px]'}>
                                <p className={'text-xs truncate max-w-[70px]'}>{cohort.description}</p>
                                <div className={'flex gap-x-[10px]'}>
                                    <Image src={CohortIcon} width={12} height={12} alt={''} />
                                    <p className={'text-xs'}> 25 Learners</p>
                                </div>
                            </section>
                        </section>
                    </section>
                    <div className={'flex gap-[10px]'}>
                        <p className={styles.dateCreated}>Created {format(cohort.dateCreated, 'dd MMM, yyyy')}</p>
                        <MoreVertIcon onClick={PopUp} sx={{ hover: { backgroundColor: 'gray', borderRadius: '25%' } }} />
                    </div>
                </Link>
            ))}
        </div>
    );
}
