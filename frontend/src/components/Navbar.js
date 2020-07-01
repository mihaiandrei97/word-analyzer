import React from 'react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Switch from '@material-ui/core/Switch';

import TutorialModal from './TutorialModal';
import QuestionsModal from './QuestionsModal';

const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1,
  },
  list: {
    display: 'flex',
  },
  image: {
    maxWidth: '100%',
    maxHeight: '300px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  closeBtn: {
    position: 'absolute',
    top: '0px',
    right: '0px',
  },
}));

const Navbar = ({ toggleTheme, isDarkTheme }) => {
  const classes = useStyles();
  const [showTutorialModal, setShowTutorialModal] = React.useState(false);
  const [showQuestionsModal, setShowQuestionsModal] = React.useState(false);

  return (
    <div className={classes.root}>
      <AppBar className={classes.test} position="static">
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            Word Analyzer
          </Typography>
          <List className={classes.list} component="ul" aria-label="main nav">
            <ListItem>
              <Switch
                checked={isDarkTheme}
                onChange={toggleTheme}
                inputProps={{ 'aria-label': 'theme toggle' }}
              />
            </ListItem>
            <ListItem button onClick={() => setShowTutorialModal(true)}>
              <ListItemText primary="Tutorial" />
            </ListItem>
            <ListItem button onClick={() => setShowQuestionsModal(true)}>
              <ListItemText primary="Intrebari" />
            </ListItem>
          </List>
        </Toolbar>
      </AppBar>
      {showTutorialModal ? (
        <TutorialModal setShowModal={setShowTutorialModal} />
      ) : null}

      {showQuestionsModal ? (
        <QuestionsModal setShowModal={setShowQuestionsModal} />
      ) : null}
    </div>
  );
};

export default Navbar;
