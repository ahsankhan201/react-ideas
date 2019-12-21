import React, { useState } from 'react';
import {
    Button, DialogTitle, DialogContent, DialogActions, Dialog, InputLabel, TextField, Grid, IconButton,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { CreateIdeaStyle } from '../styles/CreateIdea';
import { MAX_CHARACTER_LIMIT } from '../config/constants'

const CreateIdea = ({ submitIdea, ideaData, editMode, updateIdea, open, onClose, id }) => {
    const [formData, setFormData] = useState(editMode ? ideaData : { title: '', body: '' });
    const classes = CreateIdeaStyle();
    const [error, setError] = useState(false);

    const handleSubmitIdea = (e) => {
        e.preventDefault();
        if (!formData.title || !formData.body) {
            setError(true);
            return
        }
        if (editMode) updateIdea(formData)
        else {
            let data = { ...formData, id: id, created: (new Date()).toLocaleDateString().slice(0.10) }
            submitIdea(data)
        }
    }

    const handleCancel = () => {
        onClose();
    };

    return (
        <Dialog classes={{ paper: classes.dialogPaper }} disableBackdropClick disableEscapeKeyDown maxWidth="xs"
            aria-labelledby="confirmation-dialog-title" open={open}>

            <DialogTitle className={classes.dialogTitle} id="confirmation-dialog-title">
                <Grid container>
                    <Grid item xs={6}>
                        New Idea
					</Grid>
                    <Grid item xs={6} container justify="flex-end">
                        <IconButton className={classes.closeIconBtn} onClick={handleCancel}>
                            <CloseIcon className={classes.closeIcon} />
                        </IconButton>
                    </Grid>
                </Grid>
            </DialogTitle>

            <DialogContent className={classes.dialogContent}>
                <Grid container>
                    <Grid item xs={12} className={classes.selectWrapper}>
                        <InputLabel className={classes.inputLabel}>Title</InputLabel>
                        <TextField
                            autoFocus
                            variant="outlined"
                            multiline
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            error={error && !formData.title}
                            helperText={error && !formData.title && "Title can't be empty"}
                            className={classes.multilineTextfield}
                            InputProps={{
                                classes: {
                                    root: classes.singleLineInput,
                                },
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} className={classes.objectiveWrapper}>
                        <InputLabel className={classes.inputLabel}>Description</InputLabel>
                        <TextField
                            variant="outlined"
                            multiline
                            value={formData.body}
                            onChange={(e) => setFormData({ ...formData, body: e.target.value })}
                            error={error && !formData.body}
                            helperText={error && !formData.body && "Description can't be empty"}
                            className={classes.multilineTextfield}
                            InputProps={{
                                classes: {
                                    root: classes.multilineInput,
                                },
                            }}
                            inputProps={{ maxLength: MAX_CHARACTER_LIMIT }}
                        />
                    </Grid>
                    {(MAX_CHARACTER_LIMIT - formData.body.length) > 125 ? <span className={classes.counter}>{formData.body.length}/{MAX_CHARACTER_LIMIT}</span> : null}
                </Grid>
            </DialogContent>

            <DialogActions className={classes.actionWrapper}>
                <Grid container>
                    <Grid item xs={12}>
                        <Button className={classes.saveBtn} variant="contained" type="submit"
                            color="secondary" onClick={e => handleSubmitIdea(e)}>
                            {editMode ? 'Update Idea' : 'Submit Idea'}
                        </Button>
                    </Grid>
                </Grid>
            </DialogActions>
        </Dialog>
    )
}

export default CreateIdea