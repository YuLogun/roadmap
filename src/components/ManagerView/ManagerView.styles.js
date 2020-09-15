import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    // * {
    //     font-family: "Roboto";
    //     font-size: 20px
    // }

    adminPanelContainer: {
        display: 'flex',
        fontFamily: "Roboto",
        fontSize: '20px'
    },
    adminPanelSideMenu: {
        width: '100%',
        minWidth: '240px',
        maxWidth: '300px'
    },
    managerBlock: {
        width: '100%',
        margin: '10px auto 30px',
        fontWeight: 'bold'
    },
    adminPanelContent: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '100%'
    },
    sideMenu: {
        width: "100%",
        minWidth: "240px",
        maxWidth: "300px",

        [theme.breakpoints.down('sm')]: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
          maxWidth: "unset"
        }
      },
      managerPanelContainer: {
        display: 'flex',
        marginTop: "20px",

        [theme.breakpoints.down('sm')]: {
          margin: "20px 30px 0 30px",
          flexDirection: "column"
        }
      },
      managerBlock: {
        width: "100%",
        marginBottom: "30px",
        fontWeight: "bold",

        [theme.breakpoints.down('sm')]: {
          width: "auto",
          margin: 0
        }
      }
}));