import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField, Snackbar, Alert } from '@mui/material';

const AddNewData = ({ open, handleClose, users }) => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid green',
        boxShadow: 24,
        p: 4,
    };

    // snack bar
    const [handleOpen, setHandleOpen] = useState(false);
    const [confirm, setConfirm] = useState(false);

    const handleClick = () => {
        setHandleOpen(true);
    };
    const Close = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setHandleOpen(false);
    };
    ///////////////
    const id = users.length + 1;
    // const serialNumber = { id: id };
    const [data, setData] = useState();
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...data };
        newInfo["id"] = id;
        newInfo[field] = value;
        setData(newInfo);
    }
    // console.log(users.length + 1);
    // // console.log('serial number: ', serialNumber);
    // console.log(data);

    const handleSubmit = (e) => {

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setConfirm(true);
                    handleClose();
                }
            })

        e.preventDefault();
    }


    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Add New Data
                </Typography>

                <form onSubmit={handleSubmit}>
                    <TextField
                        required
                        name="name"
                        label="Name"
                        defaultValue=""
                        sx={{ my: "10px", mx: "auto", width: "80%" }}
                        onBlur={handleOnBlur}
                    />
                    <TextField
                        required
                        name="phone"
                        label="Phone Number"
                        defaultValue=""
                        sx={{ my: "10px", mx: "auto", width: "80%" }}
                        onBlur={handleOnBlur}
                    />
                    <TextField
                        required
                        name="email"
                        type="email"
                        label="E-mail"
                        defaultValue=""
                        sx={{ my: "10px", mx: "auto", width: "80%" }}
                        onBlur={handleOnBlur}
                    />
                    <TextField
                        required
                        name="hobbies"
                        label="Hobbies"
                        defaultValue=""
                        sx={{ my: "10px", mx: "auto", width: "80%" }}
                        onBlur={handleOnBlur}
                    />

                    <Box sx={{ height: '100%', width: '100%', mx: 'auto', }}>
                        <div className="">
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    bgcolor: 'background.paper',
                                    maxWidth: 300,
                                }}
                            >
                                <Button
                                    variant="contained"
                                    sx={{ mx: '5px', background: 'coral' }}
                                    type="submit"
                                    onClick={handleClick}>Save
                                </Button>
                                <Button
                                    variant="contained"
                                    sx={{ mx: '5px', background: 'coral' }}
                                    onClick={handleClose}>Close
                                </Button>
                            </Box>
                        </div>
                    </Box>
                </form>
            </Box>
            {/* {confirm && <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={Close} severity="success" sx={{ width: '100%' }}>
                    Data added successfully!
                </Alert>
            </Snackbar>} */}
        </Modal>
    );
};

export default AddNewData;