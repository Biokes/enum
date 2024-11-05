import {fireEvent, render, screen} from '@testing-library/react'
import {Provider} from "react-redux";
import userReducer from '@/redux/UserSlice'
import {configureStore} from "@reduxjs/toolkit";
import Navbar from "@/components/createCohort/navbar";
import {useRouter} from "next/router";

jest.mock('next/router', () => ({
    useRouter: jest.fn(),
}));

describe("", ()=>{
    const userStore = configureStore({
        reducer:{
            user: userReducer,
        }
    })
    it('test navbar displays normally on large screens',()=>{
        render(
            <Provider store={userStore}>
                <Navbar props={1}/>
            </Provider>
        );
        expect(screen.getByText('Home')).toBeInTheDocument();
        expect(screen.getByText('Workspace')).toBeInTheDocument();
        expect(screen.getByText('Resources Library')).toBeInTheDocument();
    })
    it('test navbar text clicks routes to another page',()=>{
        const mockNavigate = jest.fn();
        ( useRouter as jest.Mock).mockReturnValue({
            push:mockNavigate,
        })
        render(
            <Provider store={userStore}>
                <Navbar props={1}/>
            </Provider>
        )
        fireEvent.click(screen.getByText('Home'))
        expect(mockNavigate).not.toHaveBeenCalled();
        fireEvent.click(screen.getByText('Resources Library'))
        expect(mockNavigate).not.toHaveBeenCalled();
        expect(screen.getByText('Onowomano')).toBeInTheDocument();
    })
})