import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    roadmapTitle: {
        listStyleType: "none"
    },
    skillLevelBlock: {
        textAlign: 'start',
        marginLeft: '30px',
        listStyleType: 'none'
    },
    skillLevelTitle: {
        textDecoration: 'underline'
    },
    technologyTitle: {
        marginLeft: '30px',
        listStyleType: "none"
    }
}))