import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    roadmapsContainer: {
        display: 'flex'
    },

    roadmapContainer: {
        width: '50vw'
    },

    addCourseButton: {
        position: 'fixed',
        bottom: "25px",
        right: '25px'
    },

    managerPanelContainer: {
        display: 'flex',
        width: '100vw',
        height: '100vh'
    },
    leftSideMenu: {
        width: '15vw'
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
    tabPanelContainer: {
        width: '75vw'
    }
}));