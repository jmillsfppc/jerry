import { Breadcrumbs, Link, makeStyles, Typography } from '@material-ui/core';
import React from 'react';


const useStyles = makeStyles(theme => ({
  crumbs: {
      fontSize: '13px'
  },
  page: {
      marginBottom: '50px'
  },
  active: {
    color: theme.backgroundPrimary
  }
}))


const PageHeader = ({title, link1, link2}) => {
    const classes = useStyles()

  return (
    <div className={classes.page}>
    <Typography variant='h5' gutterBottom >{title}</Typography>
    <Breadcrumbs>
      <Link className={classes.crumbs} color='inherit' href='/'>
        Overview
      </Link>
      <Link className={classes.crumbs} color='inherit' href={`/${link1.toLowerCase()}`} >
        {link1}
      </Link>
      <Typography className={ `${classes.crumbs} ${classes.active}`} color="textPrimary">{link2}</Typography>
    </Breadcrumbs>

  </div>
  )
};

export default PageHeader;
