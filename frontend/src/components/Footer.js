import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  title: {
    color: theme.colors.footerColor,
    '& a': {
      color: theme.colors.footerColor,
    },
  },
  bar: {
    color: '#212121',
    display: 'flex',
    justifyContent: 'center',
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Toolbar className={classes.bar}>
        <Typography variant="h6" className={classes.title}>
          Made with love by{' '}
          <a
            href="https://github.com/mihaiandrei97"
            target="_blank"
            rel="noreferrer"
          >
            Mihai
          </a>
        </Typography>
      </Toolbar>
    </div>
  );
};

export default Footer;
