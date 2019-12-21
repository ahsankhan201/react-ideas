import { makeStyles } from '@material-ui/core/styles';

export const IdeaStyle = makeStyles(theme => ({
    root: {
        padding: '10px',
        width: '150px',
        height: '150px',
        float: 'left'
    },
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
    },
    created: {
        textAlign: 'left',
        fontSize: '10px',
        display: 'block'
    },
    title: {
        fontSize: '16px',
        fontWeight: 'bold',
        fontStyle: 'Italic',
        display: 'block'
    },
    body: {
        fontSize: '14px',
        display: 'block'
    },
    icon: {
        cursor: 'pointer',
        color: '#f50057',
        display: 'flex',
        justifyContent: 'flex-end',
        width: '100%'
    },
    formContainer: {

    }
}));