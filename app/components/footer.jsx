var React = require('react');

var Footer = React.createClass({
    render: function() {
        return (
            <div>
                <footer className="footer">
                    <div className="container text-center">
                        <div>
                            &copy;Semicolon
                            <div className="fb-like" data-href="https://www.facebook.com/Semicolon04" data-layout="button_count" data-action="like" data-size="small" data-show-faces="true" data-share="true"></div>
                        </div>
                        <a href="https://www.facebook.com/thuva4" target='_blank'>
                            <i className="fa fa-facebook"></i>
                        </a>
                        <a href="https://twitter.com/Thuva_4" target='_blank'>
                            <i className="fa fa-twitter"></i>
                        </a>
                        <a href="https://github.com/Thuva4" target='_blank'>
                            <i className="fa fa-github"></i>
                        </a>
                        <a href="https://www.instagram.com/thuva4/" target='_blank'>
                            <i className="fa fa-instagram"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/thuva4/" target='_blank'>
                            <i className="fa fa-linkedin"></i>
                        </a>
                    </div>
                    <div className="container text-center">
                      Powered by News API
                    </div>
                </footer>
            </div>
        )
    }
});

module.exports = Footer;
