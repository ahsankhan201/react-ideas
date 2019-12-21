import { makeStyles } from '@material-ui/core/styles';

export const CreateIdeaStyle = makeStyles(theme => ({
    dialogPaper: {
        width: '65vw',
        maxWidth: '65vw',
        borderRadius: 10,
    },
    dialogTitle: {
        backgroundColor: '#F4F4F4',
        padding: '25px 38px 19px 38px',
        fontSize: 22,
    },
    closeIconBtn: {
        padding: '0px 4px',
        color: '#f50057',
    },
    dialogContent: {
        padding: '18px 0px 0px 38px',
    },
    inputLabel: {
        fontSize: 14,
        color: '#000000',
        fontWeight: 500,
        marginBottom: 15,
    },
    dropdownIcon: {
        color: '#0FB99E',
        fontSize: 36,
        top: 'calc(50% - 18px)',
    },
    selectDropdown: {
        paddingRight: 36,
    },
    selectInput: {
        padding: 14,
    },
    select: {
        fontSize: 14,
        width: '100%',
    },
    selectWrapper: {
        paddingRight: 38,
    },
    objectiveWrapper: {
        marginTop: 34,
        paddingRight: 38,
    },
    multilineTextfield: {
        width: '100%',
        fontSize: 14,
    },
    singleLineInput: {
        fontSize: 14,
        padding: 14,
        alignItems: 'flex-start',
    },
    multilineInput: {
        padding: 14,
        fontSize: 14,
        minHeight: 90,
        alignItems: 'flex-start',
    },
    instructionWrapper: {
        marginTop: 22,
        paddingRight: 38,
    },
    multilineInputLarge: {
        padding: 14,
        fontSize: 14,
        minHeight: 225,
        alignItems: 'flex-start',
    },
    actionWrapper: {
        padding: '35px 38px',
    },
    actionBtn: {
        fontSize: 22,
        color: '#ffffff',
        fontWeight: 'bold',
        backgroundColor: '#0FB99E',
        borderRadius: 50,
        textTransform: 'none',
        '&:hover': {
            backgroundColor: '#00826d',
        },
    },
    saveBtn: {
        // padding: '6px 98px',
        width: '100%'
    },
    targetBtn: {
        padding: '6px 50px',
    },
    helperText: {
        marginLeft: 14,
    },
    counter: {
        textAlign: 'right',
        fontSize: '10px',
        display: 'block',
        width: 'calc(100% - 38px)'
    }
}));