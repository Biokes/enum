// import {Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, TextField, Typography} from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";
// import Image from "next/image";
// import infoIcon from "@/assets/upload.png";
// import info from '@/assets/info.svg';
// import React, { useState, useCallback } from "react";
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import { useDropzone } from "react-dropzone";
// import { Cohort } from "@/interfaces/interfaces";
// import { useDispatch } from 'react-redux';
// import { saveCohort } from "@/redux/cohortSlice";
//
// interface DialogComponentProps {
//     isOpen: boolean;
//     setOpen: (value: boolean) => void;
// }
// interface Errors {
//     name: string;
//     description: string;
//     program: string;
//     startDate: string;
//     endDate: string;
// }
//
// export const DialogComponent: React.FC<DialogComponentProps> = ({ isOpen, setOpen }) => {
//     const [data, setData] = useState<Cohort>({
//         name: '',
//         description: '',
//         avatar: '',
//         startDate: null,
//         endDate: null,
//         program: '',
//         id: 0,
//         dateCreated: new Date(),
//         numberOfLearners: 0,
//     });
//
//     const [errors, setErrors] = useState<Errors>({
//         name: '',
//         description: '',
//         program: '',
//         startDate: '',
//         endDate: ''
//     });
//
//     const [imagePreview, setImagePreview] = useState<string | null>(null);
//     const dispatch = useDispatch();
//
//     // Handle file function to set the image preview and update the state
//     const handleFile = (file: File) => {
//         const imageUrl = URL.createObjectURL(file);
//         setImagePreview(imageUrl);
//         setData(prevData => ({ ...prevData, avatar: imageUrl }));
//     };
//
//     const onDrop = useCallback((acceptedFiles: File[]) => {
//         if (acceptedFiles.length > 0) {
//             handleFile(acceptedFiles[0]); // Use the handleFile function
//         }
//     }, []);
//
//     const { getRootProps, getInputProps, isDragActive } = useDropzone({
//         onDrop,
//         accept: { 'image/*': [] },
//         noClick: false // Allows clicking to open the file picker
//     });
//
//     const validate = () => {
//         const newErrors: Errors = { name: '', description: '', program: '', startDate: '', endDate: '' };
//         let valid = true;
//
//         if (!data.name) {
//             newErrors.name = 'Cohort name is required';
//             valid = false;
//         }
//         if (!data.description) {
//             newErrors.description = 'Description is required';
//             valid = false;
//         }
//         if (!data.program) {
//             newErrors.program = 'Program name is required';
//             valid = false;
//         }
//         if (data.startDate && data.endDate && data.startDate > data.endDate) {
//             newErrors.startDate = 'Invalid start date provided';
//             valid = false;
//         }
//         if (data.endDate && data.startDate && data.endDate < data.startDate) {
//             newErrors.endDate = 'Invalid end date provided';
//             valid = false;
//         }
//
//         setErrors(newErrors);
//         return valid;
//     };
//
//     const handleCreateCohort = (event: React.FormEvent<HTMLFormElement>) => {
//         event.preventDefault();
//         if (validate()) {
//             dispatch(saveCohort(data));
//             console.log('Cohort created successfully', data);
//             setOpen(false);
//         }
//     };
//
//     const handleDateChange = (type: keyof Errors, date: Date | null) => {
//         setData(prevData => ({ ...prevData, [type]: date }));
//         setErrors(prevErrors => ({ ...prevErrors, [type]: '' }));
//     };
//
//     const formValid = Object.values(errors).every(error => !error) && data.name && data.description && data.program && data.startDate && data.endDate;
//
//     return (
//         <Dialog open={isOpen}>
//             <DialogTitle>
//                 Create a cohort
//                 <IconButton style={{ float: 'right' }} onClick={() => setOpen(!isOpen)}>
//                     <CloseIcon />
//                 </IconButton>
//             </DialogTitle>
//             <form onSubmit={handleCreateCohort}>
//                 <DialogContent>
//                     {['Cohort Name', 'Description', 'Program'].map((label, index) => (
//                         <div key={index}>
//                             <TextField
//                                 label={label}
//                                 error={!!errors[label.toLowerCase().replace(' ', '') as keyof Errors]}
//                                 helperText={errors[label.toLowerCase().replace(' ', '') as keyof Errors]}
//                                 required
//                                 onChange={(e) => setData(prevData => ({ ...prevData, [label.toLowerCase().replace(' ', '')]: e.target.value }))}
//                                 variant="outlined"
//                                 size="small"
//                                 fullWidth
//                                 sx={{ mb: 2 }}
//                             />
//                         </div>
//                     ))}
//                     <section className="flex gap-10 py-[15px]">
//                         <div>
//                             <p>Start Date</p>
//                             <DatePicker
//                                 selected={data.startDate}
//                                 onChange={(date) => handleDateChange('startDate', date)}
//                                 minDate={new Date()}
//                                 dateFormat="yyyy-MM-dd"
//                                 placeholderText="Select start date"
//                             />
//                             {errors.startDate && <p className="text-red-500 text-xs">{errors.startDate}</p>}
//                         </div>
//                         <div>
//                             <p>End Date</p>
//                             <DatePicker
//                                 selected={data.endDate}
//                                 onChange={(date) => handleDateChange('endDate', date)}
//                                 minDate={new Date(new Date().setDate(new Date().getDate() + 1))}
//                                 dateFormat="yyyy-MM-dd"
//                                 placeholderText="Select end date"
//                             />
//                             {errors.endDate && <p className="text-red-500 text-xs">{errors.endDate}</p>}
//                         </div>
//                     </section>
//                     <p>Add a cohort avatar</p>
//                     <Box
//                         sx={{
//                             border: '2px dashed lightblue',
//                             borderRadius: '8px',
//                             textAlign: 'center',
//                             padding: '20px',
//                             cursor: 'pointer',
//                             mt: 1,
//                             backgroundColor: '#eaf5fa',
//                             height: '100px',
//                             display: 'flex',
//                             flexDirection: 'column',
//                             alignItems: 'center',
//                             justifyContent: 'center'
//                         }} {...getRootProps()}
//                     >
//                         {imagePreview ? (
//                             <Image src={imagePreview} alt="Avatar Preview" height={50} width={50} style={{ borderRadius: '8px' }} />
//                         ) : (
//                             <>
//                                 <input {...getInputProps()} />
//                                 {isDragActive ? (
//                                     <Typography>Drop the image here...</Typography>
//                                 ) : (
//                                     <div>
//                                         <Image src={infoIcon} alt='Upload Icon' height={50} width={50} />
//                                         <Typography>Drag an image or click to choose a file</Typography>
//                                     </div>
//                                 )}
//                             </>
//                         )}
//                     </Box>
//                     <div className="flex gap-[10px] pt-[10px]">
//                         <Image src={info} alt='Info Icon' width={12} height={12} />
//                         <p>You can add this later.</p>
//                     </div>
//                 </DialogContent>
//                 <DialogActions>
//                     <Button onClick={() => setOpen(false)}>Cancel</Button>
//                     <Button type="submit" disabled={!formValid} variant="contained">Create</Button>
//                 </DialogActions>
//             </form>
//         </Dialog>
//     );
// };
