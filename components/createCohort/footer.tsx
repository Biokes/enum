'use client'
import styles from '@/styles/index.module.css';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import HouseSidingIcon from '@mui/icons-material/HouseSiding';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

export default function Footer(){
    return (
        <div className={styles.footer}>
            <div>
                <HouseSidingIcon/>
                <p>Home</p>
            </div>
            <div>
                <HomeRepairServiceIcon/>
                <p>Workspace</p>
            </div>
            <div>
                <MenuBookIcon/>
                <p>Resources</p>
            </div>
            <div >
                <CalendarTodayIcon/>
                <p>Schedule</p>
            </div>
        </div>
    )
}