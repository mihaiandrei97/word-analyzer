import React from 'react';

import Modal from './Modal';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
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
  heading: {
    fontSize: '1.8rem',
  },
}));

const QuestionsModal = ({ setShowModal }) => {
  const classes = useStyles();
  return (
    <div>
      <Modal>
        <Button
          onClick={() => setShowModal(false)}
          className={classes.closeBtn}
          color="secondary"
          size="small"
          variant="contained"
        >
          X
        </Button>
        <Typography
          className={classes.heading}
          variant="h2"
          align="center"
          paragraph={true}
          color="primary"
        >
          Intrebari Frecvente
        </Typography>
        <div>
          <Typography
            variant="h5"
            align="left"
            paragraph={true}
            color="primary"
          >
            In ce limba trebuie sa fie introdus textul?
          </Typography>
          <Typography align="left" paragraph={true} color="primary">
            In acest moment aplicatia functioneaza doar pe text scris in limba
            romana.
          </Typography>
          <Typography
            variant="h5"
            align="left"
            paragraph={true}
            color="primary"
          >
            Verifica aplicatia greselile de ortografie?
          </Typography>
          <Typography align="left" paragraph={true} color="primary">
            Nu. Aplicatia trebuie folosita pe un text care este apropiat de un
            draft final. Asta inseamna ca verificarile necesare pentru
            ortografie si stilizare trebuie realizate inainte de introducerea
            textului in aplicatie.
          </Typography>
          <Typography
            variant="h5"
            align="left"
            paragraph={true}
            color="primary"
          >
            De ce anumite cuvinte sunt interpretate gresit?
          </Typography>
          <Typography align="left" paragraph={true} color="primary">
            Aplicatia nu poate analiza contextul in care este utilizat cuvantul.
            Daca definitia sau sinonimele nu sunt de ajutor, puteti utiliza
            butonul IGNORE,iar acel cuvant nu va mai fi analizat pana la
            urmatoarea vizita.
          </Typography>
        </div>
      </Modal>
    </div>
  );
};

export default QuestionsModal;
