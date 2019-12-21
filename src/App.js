import React, { useState, useEffect } from 'react';
import { Container, Grid, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import Idea from './components/Idea';
import CreateIdea from './components/CreateIdea';
import SnackbarComponent from './assets/Snackbar';
import Sorting from './components/Sorting'
import { AppStyle } from './styles/App';

import * as RequestService from './services/RequestService'

const App = () => {
  const classes = AppStyle();
  const [allIdeas, setAllIdeas] = useState([]);
  const [formStatus, setFormStatus] = useState(false);
  const [ideaData, setIdeaData] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, variant: 'success', message: '' });
  const [sorting, setSorting] = useState('');
  const [id, setId] = useState(1)


  useEffect(() => {
    RequestService.fetchIdeas().then(res => setAllIdeas(JSON.parse(res)))
  }, []);

  useEffect(() => localStorage.setItem('ideas', JSON.stringify(allIdeas)), [allIdeas])

  const handleNewIdea = idea => {
    setFormStatus(false)
    setAllIdeas([...allIdeas, idea]);
    setSnackbar({ open: true, variant: 'success', message: 'Idea created' });
    setId(id + 1)
  }

  const handleSorting = (sort) => {
    setSorting(sort);
    let sortedIdeas = allIdeas.sort((a, b) => (a[sort] > b[sort]) ? 1 : -1);
    setAllIdeas(sortedIdeas)
  }

  const deleteIdea = id => {
    RequestService.deleteIdea(allIdeas, id).then(response => {
      setAllIdeas(response);
      setSnackbar({ open: true, variant: 'success', message: 'Idea Deleted' })
    })
  }


  const handleEditIdea = id => {
    let selectedIdea = [...allIdeas].find(x => x.id === id);
    setIdeaData(selectedIdea);
    setEditMode(!editMode)
    setFormStatus(!formStatus);
  }

  const updateIdea = idea => {
    console.log('ALl', allIdeas)
    RequestService.updateIdea(allIdeas, idea).then(response => {
      setAllIdeas(response);
      setEditMode(false)
      setFormStatus(false);
      setSnackbar({ open: true, variant: 'success', message: 'Idea Updated' })
    })
  }

  return (
    <Container maxWidth="md" className={classes.root}>
      <span className={classes.title}>Ideo-Logus</span>
      {allIdeas.length > 0 ? <span className={classes.select}>
        <Sorting handleSorting={(sort) => handleSorting(sort)} sorting={sorting} />
      </span>: null}
      <Fab color="secondary" onClick={() => setFormStatus(true)} className={classes.icon}>
        <AddIcon />
      </Fab>
      {allIdeas.length > 0 ? <Grid >
        {allIdeas.map((idea, index) => (
          <Idea key={index} idea={idea} deleteIdea={(id) => deleteIdea(id)} editIdea={(id) => handleEditIdea(id)} />
        ))}
      </Grid> : <span className={classes.placeholder}>Let's Creates Some Ideas</span>}
      <Grid >
        {formStatus ? <CreateIdea id={id} open={formStatus} editMode={editMode} ideaData={ideaData} onClose={() => setFormStatus(false)}
          submitIdea={(idea) => handleNewIdea(idea)} updateIdea={(idea => updateIdea(idea))} /> : null}
      </Grid>
      <SnackbarComponent snackbar={snackbar} setSnackbar={() => setSnackbar({ ...snackbar, open: false })} />
    </Container>
  );
}

export default App;
