import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
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
    },
    roadmapHeader: {
        display: 'flex',
        // justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    backArrow: {
        cursor: 'pointer'
    }
}));