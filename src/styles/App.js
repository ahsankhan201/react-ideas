import { makeStyles } from '@material-ui/core/styles';

export const AppStyle = makeStyles(theme => ({
    root: {
        padding: '25px'
    },
    title: {
        fontSize: '30px',
        fontFamily: 'cursive',
        display: 'inline'
    },
    select: {
        float: 'right'
    },
    placeholder: {
        fontSize: '30px',
        textAlign: 'center',
        position: 'absolute',
        left: '0',
        lineHeight: '200px',
        marginTop: '-100px',
        top: '50%',
        width: '100%'
    },
    icon: {
        position: 'absolute',
        right: '20px',
        bottom: '20px',
    }
}));