import { Avatar, Collapse, Container, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useNavigate, useLocation } from 'react-router-dom';
import { AccountBox, Dashboard, Forum, KeyboardArrowDown, LocalMall, Payment, People, PostAdd, PowerSettingsNew, Settings } from '@material-ui/icons';
import { useState } from 'react';


const useStyles = makeStyles((theme) => ({
  logo : {
    fontSize: '25px',
    fontWeight: 300,
    textAlign: 'center',
    padding: '5px 0',
    margin: '10px 0',
    '& span': {
      fontWeight: 600,
      color: theme.backgroundPrimary
    }
  },
  drawer : (props) => ({
    width: props.drawerWidth
  }),
  drawerPaper: (props) => ({
    width: props.drawerWidth,
  }),
  activeMenu : {
    background: 'rgba(255, 255, 255, 0.04)'
  },
  menuTitle :{
    color: "#000",
  },
  menuList: {
    margin: '10px 0',
  },
  menuItem : {
    borderRadius: '8px',
    gap: 15,
    margin: '5px 0',
    '&:hover' :{
      background: 'rgba(255, 255, 255, 0.04)'
    },
  },
  menuIcon: {
    fontSize: '13px',
    color: '#9ca3af',
    minWidth: 'auto'
  },
  subMenuIcon: {
    fontSize: '20px',
    color: '#9ca3af',
    minWidth: 'auto'
  },
  menuText : {
    '& p': {
      color: "#9ca3af"
    }
  },
  subMenuText : {
    '& p': {
      color: "#9ca3af",
      fontSize: '14px',
      marginLeft: '30px'
    }
  },
  userProfile : {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '30px 0'
  },
  userImage : {
    width: theme.spacing(12),
    height: theme.spacing(12),
    marginBottom: '10px',
  },
  userTitle : {
    color: 'rgb(107, 114, 128)'
  },
    // necessary for content to be below app bar
    toolbarHeight: theme.mixins.toolbar,
}))


const SideBar = (props) => {

  const [openMenu1, setOpenMenu1] = useState(false)
  const [openMenu2, setOpenMenu2] = useState(false)

  const pathname = useLocation().pathname
  const classes = useStyles(props)
  const navigate = useNavigate()

const menuItemsGeneral = [
  { name: 'Overview', icon: <Dashboard fontSize='small' />, path: '/' },
]

const menuItemsManagement = [
  { name: 'Users', icon: <People fontSize='small' />, path: '/users', 
    sub: [ { name: 'All Users', path: '/users'}, { name: 'Add Users', path: ''} ] 
  },
  { name: 'Gigs', icon: <LocalMall fontSize='small' />, path: '/products',
  sub: [ { name: 'All Gigs', path: '/products' }, { name: 'Add Gig', path: '/products/new'} ] 
  },
  { name: 'Orders', icon: <Payment fontSize='small' />, path: '/orders' },
  { name: 'Account', icon: <AccountBox fontSize='small' />, path: '/account' },
  { name: 'Settings', icon: <Settings fontSize='small' />, path: '/settings' },
]

const menuItemsSupport = [
  { name: 'Support', icon: <Forum fontSize='small' />, path: '/support' },
  { name: 'Logout', icon: <PowerSettingsNew fontSize='small' />, path: '/logout' },
]

const menuDropDown = (item) => {
  if(item.sub && item.name === 'Gigs'){
    setOpenMenu2(!openMenu2)
    return
  }
  if(item.sub && item.name === 'Users'){
    setOpenMenu1(!openMenu1)
    return
  }
  else{
    navigate(item.path)
  }
}


  return (
    <Drawer variant={props.variant} 
      open={props.open} className={classes.drawer} 
      classes={{ paper: classes.drawerPaper }} 
      onClose={props.close} ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
      >
            {/* <div className={classes.toolbarHeight} /> */}
            <Typography className={classes.logo} variant='h4'>amaly<span>app</span></Typography>
            <Divider light={false} />
            <Container>
              <div className={classes.userProfile}>
                <Avatar className={classes.userImage} src='images/avatar01.jpg' />
                <Typography variant='h6' className={classes.userName}>Jeremiah </Typography>
                <Typography variant='body2' color='textSecondary' className={classes.userTitle}>admin@amalyapp.com</Typography>
                <Typography variant='body2' color='textSecondary' className={classes.userTitle}>Admin</Typography>
              </div>
            </Container>
            <Divider light={false} />
            <Container>
                <List className={classes.menuList}>
                <Typography className={classes.menuTitle} variant='body2'>GENERAL</Typography>
                    { menuItemsGeneral.map((item) => {
                      return (
                        <ListItem onClick={()=> navigate(item.path)  } key={item.name} button className={`${classes.menuItem} ${ pathname === item.path ? classes.activeMenu : null }`} alignItems='center'>
                          <ListItemIcon className={classes.menuIcon}>{item.icon}</ListItemIcon>
                          <ListItemText className={classes.menuText} secondary={item.name} />
                        </ListItem>
                        )
                      })
                    }
                </List>
                <List className={classes.menuList} component='div'>
                <Typography className={classes.menuTitle} variant='body2'>MANAGEMENT</Typography>
                    { menuItemsManagement.map((item) => {
                      return (
                        <>
                          <ListItem onClick={()=>menuDropDown(item)} key={item.name} button className={`${classes.menuItem} ${ pathname === item.path ? classes.activeMenu : null } ${ item.sub && pathname.startsWith(item.path) ? classes.activeMenu : null }`} alignItems='center'>
                            <ListItemIcon className={classes.menuIcon}>{item.icon}</ListItemIcon>
                            <ListItemText className={classes.menuText}  secondary={item.name} />
                            { item.sub ? <KeyboardArrowDown className={classes.subMenuIcon} /> : null }
                          </ListItem>
                            { item.sub && item.sub.map((sub) => {
                              if(item.name === 'Users'){
                                return (
                                  <Collapse component='div' in={openMenu1} timeout="auto" key={sub.name}>
                                    <List disablePadding>
                                      <ListItem onClick={()=> navigate(sub.path)} button className={classes.menuItem}>
                                        <ListItemText className={classes.subMenuText} secondary={sub.name}/>
                                      </ListItem>
                                    </List>
                                  </Collapse> 
                                )
                              }else {
                                return (
                                  <Collapse component='div' in={openMenu2} timeout="auto" key={sub.name}>
                                    <List disablePadding>
                                      <ListItem onClick={()=> navigate(sub.path)} button className={classes.menuItem}>
                                        <ListItemText className={classes.subMenuText} secondary={sub.name}/>
                                      </ListItem>
                                    </List>
                                  </Collapse> 
                                )
                              }
                            })
                            
                            }
                        </>
                        )
                      })
                    }
                </List>
                <List className={classes.menuList}>
                <Typography className={classes.menuTitle} variant='body2'>SUPPORT</Typography>
                    { menuItemsSupport.map((item) => {
                      return (
                        <ListItem onClick={ ()=> navigate(item.path)   } key={item.name} button className={`${classes.menuItem} ${ pathname === item.path ? classes.activeMenu : null }`} alignItems='center'>
                          <ListItemIcon className={classes.menuIcon}>{item.icon}</ListItemIcon>
                          <ListItemText className={classes.menuText}  secondary={item.name} />
                        </ListItem>
                        )
                      })
                    }
                </List>
              </Container>
            </Drawer>
  )
};

export default SideBar;
