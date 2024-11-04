import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";

interface DeleteInstructorDialogProps {
    isOpen: boolean;
    setOpen: (value: boolean) => void;
}

const DeleteInstructorDialog: React.FC<DeleteInstructorDialogProps> = ({ isOpen, setOpen }) => {
    return (
        <Dialog open={isOpen} className={'bg-opacity-80 bg-[#557790] inset-0 z-2'}>
            <DialogTitle>
                Delete Instructor
                <IconButton style={{float: 'right'}} onClick={() => setOpen(false)}>
                    <CloseIcon/>
                </IconButton>
            </DialogTitle>
            <DialogContent sx={{width: "100%"}}>
                <DialogContentText sx={{width: "100%"}}>
                    Deleting this Instructor cannot be undone,
                    but if you really want to, proceed by clicking the delete button.
                </DialogContentText>
            </DialogContent>
            <DialogActions sx={{width: '100%'}}>
                <Button variant={'text'} sx={{texTransform: 'none', fontWeight: 'bold', color: 'black'}}
                        onClick={() => {
                            setOpen(false)
                        }}>
                    Cancel
                </Button>
                <Button variant={'contained'} sx={{backgroundColor: 'red', text: 'white', fontWeight: 'bold'}}
                        onClick={() => {
                            setOpen(false)
                        }}>
                    Delete
                </Button>
            </DialogActions>
        </Dialog>
    );
}
export default DeleteInstructorDialog