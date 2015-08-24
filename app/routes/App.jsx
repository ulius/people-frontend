var React = require('react/addons');
var Router = require('react-router');
var { RouteHandler, transition } = Router;

var App = React.createClass({
  render() {
    return (
      <div style={{background: 'white', height: '100%', width: '100%'}}>
        <div className="top-navigation white-bg">
          <div className="row border-bottom white-bg" style={{height: '100%'}}>
            <div className="wrapper wrapper-content">
              <div className="container">
                <div className="row" style={{marginTop: 40}}>
                  <div className="col-md-6 col-md-offset-3">
                    <div className="ibox float-e-margins">
                      <RouteHandler {...this.props}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = App;
