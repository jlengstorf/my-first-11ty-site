const fetch = require('node-fetch');

module.exports = async () => {
  const result = await fetch(
    'https://vnkupgyb.api.sanity.io/v1/graphql/production/default',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query {
            allEpisodes(limit: 10) {
              title
            }
          }
        `,
        variables: {},
      }),
    }
  ).then((response) => response.json());

  return result.data.allEpisodes;
};
