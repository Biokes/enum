import React, { FC, useEffect, useState } from 'react';
import { Modal, Box, Typography, TextField, IconButton, MenuItem, DialogActions, Button } from '@mui/material';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import CloseIcon from '@mui/icons-material/Close';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import { useDispatch } from 'react-redux';
import Image from 'next/image';
import { saveCohort } from "@/redux/cohortSlice";
import { Cohort } from "@/interfaces/interfaces";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import { useDropzone } from 'react-dropzone';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const CreateCohortModal: FC<ModalProps> = ({ isOpen, onClose }) => {
    const dispatch = useDispatch();
    const [selectedFile, setSelectedFile] = useState<string | null>(null);
    const [cohortName, setCohortName] = useState("");
    const [description, setDescription] = useState("");
    const [program, setProgram] = useState("");
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [formError, setFormError] = useState("");

    useEffect(() => {
        if (isOpen) {
            setSelectedFile(null);
            setCohortName("");
            setDescription("");
            setProgram("");
            setStartDate(null);
            setEndDate(null);
            setFormError("");
        }
    }, [isOpen]);

    const onDrop = (acceptedFiles: File[]) => {
        const file = acceptedFiles[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setSelectedFile(reader.result as string);
        };
        reader.readAsDataURL(file);
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    const handleSubmit = () => {
        if (!cohortName || !description || !program || !startDate || !endDate || !selectedFile) {
            setFormError("All fields are required.");
            return;
        }

        setFormError("");

        const cohortData: Cohort = {
            name: cohortName,
            description,
            program,
            startDate,
            endDate,
            dateCreated: new Date(),
            id: 1,
            numberOfLearners: 34,
            avatar: selectedFile,
        };

        dispatch(saveCohort(cohortData));
        onClose();
    };

    if (!isOpen) return null;

    return (
        <>
            <div className="fixed inset-0 bg-customBlue_dark bg-opacity-80 z-40" onClick={onClose}></div>

            <Modal open={isOpen} onClose={onClose}>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: { xs: '90%', sm: '600px' },
                        backgroundColor: 'background.paper',
                        boxShadow: 24,
                        p: { xs: 2, sm: 4 },
                        borderRadius: 2,
                        zIndex: 50,
                        overflowY: 'auto',
                        maxHeight: '90vh',
                    }}
                >
                    <IconButton
                        onClick={onClose}
                        sx={{ position: 'absolute', top: 8, right: 8 }}
                    >
                        <CloseIcon />
                    </IconButton>

                    <Typography variant="h6" component="h2" sx={{ mb: 2, color: '#475661', fontSize: { xs: '1.2rem', sm: '1.5rem' } }}>
                        Create a Cohort
                    </Typography>

                    <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
                        <Box sx={{ mb: 2 }}>
                            <Typography variant="body2" sx={{ mb: 1, color: '#475661' }}>Cohort Name</Typography>
                            <TextField fullWidth placeholder="Ex. Cohort 1" variant="outlined" size="small"
                                value={cohortName} onChange={(e) => {
                                    e.preventDefault()
                                    setCohortName(e.target.value)
                                }} InputProps={{ style: { color: '#475661' } }}/>
                        </Box>

                        <Box sx={{ mb: 2 }}>
                            <Typography variant="body2" sx={{ mb: 1, color: '#475661' }}>Description</Typography>
                            <TextField
                                fullWidth
                                multiline
                                rows={3}
                                placeholder="Ex. A space for Python developers"
                                variant="outlined"
                                size="small"
                                value={description}
                                onChange={(e) => {
                                    e.preventDefault()
                                    setDescription(e.target.value)
                                }}
                                InputProps={{ style: { color: '#475661' } }}
                            />
                        </Box>

                        <Box sx={{ mb: 2 }}>
                            <Typography variant="body2" sx={{ mb: 1, color: '#475661' }}>Program</Typography>
                            <TextField
                                select
                                fullWidth
                                value={program}
                                onChange={(e) => setProgram(e.target.value)}
                                variant="outlined"
                                size="small"
                                InputProps={{ style: { color: '#475661' } }}
                            >
                                <MenuItem value="" disabled>
                                    Select Program
                                </MenuItem>
                                {[
                                    { id: 1, name: "Product Design" },
                                    { id: 2, name: "Software Engineering" },
                                    { id: 3, name: "Techpreneurship" },
                                    { id: 4, name: "Dev-ops" },
                                    { id: 5, name: "Creative Design" },
                                    { id: 6, name: "UX Writer" },
                                ].map((program) => (
                                    <MenuItem key={program.id} value={program.name}>
                                        {program.name}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Box>

                        <Box sx={{ mb: 2, display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
                            <div>
                                <p className={'text-xs'}>Start Date</p>
                                <div className="relative">
                                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} placeholderText="23 Dec 2021"
                                                minDate={new Date()}
                                                dateFormat="dd MMM yyyy" className="w-full p-2 border rounded text-sm outline-none focus:ring-2
                                                 focus:ring-[#008eef] focus:border-[#008eef]"/>
                                    <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                      <CalendarTodayIcon className="h-[18px] w-[18px] text-[#475661]"/>
                                    </span>
                                </div>
                            </div>
                            <div>
                                <p className={'text-xs'}>End Date</p>
                                <div className="relative">
                                    <DatePicker selected={endDate} onChange={(date) => setEndDate(date)}
                                                minDate={new Date(new Date().setDate(new Date().getDate() + 1))}
                                                dateFormat="dd MM yyyy" placeholderText="23 Dec 2023"
                                                className="w-full p-2 border rounded text-sm outline-none focus:ring-2 focus:ring-[#008eef] focus:border-[#008eef]"/>
                                    <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                        <CalendarTodayIcon className="h-[18px] w-[18px] text-[#475661]"/>
                                    </span>
                                </div>
                            </div>
                        </Box>

                        <Box sx={{mb: 2}}>
                            <Typography variant="body2" sx={{mb: 1, color: '#475661'}}>Add a cohort avatar</Typography>
                            <Box
                                {...getRootProps()}
                                sx={{
                                    border: '2px dashed lightblue',
                                    borderRadius: '8px',
                                    textAlign: 'center',
                                    cursor: 'pointer',
                                    mt: 1,
                                    backgroundColor: '#eaf5fa',
                                    height: '100px',
                                    overflow: 'hidden'
                                }}
                            >
                                <input {...getInputProps()} />
                                {selectedFile ? (
                                    <Box sx={{ position: 'relative', height: '100%', width: '100%' }}>
                                        <Image
                                            src={selectedFile}
                                            alt="Selected file preview"
                                            layout="fill"
                                            objectFit="cover"
                                            style={{ borderRadius: '8px' }}
                                        />
                                    </Box>
                                ) : (
                                    <>
                                        {isDragActive ? (
                                            <Typography variant="body2" sx={{ color: '#475661' }}>Drop the files here ...</Typography>
                                        ) : (
                                            <>
                                                <FileUploadOutlinedIcon sx={{ fontSize: 40, color: '#475661' }} />
                                                <Typography variant="body2" sx={{ mt: 1, color: '#475661',fontWeight:'small' }}>
                                                    Drag and drop files here, or click to select files
                                                </Typography>
                                            </>
                                        )}
                                    </>
                                )}
                            </Box>
                            <div className="flex">
                                <ErrorOutlineOutlinedIcon sx={{ fontSize: 20, color: '#475661' }} />
                                {formError && <p className="text-xs text-red-500">{formError}</p>}
                            </div>
                        </Box>

                        <DialogActions sx={{ mt: 2 }}>
                            <Button variant="outlined" onClick={onClose}>Cancel</Button>
                            <Button variant="contained" type="submit">Create Cohort</Button>
                        </DialogActions>
                    </form>
                </Box>
            </Modal>
        </>
    );
};

export default CreateCohortModal;
