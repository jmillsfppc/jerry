import React, { useState } from 'react';
import { Avatar, Button, Card, CardContent, InputAdornment, TextField, Typography } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid'
import { Add, LocalMall, Search } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import PageHeader from '../components/PageHeader';

const useStyles = makeStyles( theme => ({
  root : {
    '& .MuiOutlinedInput-root': {
      borderRadius: '10px',
      "&.Mui-focused fieldset": {
        border: `1px solid ${theme.backgroundPrimary}`
      }
    }
  },
  addBtn: {
    marginLeft: 'auto',
    height: '45px',
    color: '#fff',
    background: theme.backgroundPrimary,
    padding: '0 15px',
    borderRadius: '10px',
    '&:hover' : {
      background: theme.backgroundSecondary
    }
  }
}))

const Products = () => {
  const classes = useStyles()
  const [pageSize, setPageSize] = useState(10)

  const columns = [
    {field: 'id', headerName: 'ID', resizeable: true}, 
    {field: 'name', headerName: 'Gig Title', flex: 1, 
      renderCell: (params) => { 
        return (
        <>
          <Avatar variant='rounded' sizes='large'><LocalMall /></Avatar> 
          <Typography style={{marginLeft: '20px'}} >{params.value}</Typography>
        </> 
        )} 
    }, 
    {field: 'created', headerName: 'Created', flex: .5 },
    {field: 'price', headerName: 'Price', flex: .5, renderCell: (params) => { return `GH¢ ${params.value}.00`} },
    {field: 'status', headerName:' Status', flex: .5}
  ]
  const users = [
    { id: 1, name: 'Snow', created: '8th January, 2021', price: 35, status: 'Published'},
    { id: 2, name: 'Lannister', created: '8th January, 2021', price: 42, status: 'Published'},
    { id: 3, name: 'Lannister', created: '8th January, 2021', price: 45, status: 'Published'},
    { id: 4, name: 'Stark', created: '8th January, 2021', price: 16, status: 'Published'},
    { id: 5, name: 'Targaryen', created: '8th January, 2021', price: 68, status: 'Published' },
    { id: 6, name: 'Melisandre', created: '8th January, 2021', price: 15, status: 'Published' },
    { id: 7, name: 'Clifford', created: '8th January, 2021', price: 44, status: 'Published'},
    { id: 8, name: 'Frances', created: '8th January, 2021', price: 36, status: 'Published'},
    { id: 9, name: 'Roxie', created: '8th January, 2021', price: 65, status: 'Published'},
    { id: 15, name: 'Targaryen', created: '8th January, 2021', price: 68, status: 'Published' },
    { id: 16, name: 'Melisandre', created: '8th January, 2021', price: 15, status: 'Published' },
    { id: 17, name: 'Clifford', created: '8th January, 2021', price: 44, status: 'Published'},
    { id: 18, name: 'Frances', created: '8th January, 2021', price: 36, status: 'Published'},
    { id: 19, name: 'Roxie', created: '8th January, 2021', price: 65, status: 'Published'},
  ];


  return (
    <div className={classes.root}>

      <div style={{ display: 'flex', justifyContent: 'bottom' }}>
        <PageHeader title='All Projects' link1='Store' link2='Project List'/>
        <Button startIcon={<Add/>} size='small' className={classes.addBtn}> New Project</Button>
      </div>

      <Card variant='outlined' style={{ borderRadius: '10px', width: '100%'}}>
        <CardContent style={{ padding:'30px' }}>
            <TextField  variant='outlined' style={{ marginBottom: '20px'}}
            placeholder='Find Gig...' fullWidth
            InputProps={{ 
              startAdornment: <InputAdornment position='start'><Search fontSize='small' /> </InputAdornment>
              }}/>
            <DataGrid autoHeight 
              pagination rows={users} rowsPerPageOptions={[5, 10, 20]}
              rowHeight={70} columns={columns} 
              pageSize={pageSize} checkboxSelection 
              onPageSizeChange={(newSize)=> setPageSize(newSize)}
              />

        </CardContent>
      </Card>
      
    </div>
  ) 
};

export default Products;
