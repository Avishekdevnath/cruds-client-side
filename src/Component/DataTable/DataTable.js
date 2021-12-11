import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import UpdateData from '../UpdateData/UpdateData';

const DataTable = ({ users, setUsers }) => {
    const [select, setSelection] = useState([]);
    console.log(select);

    const handleRowSelection = (e) => {
        setSelection(e);
        console.log(e);
    }

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

    const columns = [
        { field: 'id', headerName: 'ID', headerAlign: 'center', width: 70 },
        { field: 'name', headerName: 'Name', width: 190 },
        {
            field: 'phone', headerName: 'Phone Number', width: 150
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 240,
        },
        {
            field: 'hobbies',
            headerName: 'Hobbies',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            // valueGetter: (params) =>
            //     `${params.getValue(params.id, 'firstName') || ''} ${params.getValue(params.id, 'lastName') || ''
            //     }`,
        },
        {
            field: "update",
            headerName: "Update",
            sortable: false,
            renderCell: (params) => {
                const onClick = (e) => {
                    e.stopPropagation(); // don't select this row after clicking

                    // return alert("JSON.stringify(thisRow, null, 4)");
                };

                return <Button variant="contained" sx={{ background: 'green' }} onClick={onClick, handleOpen}>Update</Button>;
            }
        },
        {
            field: "Delete",
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

    // const [users, setUsers] = useState([]);
    // useEffect(() => {
    //     fetch('http://localhost:5000/users')
    //         .then(res => res.json())
    //         .then(data => setUsers(data))
    // }, [])
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
                users={users}
            >

            </UpdateData>
        </>
    );
};

export default DataTable;