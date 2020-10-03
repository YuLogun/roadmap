import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    formWindow: {
        minWidth: '420px',
        padding: '20px 30px',
        backgroundColor: 'white',
        borderRadius: '4px',
        outline: 'none'
    },
    modalHeader: {
        width: '100%',
        fontWeight: 'bold',
        textAlign: 'start',
        paddingBottom: '20px'
    },
    headerText: {
        fontSize: '1.25rem'
    },
    modalBody: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    formControl: {
        width: '100%',
        marginBottom: '30px'
    },
    modalInput: {
        width: '100%'
    },
    modalWindow: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalFooter: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    inputField: {
        width: '100%'
    }
    // menuItem: {
    //     zIndex: '10001'
    // }
}));