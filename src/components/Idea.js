import React, {useState} from 'react'
import {Grid, Paper} from '@material-ui/core';
import {IdeaStyle} from '../styles/Idea';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const Idea = ({ idea, deleteIdea, editIdea }) => {
    const [hover, setHover] = useState(false)
    const classes = IdeaStyle()
    return (
        <Grid className={classes.root} onMouseEnter={() => setHover(!hover)} onMouseLeave={() => setHover(!hover)}>
            <Paper className={classes.paper} >
                <span className={classes.created}>{idea.created}</span>
                <span className={classes.title}>{idea.title}</span>
                <span className={classes.body}>{idea.body}</span>
                <span className={classes.icon}>
                <EditIcon onClick={() => editIdea(idea.id)} />
                {hover && <DeleteIcon onClick={() => deleteIdea(idea.id)} />}
                </span>
            </Paper>
        </Grid>
    )
}

export default Idea
