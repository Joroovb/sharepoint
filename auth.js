const spauth = require('node-sp-auth');

//get auth options
spauth
  .getAuth('https://[DOMAIN].sharepoint.com/', {
    username: '[USERNAME]',
    password: '[PASSWORD]',
  })
  .then((options) => {
    //perform request with any http-enabled library (request-promise in a sample below):
    let headers = options.headers;
    headers['Accept'] = 'application/json;odata=verbose';
  })
  .catch((err) => {
    console.log('error');
  });
