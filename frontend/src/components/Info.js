import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

const API_URL = `https://scrap-dictionary.glitch.me/api/words?word=`;
const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '100%',
    maxWidth: '930px',
    maxHeight: '250px',
    overflowY: 'auto',
    margin: '0 auto',
    marginTop: 30,
  },
  pos: {
    marginBottom: 8,
    marginTop: 8,
  },
  loading: {
    display: 'block',
    margin: '0 auto',
    marginTop: 30,
  },
  footer: {
    display: 'flex',
    padding: '8px',
    justifyContent: 'space-between',
  },
});
const Info = ({ currentWord, onWordIgnored }) => {
  const [info, setInfo] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(true);

  const classes = useStyles();

  React.useEffect(() => {
    setIsLoading(true);
    fetch(API_URL + currentWord)
      .then((response) => response.json())
      .then((data) => {
        setInfo(data.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [currentWord]);

  const buildCard = () => {
    return (
      <Card className={classes.root}>
        <CardContent>
          <Typography
            className={classes.title}
            variant="h5"
            color="primary"
            gutterBottom
          >
            {currentWord}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Definitie
          </Typography>
          <Typography variant="body2" component="p">
            {info.definition
              ? info.definition
              : 'Nu a fost gasita o definitie pentru acest cuvant.'}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Sinonime
          </Typography>
          <Typography variant="body2" component="p">
            {info.synonyme
              ? info.synonyme
              : 'Nu au fost gasite sinonime pentru acest cuvant.'}
          </Typography>
        </CardContent>

        <div className={classes.footer}>
          <Button
            onClick={onWordIgnored}
            color="secondary"
            size="small"
            variant="contained"
          >
            Ignore
          </Button>
          <Typography variant="body2" component="p">
            Continutul a fost luat de pe{' '}
            <a style={{ color: '#d5d5d5' }} href="https://dexonline.ro/">
              dexonline.ro
            </a>
          </Typography>
        </div>
      </Card>
    );
  };
  return (
    <React.Fragment>
      {!isLoading ? (
        buildCard()
      ) : (
        <CircularProgress className={classes.loading} color="primary" />
      )}
    </React.Fragment>
  );
};

export default Info;
