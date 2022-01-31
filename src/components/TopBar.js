import { alpha, AppBar, Avatar, Badge, Hidden, IconButton, InputBase, Toolbar } from '@material-ui/core';
import { Mail, Search, Notifications, Menu } from '@material-ui/icons'
import { makeStyles } from '@material-ui/styles';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import CreateProduct from '../Pages/CreateProduct';
import Overview from '../Pages/Overview';
import Products from '../Pages/Products';
import SideBar from './SideBar';

const drawerWidth = 260;
const useStyles = makeStyles((theme) => ({
    root : {
      display: 'flex',
    },
    appbar: {
      [theme.breakpoints.up('sm')]:{
        width: `calc(100% - ${drawerWidth}px)`
      }
    },
    toolbar: {
      display: 'flex',
      background: '#fff'
    },
    drawerIcon: {
      color: '#fff'
    },
    search: {
      display: 'flex',
      gap: theme.spacing(1),
      justifyContent: 'center',
      alignItems: 'center',
      background: alpha(theme.palette.common.white, 0.15),
      padding: '4px 8px',
      borderRadius: '8px'
    },
    searchInput : {
      color: '#fff',
    },
    notify : {
      display: 'flex',
      gap: 20,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 'auto'
      
    },
      // necessary for content to be below app bar
    toolbarHeight: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(4)
    },

})
)

const TopBar = () => {
  const classes = useStyles()
  const pathname = useLocation().pathname
  const [openState, setOpenState] = useState(false)


  const openDrawerHandle = () => {
    console.log('Hello world')
    setOpenState(!openState)
  }

  return (
    <div className={classes.root}>
    {/* APPBAR */}
       <AppBar position='fixed' className={classes.appbar}>
         <Toolbar className={classes.toolbar}>
              <Hidden smUp>
                <IconButton onClick={openDrawerHandle}>
                  <Menu className={classes.drawerIcon} />
                </IconButton>
              </Hidden>
            <div className={classes.search}>
              <div className={classes.searchIcon}> <Search fontSize='small' /> </div>
              <InputBase className={classes.searchInput} placeholder='Search...' />
            </div>

           <div className={classes.notify}>
              <Hidden xsDown>
                <Badge badgeContent={3} color='secondary'>
                  <Mail />
                </Badge>
                <Badge badgeContent={2}  color='secondary'>
                  <Notifications />
                </Badge>
              </Hidden>
              <IconButton>
                <Avatar src='images/avatar01.jpg' />
              </IconButton>
           </div>
         </Toolbar>
       </AppBar>

       {/* SIDEBAR DRAWER */}
       <Hidden xsDown >
           <SideBar drawerWidth={drawerWidth} variant='permanent' open={true} />
       </Hidden>

       <Hidden smUp >
           <SideBar drawerWidth={drawerWidth} variant='temporary' open={openState} close={openDrawerHandle} />
       </Hidden>


       {/* MAIN CONTENT */}

       <main className={classes.content}>
        <div className={classes.toolbarHeight} />
        <div className={classes.pageHeader}>

        </div>
        { pathname === '/' ? <Overview /> : null}
        { pathname === '/products' ? <Products/> : null }
        { pathname === '/products/new' ? <CreateProduct /> : null }
      </main>
    </div>
  )
};

export default TopBar;
