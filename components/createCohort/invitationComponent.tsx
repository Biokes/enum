import React from "react";
import {InvitationFormProps} from "@/interfaces/interfaces";
import {useDispatch} from "react-redux";
import {setHeroText} from "@/redux/UserSlice";
import styles from "@/styles/index.module.css";
import {Button} from "@mui/material";

const InvitationComponent=(data: string, setData: (value: (((prevState: string) => string) | string)) => void)=>{
    const dispatch= useDispatch();
    const InvitationForm: React.FC<InvitationFormProps> = ({setInvitation}) => {
        const handleSubmit = (event: React.FormEvent) => {
            event.preventDefault();
            setInvitation(false);
            dispatch(setHeroText('Invite successfully sent'))
        };
        return (
            <form className="flex flex-col gap-[30px] md:mt-[30px]">
                <p className={styles.ThickDmSansFont}>Invite Instructors</p>
                <input
                    placeholder="Email"
                    value={data}
                    type="text"
                    onChange={(e) => {
                        e.preventDefault()
                        setData(e.target.value)
                    }}
                    className="w-[80vw] md:w-[400px] h-[50px] mh:h-[70px] rounded border-[1px] border-gray-300 pl-[20px]"
                />
                <Button
                    disabled={!data}
                    sx={{
                        width: {
                            sm: '150px',
                            md: '200px',
                        },
                    }}
                    variant="contained"
                    onClick={handleSubmit}
                >
                    Send Invite
                </Button>
            </form>
        );
    }
    return InvitationForm;
}
export default InvitationComponent