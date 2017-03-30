var React = require('react');
var ReactDOM = require('react-dom');

var Navbar = require('./components/navbar.jsx');
var {Route , Router, IndexRoute} = require('react-router');
var Main = require('./components/main.jsx');
var About = require('./components/about.jsx');

ReactDOM.render(
  <div>
    <Main></Main>
  </div>,
  document.getElementById('app')
);
