import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import UpdateData from '../UpdateData/UpdateData';

const DataTable = ({ users, setUsers }) => {
    const [selectNums, setSelectNums] = useState([]);
    const [selectedUser, setSelectedUser] = useState([]);
    const [updateID, setUpdateID] = useState(null);

    const array = [];
    const handleRowSelection = (e) => {
        setSelectNums(e);
    }
    selectNums?.map(num => {
        const filterUser = users?.filter(user => user?.id === num);
        array.push(filterUser[0]);
    })

    const deleteData = (event, cellValues) => {
        const id = cellValues.row._id;
        const confirm = window.confirm('Do you want to delete?')
        if (confirm) {
            const url = `http://localhost:5000/users/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted seccessfully');
                        const remainingUsers = users.filter(user => user._id !== id)
                        setUsers(remainingUsers);
                    }
                })
        }

    }

    const updateData = (event, cellValues, handleOpen) => {
        handleOpen();
        const id = cellValues.row._id;
        setUpdateID(id);
    }

    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            // headerAlign: 'center',
            width: 70,
            disableClickEventBubbling: true,
        },
        { field: 'name', headerName: 'Name', width: 190, disableClickEventBubbling: true, },
        {
            field: 'phone', headerName: 'Phone Number', width: 150, disableClickEventBubbling: true,
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 240,
            disableClickEventBubbling: true,
        },
        {
            field: 'hobbies',
            headerName: 'Hobbies',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            disableClickEventBubbling: true,
        },
        {
            field: "Update",
            disableClickEventBubbling: true,
            renderCell: (cellValues) => {
                return (
                    <Button
                        variant="contained"
                        sx={{ background: 'green' }}
                        color="primary"
                        onClick={(event) => {
                            updateData(event, cellValues, handleOpen);
                        }}
                    >
                        Update
                    </Button>
                );
            }
        },
        {
            field: "Delete",
            disableClickEventBubbling: true,
            renderCell: (cellValues) => {
                return (
                    <Button
                        variant="contained"
                        sx={{ background: 'red' }}
                        color="primary"
                        onClick={(event) => {
                            deleteData(event, cellValues);
                        }}
                    >
                        Delete
                    </Button>
                );
            }
        }
    ];

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return (
        <>

            <Box sx={{ height: 400, width: '100%', my: 5, mx: 'auto' }}>
                <DataGrid
                    rows={users}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[10]}
                    checkboxSelection
                    onSelectionModelChange={handleRowSelection}
                />
            </Box>
            <UpdateData
                open={open}
                handleClose={handleClose}
                updateID={updateID}
            >

            </UpdateData>
        </>
    );
};

export default DataTable;