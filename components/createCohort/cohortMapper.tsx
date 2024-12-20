'use client'
import { Cohort } from "@/interfaces/interfaces";
import styles from "@/styles/index.module.css";
import Image from "next/image";
import CohortIcon from "@/assets/user.png";
import { format } from "date-fns";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import React, { useEffect, useRef, useState } from "react";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import {setClickedCohort, setClickedCohortIndex} from "@/redux/UserSlice";

export default function MapCohortsSaved() {
    const [cohortsState, setCohortsState] = useState<Cohort[]>([]);
    const cohortsSaved = useSelector((state: RootState) => state.cohorts);
    const popupRef = useRef<HTMLDivElement>(null);
    const [isPopUp, setPopUp] = useState(false);
    const [isNextPage, setNextPage] = useState(false);
    useEffect(() => {
        setNextPage(false);
        if (cohortsSaved && cohortsSaved !== cohortsState) {
            setCohortsState(cohortsSaved);
        }
        const handleClickOutside = (event: MouseEvent) => {
            if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
                setPopUp(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [cohortsSaved, cohortsState]);
    const dispatch = useDispatch();
    const viewCohort = (index: number, cohort:Cohort) => {
        dispatch(setClickedCohortIndex(index));
        dispatch(setClickedCohort(cohort))
        setNextPage(!isNextPage);
    };
    const togglePopUp = () => setPopUp(!isPopUp);
    const PopUp = () => (
        <div className={`${styles.moreActionsPopUp}`} ref={popupRef}>
            <p>Publish a Poll</p>
            <p>Schedule an Event</p>
            <p>Make an announcement</p>
        </div>
    );
    const getImage = (cohort: Cohort) => {
        if (typeof cohort.avatar === "string") {
            return cohort.avatar;
        } else {
            return cohort.avatar.src;
        }
    };
    return (
        <div className={`${isNextPage ? 'hidden' : styles.mapCohortsCreated}`}>
            {cohortsState.map((cohort, index) => (
                <div key={index} className={styles.mappedCohortsContainer} onClick={() => viewCohort(index,cohort)}>
                    <section className={'flex gap-x-[20px] items-center justify-center'}>
                        <div className="w-[59px] h-[59px] overflow-hidden rounded-md">
                            <Image src={getImage(cohort)} alt="" width={59} height={59}
                                   className="object-cover object-center" />
                        </div>
                        <section className={'md:h-[44px] flex flex-col justify-center items-start'}>
                            <p className={styles.cohortName}>{cohort.name}</p>
                            <section className={'flex items-start justify-center gap-x-[15px]'}>
                                <p className={'text-sm md:text-xs truncate max-w-[80px] md:max-w-[70px]'}>{cohort.description}</p>
                                <div className={'flex gap-x-[10px] justify-center items-center'}>
                                    <Image src={CohortIcon} className={'w-[25px] h-[25px] md:w-[12px] md:h-[12px] object-contain object-center'} alt={''} />
                                    <p className={'text-sm md:text-xs'}> 25 Learners</p>
                                </div>
                            </section>
                        </section>
                    </section>
                    <div className={'flex gap-[10px]'}>
                        <p className={` hidden md:flex ${styles.dateCreated}`}>Created {format(cohort.dateCreated, 'dd MMM, yyyy')}</p>
                        <MoreVertIcon onClick={togglePopUp} sx={{ hover: { backgroundColor: 'gray', borderRadius: '25%' } }} className={'hidden md:flex'}/>
                        {isPopUp && <PopUp />}
                    </div>
                </div>
            ))}
        </div>
    );
}
