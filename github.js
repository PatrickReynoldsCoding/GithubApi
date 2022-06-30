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
  

  getRepoData() {
    return this.repositoryData; 
  }




}

module.exports = Github