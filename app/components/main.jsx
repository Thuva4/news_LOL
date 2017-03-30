var React = require('react');
var ReactDOM = require('react-dom');
var Navbar = require('./navbar.jsx');
var Footer = require('./footer.jsx');
var Newspage = require('./newspage.jsx');
var Main = React.createClass({
    render: function() {
        return (
            <div className='Well'>
                <Navbar></Navbar>
                <div className="container">
                    <Newspage></Newspage>
                </div>
                <br></br>
                <br></br>
                <Footer></Footer>
            </div>
        )
    }
});

module.exports = Main;
