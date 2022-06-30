// Load the `got` function.
const got = require('got');



// take a responce from got. then parse the body into a JS object using JSON.parse. then log to terminal.
const handleReceivedResponse = (response) => {
    objectValue = JSON.parse(response.body);
    console.log(objectValue);
  };

  got('https://api.github.com/repos/sinatra/sinatra').then(handleReceivedResponse)