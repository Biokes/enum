'use client'
import Image from 'next/image'
import enum_logo from '../../assets/enum_logo.png'
import styles from '@/styles/index.module.css'
import {CreateCohortProps} from '@/interfaces/CreateCohortProps'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Badge from '@mui/material/Badge';
import AppsIcon from '@mui/icons-material/Apps';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {useState} from "react";
import enumText from '../../assets/enumText.png';
import Link from 'next/link'
import human from '@/assets/Ellipse 131.png'

export default function Navbar({props}:CreateCohortProps){
    const list = [
        ['Home','/home'],
        ['Workspace','/workspace'],
        ['Resources Library', '/resource']
    ]
    const styleText= 'flex justify-center items-center text';
    const getNumberOfNotification =0;
    const username='Obianuju';
    const [isOpen, setOpen] = useState<boolean>(false)
    return (
        <div className={styles.navbar}>
            <div className={styles.navbarLogo}>
                <Image src={enum_logo} alt={''} width={25} height={15}/>
                <div>
                    <Image src={enumText} alt={''} width={66.07} height={14.33}/>
                </div>
            </div>
            <ul className={styles.navbarList}>
                {
                    list.map(([text, url], index) => (
                        <div key={index} className={`${props===index?styles.navbarListDiv:''}`}>
                            <Link href={url}>
                                <p className={`${props===index?styles.currentNavbarList:styles.navbarHomePage}`}>{text}</p>
                            </Link>
                        </div>
                    ))
                }
            </ul>
            <div className={styles.navbarRightSide}>
                <Badge badgeContent={getNumberOfNotification}>
                    <NotificationsNoneIcon/>
                </Badge>
                <section>
                    <div className={'gap-[20px]'}>
                        <Image src={human} width={35} height={25} alt={''}/>
                        <div className={styles.hideAndShow}>
                            <p className={`${styleText} ${styles.hideAndShow}`}>{username}</p>
                            <div className={`${styleText} ${styles.hideAndShow}`} onClick={() => setOpen(!isOpen)}>
                                {isOpen ? <ExpandMoreIcon/> : <KeyboardArrowUpIcon/>}
                            </div>
                        </div>
                    </div>
                    <div className={styles.hideAndShow}>
                        <AppsIcon sx={{width: '35px', height: '35px', color: '#008EEF'}}/>
                    </div>
                </section>

            </div>
        </div>
    )
}