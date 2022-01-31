import { Avatar, Typography } from '@material-ui/core';
import { LocalMall } from '@material-ui/icons';
import React from 'react';

const DataItem = (props) => {

  return (
    <div style={{display: 'flex', gap: '20px'}}>
        <Avatar sizes='large'><LocalMall /></Avatar> 
        <Typography >{props.name}</Typography>
    </div>
  )
};

export default DataItem;
