var axios = require('axios');

var id = 'GITHUB_CLINET_ID';
var secret = 'GITUB_SECRET';
var param = '?client_id=' + id + '&clieht_secret=' + secret;

function getUserInfo(username) {
  return axios.get('https://api.github.com/users/' + username); //can add + params for rate limit.
}

function getRepos(username) {
  return axios.get('https://api.github.com/users/' + username + '/repos' + '?per_page=100');
}

function getTotalStars(repos) {
  return repos.data.reduce(function(prev, current) {
    return prev + current.stargazers_count;
  }, 0);
}

function getPlayersData(player) {
  return getRepos(player.login)
    .then(getTotalStars)
    .then(function(totalStars) {
      return {
        followers: player.followers,
        totalStars: totalStars
      }
    })
}

function calculateScores(players) {
  return [
    players[0].followers * 3 + players[0].totalStars,
    players[1].followers * 3 + players[1].totalStars
  ]
}

var helpers = {
  getPlayersInfo: function(players) {
    return axios.all(players.map(function (username) {
      return getUserInfo(username);
    })).then(function(info) {
      return info.map(function(user) {
        return user.data;
      })
    }).catch(function(err) {
      console.warn('Error in getPlayersInfo: ' + err);
    })
  },
  battle: function(players) {
    var playerOneData = getPlayersData(players[0]);
    var playerTwoData = getPlayersData(players[1]);

    return axios.all([playerOneData, playerTwoData])
      .then(calculateScores)
      .catch(function(err) {
         console.warn('Error in battle: ' + err);
       })
  }
};

module.exports = helpers;
