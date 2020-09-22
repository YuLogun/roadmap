import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    authorizationContainer: {
        display: 'flex',
        width: '100vw',
        height: '93vh'
    },
    authFormContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50vw',
    },
    authLogoContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50vw',
        backgroundColor: '#cbcbcb'
    },
    formBody: {
        display: 'flex',
        flexDirection: 'column'
    },
    formField: {
        marginBottom: '20px'
    }
}));