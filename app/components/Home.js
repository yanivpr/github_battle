var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var MainContainer = require('./MainContainer');

var Home = React.createClass({
  render() {
    return(
      <MainContainer>
        <h1>Github Battle</h1>
        <p className='lead'>Some motto</p>
        <Link to='/playerOne'>
          <button type='button' className='btn btn-large btn-success'>Get started</button>
        </Link>
      </MainContainer>
    );
  }
});

module.exports = Home;
