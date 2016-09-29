var React = require('react');
var transparentBg = require('../styles').transparentBg;
var Prompt = require('../components/Prompt');

var PromptContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      username: ''
    }
  },
  onUpdateUser: function (e) {
    this.setState({
      username: e.target.value
    })
  },
  onSubmitUser: function (e){
    e.preventDefault();
    var username = this.state.username;
    this.setState({
      username: ''
    });
    if(this.props.routeParams.playerOne){
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.routeParamas.playerOne,
          playerTwo: this.state.username
        }
      })
      //go to /battle
    }else {
      //go to /playerTwo
      this.conext.router.push('/playerTwo' + this.state.username)
    }
  },
  render: function () {
    return (
      <Prompt />
    )
  }
});

module.exports = PromptContainer;
