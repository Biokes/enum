'use client'
import styles from '@/styles/index.module.css';
import book from '@/assets/book-open.svg'
import Image from 'next/image';
import briefCase from '@/assets/briefcase.svg'
import home from '@/assets/home.png'
import calendar from '@/assets/calendar.svg'

export default function Footer(){
    return (
        <div className={styles.footer}>
            <section>
                <Image src={home} alt={''}/>
                <p>Home</p>
            </section>
            <section>
                <Image src={briefCase} alt={''}/>
                <p>Workspace</p>
            </section>
            <section>
                <Image src={book} alt={''}/>
                <p>Resources</p>
            </section>
            <section>
                <Image src={calendar} alt={''}/>
                <p>Schedule</p>
            </section>
        </div>
    )
}