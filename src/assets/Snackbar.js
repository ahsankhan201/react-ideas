import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import { amber, green } from '@material-ui/core/colors';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import WarningIcon from '@material-ui/icons/Warning';
import { makeStyles } from '@material-ui/core/styles';

const variantIcon = {
    success: CheckCircleIcon,
    warning: WarningIcon,
    error: ErrorIcon,
    info: InfoIcon,
};

const useStyles = makeStyles(theme => ({
    success: {
        backgroundColor: green[600],
    },
    error: {
        backgroundColor: theme.palette.error.dark,
    },
    info: {
        backgroundColor: theme.palette.primary.main,
    },
    warning: {
        backgroundColor: amber[700],
    },
    icon: {
        fontSize: 20,
    },
    iconVariant: {
        opacity: 0.9,
        marginRight: theme.spacing(1),
    },
    message: {
        display: 'flex',
        alignItems: 'center',
    },
    margin: {
        margin: theme.spacing(1),
    },
}));

const SnackbarComponent = (props) => {
    console.log('Component Called')
    const classes = useStyles();
    const { snackbar } = props;
    const Icon = variantIcon[snackbar.variant];

	const closeSnackbar = () => {
		props.setSnackbar();
	}

    return (
        <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            open={snackbar.open} autoHideDuration={3000} onClose={closeSnackbar}>
            <SnackbarContent
                className={clsx(classes[snackbar.variant], classes.margin)}
                aria-describedby="client-snackbar"
                message={
                    <span id="client-snackbar" className={classes.message}>
                        <Icon className={clsx(classes.icon, classes.iconVariant)} />
                        {snackbar.message}
                    </span>
                }
            />
        </Snackbar>
    );
}

export default SnackbarComponent
