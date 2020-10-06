import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    roadmapsContainer: {
        display: 'flex',
        overflow: 'scroll',
    },

    roadmapContainer: {
        // width: '50vw',
        minWidth: "80vw", //95vh
        height: '83vh',
        // borderRight: "1px solid black",
        // padding: '0 10vw'
    },

    addCourseButton: {
        position: 'fixed',
        bottom: "25px",
        right: '25px'
    },

    managerPanelContainer: {
        display: 'flex',
        width: '100vw',
        height: '92vh'
    },
    leftSideMenu: {
        width: '15vw'
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
    tabPanelContainer: {
        width: '80vw',
        height: '92vh'
    },
    exitBlock: {
        position: 'fixed',
        width: '20vw',
        bottom: '0',
        marginLeft: '45px',
        paddingBottom: '15px',
        cursor: 'pointer'
    },
    // roadmapElement: {
    //     minWidth: "95vw",
    //     border: "1px solid black",
    //     padding: '0 10vw'
    // }
}));