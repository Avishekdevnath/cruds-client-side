import { Button, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import AddNewData from '../AddNewData/AddNewData';
import DataTable from '../DataTable/DataTable';
import SendIcon from '@mui/icons-material/Send';

const Home = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
            <DataTable></DataTable>
            <Box sx={{ height: '100%', width: '100%', my: 5, mx: 'auto', }}>
                <div className="">
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            bgcolor: 'background.paper',
                            maxWidth: 300,
                        }}
                    >
                        <Button variant="contained" sx={{ m: '5px' }} endIcon={<SendIcon />}>
                            Send
                        </Button>
                        <Button onClick={handleOpen} variant="contained" sx={{ m: '5px' }} color="success">
                            Add New Data
                        </Button>

                    </Box>
                </div>
            </Box>
            <AddNewData
                open={open}
                handleClose={handleClose}
            ></AddNewData>
        </div>
    );
};

export default Home;