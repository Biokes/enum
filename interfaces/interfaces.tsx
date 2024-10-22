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