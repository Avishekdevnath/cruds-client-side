import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';

const DataTable = ({users}) => {
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

                    return alert("JSON.stringify(thisRow, null, 4)");
                };

                return <Button variant="contained" sx={{ background: 'green' }} onClick={onClick}>Update</Button>;
            }
        },
        {
            field: "delete",
            headerName: "Delete",
            sortable: false,
            renderCell: (params) => {
                const onClick = (e) => {
                    e.stopPropagation(); // don't select this row after clicking

                    return alert("JSON.stringify(thisRow, null, 4)");
                };

                return <Button variant="contained" sx={{ background: 'red' }} onClick={onClick}>Delete</Button>;
            }
        }
    ];

    // const [users, setUsers] = useState([]);
    // useEffect(() => {
    //     fetch('http://localhost:5000/users')
    //         .then(res => res.json())
    //         .then(data => setUsers(data))
    // }, [])

    return (
        <Box sx={{ height: 400, width: '100%', my: 5, mx: 'auto' }}>
            <DataGrid
                rows={users}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </Box>
    );
};

export default DataTable;