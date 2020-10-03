import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    userItem: {
        paddingLeft: '30px'
    },
    wideScreenList: {
        [theme.breakpoints.down('sm')]: {
            display: "none"
        }
    },
    mobileScreenList: {
        display: "flex",
        alignItems: "center",

        [theme.breakpoints.up('md')]: {
            display: "none"
        }
    },
    formControl: {
        width: "200px"
    },
    container: {
        width: "100%",
        padding: "10px 20px"
    },
    userListHeader: {
        display: "flex",
        alignItems: "center",
        fontSize: "20px",
        textDecoration: "underline"
    },
    userItem: {
        paddingLeft: "20px"
    },
    selectLabel: {
        fontWeight: "bold"
    },
    userListHeader: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    finderInputBlock: {

    },
    adderButtonBlock: {

    },
    finderInputField: {
        width: '60vw'
    },
    navButtonElem: {
        borderRadius: '100px',
        // padding: '9px 30px 16px'
    }
}));