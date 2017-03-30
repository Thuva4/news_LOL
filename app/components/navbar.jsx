var React = require('react');
var {Link , IndexLink} = require('react-router');

var Navbar= React.createClass({
  render: function () {
    return(
    <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <a className="navbar-brand" href="#">News LOL</a>
      </div>
      <ul className="nav navbar-nav navbar-left">
        <li><a>About</a></li>
      </ul>
      <ul className="nav navbar-nav navbar-right">
      <li><a href = "#about" > Thuvarakan </a></li>
      <li><a href="https://www.facebook.com/Semicolon04" target="_blank">Semicolon</a></li>
    </ul>
    </div>
  </nav>

);

  }
});

module.exports = Navbar;
