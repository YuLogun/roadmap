import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    authorizationContainer: {
        display: 'flex',
        width: '100vw',
        height: '100vh'
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
        background: 'linear-gradient(90.22deg, rgba(0, 224, 255, 0) 0.18%, #0047FF 99.81%)'
        // backgroundColor: '#cbcbcb'
    },
    formBody: {
        display: 'flex',
        flexDirection: 'column'
    },
    formField: {
        marginBottom: '20px'
    },
    formBtn: {
        alignSelf: 'center',
        padding: '10px 40px',
        background: 'linear-gradient(180deg, #00E0FF 0%, #0047FF 122.82%)',
        borderRadius: '100px'
    }
}));