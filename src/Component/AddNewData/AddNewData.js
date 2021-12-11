import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';

const AddNewData = ({ open, handleClose }) => {
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

                <form>
                    <TextField
                        required
                        id="outlined-required"
                        label="Name"
                        defaultValue=""
                        sx={{ my: "10px", mx: "auto", width: "80%" }}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Phone Number"
                        defaultValue=""
                        sx={{ my: "10px", mx: "auto", width: "80%" }}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="E-mail"
                        defaultValue=""
                        sx={{ my: "10px", mx: "auto", width: "80%" }}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Hobbies"
                        defaultValue=""
                        sx={{ my: "10px", mx: "auto", width: "80%" }}
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
                                <Button variant="contained" sx={{ mx: '5px', background: 'coral' }} onClick={() => alert("Hello topa")}>Save</Button>
                                <Button variant="contained" sx={{ mx: '5px', background: 'coral' }} onClick={() => alert("Hello topa")}>Close</Button>

                            </Box>
                        </div>
                    </Box>
                </form>
            </Box>
        </Modal>
    );
};

export default AddNewData;