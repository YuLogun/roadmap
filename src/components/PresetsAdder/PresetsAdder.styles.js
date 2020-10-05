import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    presetsAdderContainer: {
        height: '85vh',
    },
    presetsAdderHeader: {
        display: 'flex',
        alignItems: 'center'
    },
    presetsAdderBody: {
        height: '95%'
    },
    formBody: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        alignItems: 'flex-start',
        height: '95%'
    },
    formInputs: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column'
    },  
    formField: {
        marginTop: '30px',
        width: '60%'
    },
    techTags: {
        marginTop: '30px',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexWrap: 'wrap',
        width: '100%'
    },
    techTagItem: {
        margin: '10px 10px 0 0'
    },
    formButtons: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    }
}));