import { Box, Button, Card, CardContent, FormControlLabel, Grid, IconButton, Input, InputAdornment, MenuItem, Switch, TextField, Typography } from '@material-ui/core';
import { PermMedia } from '@material-ui/icons';
import { Autocomplete } from '@material-ui/lab';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import PageHeader from '../components/PageHeader';


const useStyles = makeStyles((theme) => ({
  root : {
    borderRadius: '10px',
    padding: '10px',
    '& *': {
      borderRadius: '8px'
    },
    '& label.Mui-focused':{
      color: theme.backgroundPrimary
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        border: `1px solid ${theme.backgroundPrimary}`
      }
    }
  },
  field : {
    marginTop: '25px',
  }, 
  imageField : {
    border: '1px dashed rgba(145, 158, 171, 0.62)', 
    padding: '50px 0', 
    textAlign: 'center'
  },
  btn : {
    height: '55px',
    marginTop: '25px',
    background: theme.backgroundPrimary,
    color: '#fff',
    '&:hover' : {
      background: theme.backgroundSecondary
    }
  }
}))

const CreateProduct = () => {
  const classes = useStyles()

  const category = ['Graphic Design', 'Development', 'Digital Marketing', 'LifeStyle']

  return (
    <div>
      <PageHeader title='Create a new Gig' link1='Store' link2='New Gig'/>
      <form >
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Card variant='outlined' className={classes.root}>
              <CardContent>
                <TextField label='Gig Title' variant='outlined' fullWidth />
                <div className={classes.field}>
                  <Typography variant='body1' color='textSecondary' gutterBottom >Description</Typography>
                  <TextField variant='outlined' fullWidth multiline rows={10} placeholder='Write the description of the product' error={false} helperText=""/>
                </div>
                <div className={classes.field}>
                  <Typography variant='body1' color='textSecondary' gutterBottom >Images</Typography>
                  <Box className={classes.imageField}>
                    <IconButton disabled>  
                      <PermMedia fontSize='large' />
                    </IconButton>
                    
                    <Input type='file' inputProps={{accept: '.png, .jpg'}} style={{display: 'none'}} />
                    <Typography variant='body1' gutterBottom>File Upload</Typography>
                    <Typography variant='body2' paragraph color='textSecondary' >Drag your files here or Browse</Typography>

                  </Box>
                </div>

              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
          <Card variant='outlined' className={classes.root}>
              <CardContent>
              <FormControlLabel label='In Stock' control={<Switch />} style={{ marginBottom: '20px' }} /> 
              <TextField label='Gig ID' variant='outlined' fullWidth />
              <TextField select label='Category' variant='outlined' fullWidth helperText='' className={classes.field} defaultValue={category[0]}>
                { category.map((option) => {
                  return(
                    <MenuItem key={option} value={option} >{option}</MenuItem>
                  )
                })
                }
              </TextField>
                <Autocomplete multiple options={category} getOptionLabel={(option)=> option} renderInput={(lists) => (
                  <TextField {...lists} className={classes.field} label='Tags' variant='outlined' fullWidth/>
                 )}/>
                
              </CardContent>
            </Card>

            <Card variant='outlined' className={classes.root} style={{marginTop: '30px'}}>
              <CardContent>
              <TextField label='Regular Price' fullWidth style={{marginTop: '10px'}}
                  placeholder='0.00' variant='outlined' 
                  InputProps={{ 
                    startAdornment : <InputAdornment position='start'>¢</InputAdornment> }}  
                />
              <TextField
                  label="Sale Price" className={classes.field}
                  placeholder='0.00' variant='outlined' fullWidth
                  InputProps={{
                    startAdornment: <InputAdornment position="start">¢</InputAdornment>,
                  }}
                />
              <Button className={classes.btn} fullWidth > Create Product </Button>
                
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </form>
    </div>
  ) 
};

export default CreateProduct;
