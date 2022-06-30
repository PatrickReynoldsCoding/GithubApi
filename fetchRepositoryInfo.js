const got = require("got");

const fetchRepositoryInfo = (path, callbackFunction) => {
  got("https://api.github.com/repos/" + path).then((response) => {
    callbackFunction(JSON.parse(response.body));
  });
};

fetchRepositoryInfo("sinatra/sinatra", (response) => {
  console.log(response);
});
