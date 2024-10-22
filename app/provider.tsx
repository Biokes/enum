'use client'
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import {ProviderProps} from '@/interfaces/interfaces'

export default function Providers({children}: ProviderProps){
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}