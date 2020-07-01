import React from 'react';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Modal from './Modal';
import Modal_image1 from '../assets/modal/modal_1.png';
import Modal_image2 from '../assets/modal/modal_2.png';
import Modal_image3 from '../assets/modal/modal_3.png';
import Modal_image4 from '../assets/modal/modal_4.png';
import Modal_image5 from '../assets/modal/modal_5.png';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles(() => ({
  image: {
    width: 500,
    height: 300,
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

const ModalObject = [
  {
    image: Modal_image1,
    text: 'Odata ce ati ajuns la un draft final, puneti textul aici.',
  },
  {
    image: Modal_image2,
    text:
      'Apasati pe butonul Analizeaza text, urmand ca apoi sa fie extrase cele mai utilizate cuvinte.',
  },
  {
    image: Modal_image3,
    text:
      'Rezultatul va fi afisat in tabelul din stanga. Pentru a vedea sinonimele si definitia unui cuvant, apasati pe acesta.',
  },
  {
    image: Modal_image4,
    text:
      'Pe ecran o sa apara definitia cuvantului si sinonimele acestuia, iar toate instantele cuvantului o sa fie evidentiate in text.',
  },
  {
    image: Modal_image5,
    text:
      'Poti alege sa ignori un cuvant atunci cand aplicatia nu este folositoare pentru cazul specific.',
  },
];

const TutorialModal = ({ setShowModal }) => {
  const classes = useStyles();
  const [currentModal, setCurrentModal] = React.useState(0);

  const onNext = () => {
    if (currentModal < ModalObject.length - 1) {
      setCurrentModal((currentModal) => currentModal + 1);
    }
  };

  const onPrev = () => {
    if (currentModal > 0) {
      setCurrentModal((currentModal) => currentModal - 1);
    }
  };

  return (
    <Fade in={true}>
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
          Cum se utilizeaza aplicatia?
        </Typography>
        <div className="content">
          <img
            className={classes.image}
            src={ModalObject[currentModal].image}
            alt="paste your essay"
          />
          <Typography align="left" paragraph={true} color="primary">
            {ModalObject[currentModal].text}
          </Typography>
          <div className={classes.buttonContainer}>
            <Button
              variant="outlined"
              color="primary"
              size="small"
              onClick={onPrev}
              disabled={!(currentModal > 0)}
            >
              Prev
            </Button>

            <Button
              variant="outlined"
              color="primary"
              size="small"
              onClick={onNext}
              disabled={!(currentModal < ModalObject.length - 1)}
            >
              Next
            </Button>
          </div>
        </div>
      </Modal>
    </Fade>
  );
};

export default TutorialModal;
