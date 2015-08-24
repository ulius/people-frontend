var React = require('react/addons');
var Router = require('react-router');
var { Route, NotFoundRoute, DefaultRoute, Link, RouteHandler } = Router;

var App = require('./routes/App.jsx');
var Families = require('./routes/Families/Families.jsx');


var routes = (
  <Route path="/" handler={App}>
    <DefaultRoute handler={Families}/>
    <Route name="families" handler={Families}/>
  </Route>
);

var router = Router.create({ routes: routes });

module.exports = router;
