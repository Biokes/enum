import {StaticImageData} from "next/image";
import {ReactNode} from "react";

export interface CreateCohortProps{
    props:number
}
export interface CohortGroup{
    image:StaticImageData,
    text:string,
    component: ReactNode
}