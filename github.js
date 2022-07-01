//I believe this class will hold the repo data and return it using the get repo data

const GithubApi = require('./githubApi');
const got = require('got');

class Github {

  constructor(apiObject){
    this.apiObject = apiObject;
  }

  fetch(path) {
    this.apiObject.fetchRepositoryData(path, (repositoryData) => {
        this.repositoryData = repositoryData;
    })
  };
  


  // fetchRepositoryData(path) {
  //   got("https://api.github.com/repos/" + path).then((response) => {
  //     this.repositoryData = JSON.parse(response.body);
  //   });
  // }
  // i truly don't understand why both classes couldn't be replaced with this one function above...


  getRepoData() {
    return this.repositoryData; 
  }
}

module.exports = Github