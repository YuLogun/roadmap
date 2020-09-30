import { makeStyles } from "@material-ui/core/styles";
import { Widgets } from "@material-ui/icons";

export const useStyles = makeStyles((theme) => ({
    levelTitleBlock: {
        margin: '30px 0',
    },
    levelTitle: {
        fontSize: '40px',
        fontWeight: 'bold'
    },
    technologyBlock: {
        position: 'relative',
        height: '300px'
    },
    leftSideCourses: {
        position: 'absolute',
        top: '0',
        left: '30px',
        padding: '15px 20px',
        maxWidth: '450px',
        backgroundColor: '#e9e9e9'
        // border: '1px solid grey'
    },
    rightSideCourses: {
        position: 'absolute',
        top: '0',
        right: '30px',
        padding: '15px 20px',
        maxWidth: '450px',
        backgroundColor: '#e9e9e9'
        // border: '1px solid grey'
    },
    coursesHeader: {
        marginBottom: '10px'
    },
    coursesTitle: {
        fontSize: '22px',
        fontWeight: 'bold',
    },
    technologyNameBlock: {
        position: 'absolute',
        top: '',
        // zIndex: '1',
        width: '100%'
    },
    // technologyTitle: {
    //     backgroundColor: 'white',
    //     border: '2px solid black'
    // },
    roadmapLine: {
        position: 'absolute',
        top: '0',
        left: '50%',
        // zIndex: '0',
        // height: '100%',
        height: '300px',
        width: '2px',
        backgroundColor: 'black'
    },
    moreBtn: {
        textAlign: 'center'
    },
    moreBtnText: {
        fontWeight: 'bold',
        color: '#303f9f'
    },
    courseListItem: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center'
        // '&:hover .markIconCompleted': {
        //     display: 'inline-block'
        // }
        // '&:hover': {
        //     color: 'white'
        // }
    },
    listItemDesc: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
    courseTitle: {
        textAlign: 'start',
    },
    completableBlock: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '61px',
        height: '61px',
    },
    markIcon: {
        position: 'absolute',
        width: '61px',
        height: '61px'
    },
    starIconBlock: {
        position: 'absolute',
        display: 'flex',
        width: '61px',
        height: '61px'
    },
    markIconCompleted: {
        position: 'absolute',
        width: '61px',
        height: '61px',
        display: 'none'
    },
    markForCourseCompleted: {
        position: 'absolute',
        fontSize: '12px',
        color: 'white'
    },
    markIconFull: {
        position: 'absolute',
        width: '61px',
        height: '61px',
    },
    showAllLinkBlock: {
        padding: '8px 0',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.04)'
        }
    },
    showAllLink: {
        color: '#303f9f',
        fontWeight: 'bold',
        textTransform: 'uppercase'
    }
}));