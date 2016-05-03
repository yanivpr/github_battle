var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
var githubHelpers = require('../utils/githubHelpers');

var ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState() {
    return {
      isLoading: true,
      playersInfo: []
    }
  },
  componentDidMount() {
    var query = this.props.location.query;
    githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
      .then(function(players) {
        this.setState({
          isLoading: false,
          playersInfo: [players[0], players[1]]
        })
      }.bind(this))
  },
  handleInitialeBattle() {
    this.context.router.push({
      pathname: '/results',
      state: {
        playersInfo: this.state.playersInfo
      }
    })
  },
  render() {
    return(
      <ConfirmBattle
        isLoading={this.state.isLoading}
        onInitiateBattle={this.handleInitialeBattle}
        playersInfo={this.state.playersInfo}
      />
    );
  }
});

module.exports = ConfirmBattleContainer;
