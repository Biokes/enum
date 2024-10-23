import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    TextField,
    Typography
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import infoIcon from "@/assets/upload.png";
import styles from "@/styles/index.module.css";
import React, { useState, useCallback } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Accept, useDropzone } from "react-dropzone";
import { Cohort } from "@/interfaces/interfaces";
import { useDispatch } from 'react-redux';
import { createCohort } from "@/redux/cohortSlice";

export const DialogComponent = ({ isOpen, setOpen }: { isOpen: boolean; setOpen: (value: (((prevState: boolean) => boolean) | boolean)) => void; }) => {
    const [nameError, setNameError] = useState<string>('');
    const [descriptionError, setDescriptionError] = useState<string>('');
    const [programError, setProgramError] = useState<string>('');
    const [startDateError, setStartDateError] = useState<string>('');
    const [endDateError, setEndDateError] = useState<string>('');
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const dispatch = useDispatch();

    const onDrop = useCallback((acceptedFiles: File[]) => {
        if (acceptedFiles.length > 0) {
            const file = acceptedFiles[0];
            const imageUrl = URL.createObjectURL(file);
            setImagePreview(imageUrl);
            setData(prevData => ({
                ...prevData,
                avatar: imageUrl,
            }));
        }
    }, []);

    const accept: Accept = { 'image/*': [] };
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept });

    const validate = (data: Cohort) => {
        let valid = true;
        setNameError('');
        setDescriptionError('');
        setProgramError('');
        setStartDateError('');
        setEndDateError('');

        if (!data.name) {
            setNameError('Cohort name is required');
            valid = false;
        }
        if (!data.description) {
            setDescriptionError('Description is required');
            valid = false;
        }
        if (!data.program) {
            setProgramError('Program name is required');
            valid = false;
        }
        if (data.startDate && data.endDate && data.startDate > data.endDate) {
            setStartDateError('Invalid start date provided');
            valid = false;
        }
        if (data.endDate && data.startDate && data.endDate < data.startDate) {
            setEndDateError('Invalid end date provided');
            valid = false;
        }
        return valid;
    };

    const handleCreateCohort = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (validate(data)) {
            console.log(data);
            dispatch(createCohort(data));
            console.log(data, 'created successfully');
            setOpen(false);
        }
    };

    const [data, setData] = useState<Cohort>({
        name: '',
        description: '',
        avatar: '',
        startDate: new Date(),
        endDate: new Date(),
        program: '',
        id: 0,
        dateCreated: new Date(),
        numberOfLearners: 0,
    });

    const handleStartDateChange = (date: Date | null) => {
        setStartDate(date);
        setData(prevData => ({ ...prevData, startDate: date }));
        setStartDateError('');
    };

    const handleEndDateChange = (date: Date | null) => {
        setEndDate(date);
        setData(prevData => ({ ...prevData, endDate: date }));
        setEndDateError('');
    };

    const handleImageClick = () => {
        document.getElementById('file-input')?.click();
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files.length > 0) {
            onDrop(Array.from(files));
        }
    };

    return (
        <>
            <Dialog open={isOpen} sx={{ height: '921px', width: '631px', padding: '45px 40px', margin: 'auto' }}>
                <DialogTitle id='dialog-title'>
                    Create a cohort
                    <IconButton style={{ float: 'right' }} onClick={() => setOpen(false)}>
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <form onSubmit={handleCreateCohort}>
                    <DialogContent>
                        <p className={'text-xs'}>Cohort Name</p>
                        <TextField
                            error={!!(nameError && nameError.length)}
                            helperText={nameError}
                            id='name'
                            required
                            onChange={(e) => {
                                setData(prevData => ({ ...prevData, name: e.target.value }));
                                setNameError('');
                            }}
                            variant="outlined"
                            size="small"
                            fullWidth
                            sx={{ mb: 2, lineHeight: '15px' }}
                        />
                        <p className={'text-xs'}>Description</p>
                        <TextField
                            error={!!(descriptionError && descriptionError.length)}
                            helperText={descriptionError}
                            id='description'
                            required
                            onChange={(e) => {
                                setData(prevData => ({ ...prevData, description: e.target.value }));
                                setDescriptionError('');
                            }}
                            variant="outlined"
                            multiline
                            rows={3}
                            size="small"
                            fullWidth
                            sx={{ mb: 2, lineHeight: '15px' }}
                        />
                        <p className={'text-xs'}>Program</p>
                        <TextField
                            error={!!(programError && programError.length)}
                            helperText={programError}
                            id='program'
                            required
                            onChange={(e) => {
                                setData(prevData => ({ ...prevData, program: e.target.value }));
                                setProgramError('');
                            }}
                            variant="outlined"
                            size="small"
                            fullWidth
                            sx={{ mb: 2, lineHeight: '15px' }}
                        />
                        <section className="flex gap-10 py-[15px]">
                            <div>
                                <p className={'text-xs'}>Start Date</p>
                                <DatePicker
                                    selected={startDate}
                                    onChange={handleStartDateChange}
                                    minDate={new Date()}
                                    dateFormat="yyyy-MM-dd"
                                    placeholderText="Select start date"
                                    className={`w-full p-2 border ${startDateError ? 'border-red-500' : 'border-gray-300'} rounded`}
                                />
                                {startDateError && <p className="text-red-500 text-xs px-[10px] py-[10px]">{startDateError}</p>}
                            </div>
                            <div>
                                <p className={'text-xs'}>End Date</p>
                                <DatePicker
                                    selected={endDate}
                                    onChange={handleEndDateChange}
                                    minDate={new Date(new Date().setDate(new Date().getDate() + 1))}
                                    dateFormat="yyyy-MM-dd"
                                    placeholderText="Select end date"
                                    className={`w-full p-2 border ${endDateError ? 'border-red-500' : 'border-gray-300'} rounded`}
                                />
                                {endDateError && <p className="text-red-500 text-xs">{endDateError}</p>}
                            </div>
                        </section>
                        <p className={'text-xs'}>Add a cohort avatar</p>
                        {imagePreview ? (
                            <Box onClick={handleImageClick} sx={{
                                border: '2px dashed lightblue',
                                borderRadius: '8px',
                                textAlign: 'center',
                                padding: '20px',
                                cursor: 'pointer',
                                mt: 1,
                                backgroundColor: '#eaf5fa',
                                position: 'relative'
                            }}>
                                <Image
                                    src={imagePreview}
                                    alt="Cohort Avatar Preview"
                                    height={100}
                                    style={{ borderRadius: '8px',width:'auto'}}
                                />
                                <input
                                    id="file-input"
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    style={{ display: 'none' }}
                                />
                            </Box>
                        ) : (
                            <Box {...getRootProps()} sx={{
                                border: '2px dashed lightblue',
                                borderRadius: '8px',
                                textAlign: 'center',
                                padding: '20px',
                                cursor: 'pointer',
                                mt: 1,
                                backgroundColor: '#eaf5fa'
                            }}>
                                <input {...getInputProps()} />
                                {isDragActive ? (
                                    <Typography variant="body2">Drop the image here...</Typography>
                                ) : (
                                    <Typography variant="body2" sx={{display:'flex',flexDirection:'column',
                                    justifyContent:'center',alignItems:'center'}}>
                                        <img src={infoIcon.src} alt="Upload" width={30} height={30} className={styles.img} />
                                        Click or Drag & Drop to upload an image
                                    </Typography>
                                )}
                            </Box>
                        )}
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setOpen(false)}>Cancel</Button>
                        <Button type="submit" variant="contained">Create</Button>
                    </DialogActions>
                </form>
            </Dialog>
        </>
    );
};