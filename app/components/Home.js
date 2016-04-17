var React = require('react');
var transparentBg = require('../styles').transparentBg;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Home = React.createClass({
  render() {
    return(
      <div className='jumbotron col-sm-12 text-center' style={transparentBg}>
        <h1>Github Battle</h1>
        <p className='lead'>Some motto</p>
        <Link to='/playerOne'>
          <button type='button' className='btn btn-large btn-success'>Get started</button>
        </Link>
      </div>
    );
  }
});

module.exports = Home;
