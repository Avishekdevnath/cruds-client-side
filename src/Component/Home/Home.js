import { Button, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import AddNewData from '../AddNewData/AddNewData';
import DataTable from '../DataTable/DataTable';
import SendIcon from '@mui/icons-material/Send';

const Home = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <Box>
            <DataTable users={users}></DataTable>
            <Box sx={{ height: '100%', width: '100%', my: 5, mx: 'auto', }}>
                <Box className="">
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
                </Box>
            </Box>
            <AddNewData
                open={open}
                handleClose={handleClose}
                users={users}
            ></AddNewData>
        </Box>
    );
};

export default Home;