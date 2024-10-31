// import React, {useState} from "react";
// import {useDispatch} from "react-redux";
// import {setHeroText} from "@/redux/UserSlice";
// import styles from "@/styles/index.module.css";
// import {Button} from "@mui/material";
//
// export default function InvitationComponent(props:{state:{initialValue:boolean},setInvitation: (value: boolean) => void}){
//     const dispatch= useDispatch();
//     const [data,setData] = useState('');
//         const handleSubmit = (event: React.FormEvent) => {
//             event.preventDefault();
//             props.setInvitation(!props.state.initialValue);
//             dispatch(setHeroText('Invite successfully sent'))
//         }
//
//         return (
//             <form className="flex flex-col gap-[30px] md:mt-[30px]">
//                 <p className={styles.ThickDmSansFont}>Invite Instructors</p>
//                 <input
//                     placeholder="Email"
//                     value={data}
//                     type="text"
//                     onChange={(e) => {
//                         setData(e.target.value)
//                     }}
//                     className="w-[80vw] md:w-[400px] h-[50px] mh:h-[70px] rounded border-[1px] border-gray-300 pl-[20px]"
//                 />
//                 <Button
//                     disabled={!data}
//                     sx={{
//                         width: {
//                             sm: '150px',
//                             md: '200px',
//                         },
//                     }}
//                     variant="contained"
//                     onClick={handleSubmit}
//                 >
//                     Send Invite
//                 </Button>
//             </form>
//         );
//     }
//     return (
//         <>
//             {InvitationForm}
//         </>
//     );
// }
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setHeroText } from "@/redux/UserSlice";
import styles from "@/styles/index.module.css";
import { Button } from "@mui/material";

interface UseStateProps {
    initialState: boolean;
    initialStateClosure: (value: boolean) => void;
}

export default function InvitationComponent(state:UseStateProps) {
    const dispatch = useDispatch();
    const [data, setData] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        state.initialStateClosure(!state.initialState);
        setData('')
        dispatch(setHeroText('Invite successfully sent'));
    };

    return (
        <form className="ml-[5%] md:ml-0 flex flex-col gap-[15px] mt-[15%] md:mt-[15px]" onSubmit={handleSubmit}>
            <p className={styles.ThickDmSansFont}>Invite Instructors</p>
            <input placeholder="Email" value={data} type="text"
                onChange={(e) => setData(e.target.value)}
                className="w-[80vw] md:w-[400px] h-[50px] mh:h-[70px] rounded border-[1px] border-gray-300 pl-[20px]"
            />
            <Button disabled={!data} sx={{width: {xs: '150px', md: '200px',},}} variant="contained" type="submit">
                Send Invite
            </Button>
        </form>
    );
}
