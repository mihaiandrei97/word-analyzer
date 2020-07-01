export const capitalize = (s) => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export const applyHighlights = (text, keyword) => {
  let stringToGoIntoTheRegex = `${keyword.toLowerCase()}|${capitalize(
    keyword
  )}`;

  let regex = new RegExp(stringToGoIntoTheRegex, 'g');

  text = text.replace(/\n$/g, '\n\n').replace(regex, '<mark>$&</mark>');
  return text;
};

export const analyzeWords = (text, exceptions = []) => {
  let exceptionArray = [
    'eu',
    'tu',
    'el',
    'ea',
    'mine',
    'tine',
    'noi',
    'voi',
    'ei',
    'ele',
    'mie',
    'lui',
    'a',
    'cu',
    'de',
    'in',
    'în',
    'la',
    'între',
    'pe',
    'prin',
    'sub',
    'fie',
    'din',
    'dar',
    'este',
  ];
  if (exceptions.length > 0) {
    exceptionArray = [...exceptionArray, ...exceptions];
  }

  let dictionary = {};
  let nbOfWords = 0;
  let nbOfCharacters = text.length;
  text.split(/[\s.,;„:”]+/).forEach((item) => {
    item = item.toLowerCase();
    nbOfWords++;
    if (exceptionArray.includes(item)) return;
    if (item != '' && item.length > 2) {
      if (dictionary[item]) {
        dictionary[item]++;
      } else {
        dictionary[item] = 1;
      }
    }
  });

  let dictArray = Object.keys(dictionary)
    .map((item) => [item, dictionary[item]])
    .sort((a, b) => b[1] - a[1])
    .splice(0, 10);

  return [dictArray, nbOfWords, nbOfCharacters];
};
