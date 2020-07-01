import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    maxWidth: theme.areaSize.width,
  },
  containerArea: {
    width: theme.areaSize.width,
    height: theme.areaSize.height,
    display: 'block',
    maxWidth: '100%',
    boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
  },
  backdrop: {
    width: theme.areaSize.width,
    height: theme.areaSize.height,
    position: 'absolute',
    zIndex: '1',
    border: `none`,
    overflow: 'auto',
    pointerEvents: 'none',
    maxWidth: '100%',
    backgroundColor: theme.colors.areaColor,
  },
  textarea: {
    width: theme.areaSize.width,
    height: theme.areaSize.height,
    maxWidth: '100%',
    font: `16px/24px 'Open Sans', sans-serif`,
    padding: '10px',
    letterSpacing: '1px',
    display: 'block',
    position: 'absolute',
    zIndex: '2',
    margin: '0',
    border: `none`,
    borderRadius: '0',
    backgroundColor: 'transparent',
    overflow: 'auto',
    resize: 'none',
  },
  highlights: {
    padding: '10px',
    font: `16px/24px 'Open Sans', sans-serif`,
    letterSpacing: '1px',
    whiteSpace: 'pre-wrap',
    wordWrap: 'break-word',
    color: 'transparent',
  },
  mark: {
    borderRadius: '3px',
    color: 'transparent',
    backgroundColor: '#b1d5e5',
  },
  submitArea: {
    marginTop: 16,
    '& button': {
      width: '100%',
    },
  },
}));

const TextArea = ({
  text,
  highlightMessage,
  onAreaChange,
  onAnalyseSubmit,
}) => {
  const classes = useStyles();
  const areaRef = React.useRef();
  const backdropRef = React.useRef();

  React.useEffect(() => {
    const scrollListener = () => {
      let top = areaRef.current.scrollTop;
      let left = areaRef.current.scrollLeft;
      backdropRef.current.scrollTop = top;
      backdropRef.current.scrollLeft = left;
    };
    areaRef.current.addEventListener('scroll', scrollListener);

    return () => areaRef.current.removeEventListener('scroll', scrollListener);
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.containerArea}>
        <div className={classes.backdrop} ref={backdropRef}>
          <div
            className={classes.highlights}
            dangerouslySetInnerHTML={{ __html: highlightMessage }}
          ></div>
        </div>
        <textarea
          className={classes.textarea}
          placeholder="Introduceti aici textul pe care doriti sa il analizati..."
          defaultValue={text}
          ref={areaRef}
          onChange={onAreaChange}
        ></textarea>
      </div>
      <div className={classes.submitArea}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            onAnalyseSubmit();
            areaRef.current.scrollTop = 0;
          }}
        >
          Analizeaza text
        </Button>
      </div>
    </div>
  );
};

export default TextArea;
