import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button, useMediaQuery } from '@mui/material';
import styles from '@/styles/index.module.css';
import Pics1 from '@/assets/create_cohort_picture.png';
import Pics2 from '@/assets/create_cohort.png';

export default function Hero() {
    const isMdScreen = useMediaQuery('(min-width: 768px)');
    const backgroundImage = isMdScreen ? Pics1 : Pics2;

    return (
        <div className={`${styles.heroImageDiv}`}
             style={{backgroundImage: `url(${backgroundImage.src})`,}}>
            <div className={styles.heroAbsolute}>
                <section className={styles.boxSection}>
                    <div className={styles.heroPurpleBox}>S</div>
                    <p>Semicolon Africa</p>
                </section>
                <Button sx={{ backgroundColor:'#ffffff',color:'#020202',textTransform:'none',
                    paddingInline:'15px',fontSize:'small'}}>
                    View Profile <ArrowForwardIcon sx={{width :'16px', height:'16px',marginLeft:'10px'}}/>
                </Button>
            </div>
        </div>
    );
}
