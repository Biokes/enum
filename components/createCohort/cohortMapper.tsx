// 'use client'
// import { Cohort } from "@/interfaces/interfaces";
// import styles from "@/styles/index.module.css";
// import Image from "next/image";
// import CohortIcon from "@/assets/user.png";
// import { format } from "date-fns";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import React, {useEffect, useRef, useState} from "react";
// import {RootState} from "@/redux/store";
// import {useDispatch, useSelector} from "react-redux";
// import {setClickedCohortIndex} from "@/redux/UserSlice";
//
// export default function MapCohortsSaved() {
//     const allCohorts: Cohort[] = [];
//     const [cohortsState, setCohortsState] = useState<Cohort[]>(allCohorts);
//     const cohortsSaved = useSelector((state: RootState) => state.cohorts);
//     const popupRef = useRef<HTMLDivElement>(null);
//     const [isPopUp, setPopUp] = useState<boolean>(false)
//     const [isNextPage, setNextPage] = useState<boolean>(false);
//     useEffect(() => {
//         setNextPage(false);
//         if (cohortsSaved && cohortsSaved !== cohortsState) {
//             setCohortsState(cohortsSaved);
//         }
//             const handleClickOutside = (event: MouseEvent) => {
//                 if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
//                     setPopUp(false);
//                 }
//             };
//             document.addEventListener("mousedown", handleClickOutside);
//             return () => document.removeEventListener("mousedown", handleClickOutside);
//     },[cohortsSaved]);
//     const dispatch = useDispatch();
//     const viewCohort = (index: number) => {
//         dispatch(setClickedCohortIndex(index))
//         setNextPage(!isNextPage)
//     }
//     const PopUp = () => (
//         <div className={styles.moreActionsPopUp} ref={popupRef}>
//             <p>Publish a Poll</p>
//             <p>Schedule an Event</p>
//             <p>Make an announcement</p>
//         </div>
//     );
//     return (
//         <div className={`${ isNextPage?'hidden': styles.mapCohortsCreated}`}>
//             {
//                cohortsState.map((cohort, index) => (
//                 <div key={index} className={styles.mappedCohortsContainer}
//                       onClick={() => viewCohort(index)}>
//                     <section className={'flex gap-x-[20px] items-center justify-center'}>
//                         <div className="w-[59px] h-[59px] overflow-hidden rounded-md">
//                             {typeof cohort.avatar === 'string' ?
//                                 <Image src={cohort.avatar} alt="" width={59} height={59} />
//                                 :
//                                 <Image src={cohort.avatar.src} alt="" width={59} height={59}
//                                        className="object-cover object-center" />
//                             }
//                         </div>
//                         <section className={'md:h-[44px] flex flex-col justify-center items-start'}>
//                             <p className={styles.cohortName}>{cohort.name}</p>
//                             <section className={'flex items-start justify-center gap-x-[15px]'}>
//                                 <p className={'text-xs truncate max-w-[70px]'}>{cohort.description}</p>
//                                 <div className={'flex gap-x-[10px]'}>
//                                     <Image src={CohortIcon} width={12} height={12} alt={''} />
//                                     <p className={'text-xs'}> 25 Learners</p>
//                                 </div>
//                             </section>
//                         </section>
//                     </section>
//                     <div className={'flex gap-[10px]'}>
//                         <p className={styles.dateCreated}>Created {format(cohort.dateCreated, 'dd MMM, yyyy')}</p>
//                         <MoreVertIcon onClick={PopUp} sx={{ hover: { backgroundColor: 'gray', borderRadius: '25%' } }} />
//                         {isPopUp && <PopUp/>}
//                     </div>
//                 </div>
//             ))
//             }
//         </div>
//     );
// }
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
import { setClickedCohortIndex } from "@/redux/UserSlice";

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
    }, [cohortsSaved]);
    const dispatch = useDispatch();
    const viewCohort = (index: number) => {
        dispatch(setClickedCohortIndex(index));
        setNextPage(!isNextPage);
    };
    const togglePopUp = () => setPopUp(!isPopUp);
    const PopUp = () => (
        <div className={styles.moreActionsPopUp} ref={popupRef}>
            <p>Publish a Poll</p>
            <p>Schedule an Event</p>
            <p>Make an announcement</p>
        </div>
    );
    return (
        <div className={`${isNextPage ? 'hidden' : styles.mapCohortsCreated}`}>
            {cohortsState.map((cohort, index) => (
                <div key={index} className={styles.mappedCohortsContainer} onClick={() => viewCohort(index)}>
                    <section className={'flex gap-x-[20px] items-center justify-center'}>
                        <div className="w-[59px] h-[59px] overflow-hidden rounded-md">
                            <Image src={cohort.avatar.src} alt="" width={59} height={59}
                                   className="object-cover object-center" />
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
                        <MoreVertIcon onClick={togglePopUp} sx={{ hover: { backgroundColor: 'gray', borderRadius: '25%' } }} />
                        {isPopUp && <PopUp />}
                    </div>
                </div>
            ))}
        </div>
    );
}
