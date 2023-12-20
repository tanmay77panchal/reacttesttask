import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, InputLabel, MenuItem, Select, TextareaAutosize } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setData } from '../slices/loggedUserSlice'
import { toast } from 'react-toastify';


import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


function Form() {
    const loggedUser = useSelector(state => state.loggedUser);

    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setemail] = useState('');
    const [address1, setaddress1] = useState('');
    const [city, setcity] = useState('');
    const [state, setstate] = useState('');
    const [zip, setzip] = useState('');
    const [phone, setphone] = useState('');
    const [jobTitle, setjobTitle] = useState('');
    const [reason, setreason] = useState('');



    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const dispatch = useDispatch();

    function isValidPhoneNumber(text) {
        var pattern = /^\d{10}$/;
        return pattern.test(text);
    }


    const formSubmit = async (event) => {
        event.preventDefault();
        // console.log(firstName, lastName, email, address1, city, state, zip, phone, jobTitle, reason)

        if (firstName && lastName && email && address1 && phone && !(firstName.trim() === "") && !(lastName.trim() === "") && !(email.trim() === "") && !(address1.trim() === "") && !(phone.trim() === "")) {
            if (isValidPhoneNumber(phone)) {

                console.log("Valid phone number!");
                let emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

                if (!emailRegex.test(email)) {

                    toast.info("you have entered invalid email..!", {
                        position: toast.POSITION.TOP_CENTER, autoClose: 1300
                    })

                } else {
                    const userData = {
                        firstName: firstName,
                        lastName: lastName,
                        email: email,
                        address1: address1,
                        city: city,
                        state: state,
                        zip: zip,
                        phone: phone,
                        jobTitle: jobTitle,
                        reason: reason
                    }
                    dispatch(setData({ ...loggedUser, data: userData }))
                    handleClickOpen()



                }
            } else {
                console.log("Invalid phone number.");
                toast.info("Invalid phone number", {
                    position: toast.POSITION.TOP_CENTER, autoClose: 1300
                })
            }
        } else {
            console.log("fill up required field ");
            toast.info("fill up required field ", {
                position: toast.POSITION.TOP_CENTER, autoClose: 1300
            })
        }




    }
    return (
        <>
            <h3>Dynamic form application</h3>
            <form>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div>
                        <Box>
                            <TextField
                                id="firstName"
                                label="First name"
                                placeholder='First name'
                                value={firstName}
                                onChange={(e) => setfirstName(e.target.value)}
                                required
                            />
                            <TextField
                                id="lastName"
                                label="Last name"
                                placeholder='Last name'
                                value={lastName}
                                onChange={(e) => setlastName(e.target.value)}
                                required
                            />
                        </Box>

                        <Box>
                            <TextField
                                id="email"
                                label="Email"
                                value={email}
                                onChange={(e) => setemail(e.target.value)}
                                required
                            />
                        </Box>

                        <Box>
                            <TextField
                                required
                                id="address1"
                                label="Address"
                                value={address1}
                                onChange={(e) => setaddress1(e.target.value)}
                                placeholder='Address 1'
                            />
                        </Box>

                        <Box>
                            <TextField
                                id="city"
                                label="City"
                                value={city}
                                onChange={(e) => setcity(e.target.value)}
                            />
                            <TextField
                                id="state"
                                label="State"

                                value={state}
                                onChange={(e) => setstate(e.target.value)}
                            />
                            <TextField
                                id="zip"
                                label="Zip"

                                value={zip}
                                onChange={(e) => setzip(e.target.value)}
                            />
                        </Box>

                        <Box>
                            <TextField
                                id="phone"
                                label="Phone"
                                placeholder='Phone NO'

                                value={phone}
                                onChange={(e) => setphone(e.target.value)}
                                required
                            />
                        </Box>
                        <Box>
                            <InputLabel id="jobTitle">JobTitle</InputLabel>
                            <Select
                                style={{ marginTop: 10, marginBottom: 10, width: "auto", minWidth: "250px", color: 'black', marginLeft: '10px' }}
                                id="jobTitle"
                                value={jobTitle}
                                label="JobTitle"
                                placeholder='Please select job title'
                                onChange={(e) => setjobTitle(e.target.value)}
                            >
                                {/* <MenuItem value="">
                            <em>None</em>
                        </MenuItem> */}
                                <MenuItem value="Engineer - lead">Engineer - lead</MenuItem>
                                <MenuItem value="Engineer - mid level">Engineer - mid level</MenuItem>
                                <MenuItem value="Engineer - junion">Engineer - junion</MenuItem>
                                <MenuItem value="Engineer - front end focused">Engineer - front end focused</MenuItem>
                                <MenuItem value="Engineer - backend focused">Engineer - backend focused</MenuItem>
                                <MenuItem value="Engineer - full stack">Engineer - full stack</MenuItem>
                            </Select>
                        </Box>
                        <Box>
                            <InputLabel id="reason">Reason</InputLabel>
                            <TextareaAutosize
                                style={{ marginTop: 10, marginBottom: 10, width: "auto", minWidth: "250px", color: 'black', marginLeft: '10px' }}
                                id="reason"
                                label="Reason"
                                placeholder='Describe why you are a good fit for the job you are applying for'

                                value={reason}
                                onChange={(e) => setreason(e.target.value)}
                                required
                            />
                        </Box>
                    </div>
                </Box>
                <Button variant="contained" type='submit' onClick={formSubmit}>Submit</Button>
            </form>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Thank You"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Thank you here your form preview
                    </DialogContentText>
                </DialogContent>

                <Box>
                    <span style={{ marginLeft: '20px', marginRight: '10px' }}>{firstName}</span>
                    <span style={{ marginRight: '10px' }}>{lastName}</span>
                </Box>
                <Box>
                    <span style={{ marginLeft: '20px', marginRight: '10px' }}>{email}</span>
                </Box>
                <Box>
                    <span style={{ marginLeft: '20px', marginRight: '10px' }}>{address1}</span>
                </Box>
                <Box>
                    <span style={{ marginLeft: '20px', marginRight: '10px' }}>{city}</span>
                    <span style={{ marginRight: '10px' }}>{state}</span>
                    <span style={{ marginRight: '10px' }}>{zip}</span>
                </Box>
                <Box>
                    <span style={{ marginLeft: '20px', marginRight: '10px' }}>{phone}</span>

                </Box>
                <Box>
                    <span style={{ marginLeft: '20px', marginRight: '10px' }}>{jobTitle}</span>

                </Box>
                <Box>
                    <span style={{ marginLeft: '20px', marginRight: '10px' }}>{reason}</span>

                </Box>


                <DialogActions>
                    <Button onClick={()=>{ handleClose() }} autoFocus>
                        close
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default Form


