const got = require("got");

class GithubApi {
  fetchRepositoryData(path, callbackFunction) {
    got("https://api.github.com/repos/" + path).then((response) => {
      callbackFunction(JSON.parse(response.body));
    });
  }
}


// const api = new GithubApi();

// api.fetchRepositoryData('sinatra/sinatra', (repositoryData) => {
//   console.log(repositoryData);
// });

module.exports = GithubApi;

