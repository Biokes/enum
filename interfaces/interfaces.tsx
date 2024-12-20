import {StaticImageData} from "next/image";
import {ReactNode} from "react";

export interface Interfaces {
    props:number
}
export interface CohortGroup{
    image:ReactNode ,
    text:string,
    component: ReactNode
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
export interface Course{
    name:string,
    image:StaticImageData,
    modules:number
}
export interface CohortRightProps {
    text:string,
    component:ReactNode
}
export interface UserDetails{
    username: string,
    clickedCohortIndex:number,
    clickedCohort:Cohort,
    heroText: string,
    popUpIndex:number,
    searchContent:string
}
export interface Organization{
    image:StaticImageData,
    orgName:string
}
export interface InstructorData{
    name:string,
    email:string,
    instructor:number,
    active:boolean,
    deleted:boolean,
    course: string,
    dateAdded: string,
    organization:Organization
}
export interface PopUpProps{
    isOpen: boolean
    onClose:()=>void
}
// export interface InvitationFormProps {
//     setInvitation: (value: boolean) => void;
// }