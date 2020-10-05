import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    managerPanelContainer: {
        display: 'flex',
        width: '100vw',
        height: '92vh'
    },
    leftSideMenu: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100vh',
        width: '15vw'
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
    tabPanelContainer: {
        width: '80vw'
    },
    roadmapHeader: {
        display: 'flex',
        // justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    backArrow: {
        cursor: 'pointer'
    },
    exitBlock: {
        position: 'fixed',
        width: '20vw',
        bottom: '0',
        marginLeft: '45px',
        paddingBottom: '15px',
        cursor: 'pointer'
    },
    exitTitle: {
        // color: 'grey',
        // textDecoration: 'underline'
    }
}));