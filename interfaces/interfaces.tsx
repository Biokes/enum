import {StaticImageData} from "next/image";
import {ReactNode} from "react";

export interface Interfaces {
    props:number
}
export interface CohortGroup{
    image:StaticImageData,
    text:string,
    component: ReactNode
}
export interface UserDetails{
    username: string
}
export interface Cohort{
    name:string,
    description:string,
    avatar: StaticImageData | string,
    startDate:Date | null,
    endDate:Date | null,
    program:string,
    id:number,
    dateCreated:Date,
    numberOfLearners:number
}
export interface ProviderProps{
    children: ReactNode
}