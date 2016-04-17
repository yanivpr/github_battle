var React = require('react');
var PropTypes = React.PropTypes;
var transparentBg = require('../styles').transparentBg;

function Prompt(props) {
  return(
    <div className='jumbotron col-sm-6 col-sm-offset-3 text-center' style={transparentBg}>
      <h1>{props.header}</h1>
      <div className='col-sm-12'>
        <form onSubmit={props.onSubmitUser}>
          <div className='form-group'>
            <input
              className='form-control'
              placeholder='Github Username'
              onChange={props.onUpdateUser}
              type='text'/>
          </div>
          <div className='from-group col-sm-4 col-sm-offset-4'>
            <button
              className='btn btn-block btn-success'
              value={props.username}
              type='submit'>
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

Prompt.propTypes = {
  header: PropTypes.string.isRequired,
  onSubmitUser: PropTypes.func.isRequired,
  onUpdateUser: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired
};
// var Prompt = React.createClass({
//   propTypes: {
//     header: PropTypes.string.isRequired,
//     onSubmitUser: PropTypes.func.isRequired,
//     onUpdateUser: PropTypes.func.isRequired,
//     username: PropTypes.string.isRequired
//   },
//   render() {
//     return(
//       <div className='jumbotron col-sm-6 col-sm-offset-3 text-center' style={transparentBg}>
//         <h1>{this.props.header}</h1>
//         <div className='col-sm-12'>
//           <form onSubmit={this.props.onSubmitUser}>
//             <div className='form-group'>
//               <input
//                 className='form-control'
//                 placeholder='Github Username'
//                 onChange={this.props.onUpdateUser}
//                 type='text'/>
//             </div>
//             <div className='from-group col-sm-4 col-sm-offset-4'>
//               <button
//                 className='btn btn-block btn-success'
//                 value={this.props.username}
//                 type='submit'>
//                 Continue
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     );
//   }
// });

module.exports = Prompt;