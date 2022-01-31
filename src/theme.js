import { orange } from "@material-ui/core/colors";
import { createTheme } from "@material-ui/core/styles";


export const theme = createTheme({
    typography : {
      fontFamily: 'Poppins',
      fontSize: 14,
    },
    myColors : {
        textColorLight:{
            color: '#fff'
        },
        textColorDark : {
            color: '#000'
        }
    },
    backgroundPrimary : orange[800],
    backgroundSecondary : '#111827',
    adminSideBar: "#fff"
  })