const fetch = require('node-fetch');

module.exports = async () => {
  const characters = await fetch(
    'https://rickandmortyapi.com/api/character/'
  ).then((response) => response.json());

  return characters.results;
};
