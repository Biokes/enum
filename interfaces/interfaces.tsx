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
    username: string,
    clickedCohortIndex:number
}
export interface Cohort{
    name:string,
    description:string,
    avatar: StaticImageData,
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
export interface Course{
    name:string,
    image:StaticImageData,
    modules:number
}
export interface CohortRigthProps {
    text:string,
    component:ReactNode
}