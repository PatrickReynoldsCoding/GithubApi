const got = require('got');


  const fetchJson = (url, callbackFunction) => {
    got(url)
      .then((response => {
       myObject = (JSON.parse(response.body));
       callbackFunction(myObject)
      })
  )}

  fetchJson('https://jsonplaceholder.typicode.com/todos', (response) => {
    console.log(response);
  })

  module.exports = fetchJson;
