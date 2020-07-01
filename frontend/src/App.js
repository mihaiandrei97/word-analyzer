import React from 'react';
import ReactDOM from 'react-dom';

import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import WordAnalysis from './components/WordAnalysis';
import { analyzeWords, applyHighlights } from './utils';

import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { theme, darkTheme } from './theme';
import Info from './components/Info';
import Footer from './components/Footer';

const useStyles = makeStyles({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    flex: 1,
    //padding: 30,
  },
  root: {
    display: 'flex',
    padding: 30,
    justifyContent: 'center',
  },
  '@global': {
    mark: {
      borderRadius: '3px',
      color: 'transparent',
      backgroundColor: '#b1d5e5',
    },
    '*::-webkit-scrollbar': {
      width: '0.4em',
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,.1)',
      outline: '1px solid slategrey',
    },
    '#modal': {
      backgroundColor: 'rgba(0, 0, 0, 0.9)',
      position: 'fixed',
      left: 0,
      right: 0,
      bottom: 0,
      top: 0,
      zIndex: 10,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    '#modal:empty': {
      display: 'none',
    },
    '#modal > div': {
      backgroundColor: '#f2f2f2',
      maxWidth: 600,
      padding: 15,
      borderRadius: 5,
      textAlign: 'center',
      position: 'relative',
    },
  },
});

const App = () => {
  const classes = useStyles();

  let textEx = `În recunoaşterea formelor, selecţia şi extragerea caracteristicilor reprezintă o alegere decisivă pentru proiectarea oricărui clasificator. Selecţia caracteristicilor poate fi văzută şi ca un proces de „compresie de date”, fiind asimilată cu o transformare liniară din spaţiul iniţial al observaţiilor într-un spaţiu cu mai puţine dimensiuni. O astfel de transformare este necesară deoarece poate conserva o mare parte din informaţie şi permite aplicarea unor algoritmi în timp real, algoritmi eficienţi fiind doar în spaţii cu dimensiuni reduse
  În machine learning, reducerea dimensionalității este procesul de reducere a numărului de variabile aleatorii luate în considerare prin obținerea unui set de variabile principale. Prin reducerea dimensiunii spațiului se ajunge la mai putine relații între funcții de luat în considerare care pot fi explorate și vizualizate cu ușurință și, de asemenea, duce la o probabilitate mai mica de a supraantrena modelul.
  Reducerea dimensionalității se poate realiza în următoarele moduri:
  •	Eliminarea caracteristicilor: reducerea spațiul caracteristicilor prin eliminarea acestora. Cu toate acestea, exista un dezavantaj, deoarece nu se pot obține informații din caracteristicile ce au fost abandonate.
  •	Selecția caracteristicilor: aplicarea unor teste statistice pentru a le clasifica în funcție de importanța lor urmata de o selectare a unui subset de caracteristici. In urma acestui procedeu exista de asemenea pierderi de informatie deoarece este mai putin stabila fiindca diferite teste pot acorda un scot de importanta diferit caracteristicilor. 
  •	Extragerea caracteristicilor: crearea de noi funcții independente, în care fiecare caracteristică independentă este o combinație a fiecărei caracteristice independente vechi. Aceste tehnici pot fi împărțite în continuare în tehnici de reducere a dimensionalității liniare și neliniare.
  `;
  const [highlightMessage, setHighlightMessage] = React.useState('');
  const [text, setText] = React.useState(textEx);
  const [analyzedWords, setAnalyzedWords] = React.useState([]);
  const [nbOfWordsAndChars, setNbOfWordsAndChars] = React.useState([]);
  const [showAnalysis, setShowAnalysis] = React.useState(false);
  const [currentWord, setCurrentWord] = React.useState('');
  const [ignoredWords, setIgnoredWords] = React.useState([]);
  const [isDarkTheme, setIsDarkTheme] = React.useState(() => {
    try {
      const data = JSON.parse(localStorage.getItem('isDarkTheme'));
      return data ? data : false;
    } catch (e) {
      return false;
    }
  });

  React.useEffect(
    () => localStorage.setItem('isDarkTheme', JSON.stringify(isDarkTheme)),
    [isDarkTheme]
  );

  const onAreaChange = (e) => {
    setText(e.target.value);
    setHighlightMessage('');
  };

  const onAnalyseSubmit = () => {
    if (text.length < 20) return;
    const [words, nbOfWords, nbOfCharacters] = analyzeWords(text);
    setAnalyzedWords(words);
    setNbOfWordsAndChars({ nbOfWords, nbOfCharacters });
    setShowAnalysis(true);
  };

  const onWordChosen = (word) => {
    setCurrentWord(word);
    setHighlightMessage(applyHighlights(text, word));
  };

  const onWordIgnored = () => {
    const newWordList = [...ignoredWords, currentWord];
    const [words, nbOfWords, nbOfCharacters] = analyzeWords(text, newWordList);
    setIgnoredWords(newWordList);
    setCurrentWord('');
    setAnalyzedWords(words);
    setNbOfWordsAndChars({ nbOfWords, nbOfCharacters });
    setShowAnalysis(true);
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className={classes.wrapper}>
      <ThemeProvider theme={isDarkTheme ? darkTheme : theme}>
        <CssBaseline />
        <Navbar toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
        <div className={classes.main}>
          {currentWord && (
            <Info currentWord={currentWord} onWordIgnored={onWordIgnored} />
          )}
          <div className={classes.root}>
            {showAnalysis && (
              <WordAnalysis
                analyzedWords={analyzedWords}
                nbOfWordsAndChars={nbOfWordsAndChars}
                onWordChosen={onWordChosen}
              />
            )}
            <TextArea
              highlightMessage={highlightMessage}
              text={text}
              onAreaChange={onAreaChange}
              setHighlightMessage={setHighlightMessage}
              onAnalyseSubmit={onAnalyseSubmit}
            />
          </div>
        </div>
        <Footer />
      </ThemeProvider>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
