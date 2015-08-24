'use strict';

var React = require('react/addons');
var router = require('./router.jsx');
var flux = require('./flux.js');


router.run(function (Handler, state) {
  React.render(<Handler flux={flux}/>, document.body);
});
