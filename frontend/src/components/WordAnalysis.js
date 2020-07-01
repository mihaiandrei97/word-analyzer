import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
    marginRight: 30,
  },
  table: {
    minWidth: 300,
  },
  row: {
    color: theme.colors.areaColors,
    '&:hover': {
      backgroundColor: theme.colors.main,
      cursor: 'pointer',
      color: '#fff',
    },
  },
  cell: {
    color: 'inherit',
  },
}));

const WordAnalysis = ({
  analyzedWords,
  onWordChosen,
  nbOfWordsAndChars: { nbOfWords, nbOfCharacters },
}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {analyzedWords.length && (
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Cuvinte</TableCell>
                <TableCell align="center">Numar de aparitii</TableCell>
              </TableRow>
            </TableHead>
            <TableBody className={classes.body}>
              {analyzedWords.map((word, index) => {
                return (
                  <TableRow
                    className={classes.row}
                    key={index}
                    onClick={() => onWordChosen(word[0])}
                  >
                    <TableCell className={classes.cell} align="center">
                      {word[0]}
                    </TableCell>
                    <TableCell className={classes.cell} align="center">
                      {word[1]}
                    </TableCell>
                  </TableRow>
                );
              })}
              <TableRow>
                <TableCell align="center">Total cuvinte:</TableCell>
                <TableCell align="center">{nbOfWords}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">Total caractere:</TableCell>
                <TableCell align="center">{nbOfCharacters}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};

export default WordAnalysis;
