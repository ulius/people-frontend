var React = require('react/addons');
var Router = require('react-router');
var { Navigation, RouteHandler, Link } = Router;
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React); 
var StoreWatchMixin = Fluxxor.StoreWatchMixin;

import _ from 'lodash';
import Family from './Family.jsx';


var FamiliesTable = React.createClass({
  mixins: [Navigation, FluxMixin, StoreWatchMixin('FamiliesStore')],

  componentWillMount() {
    this.getFlux().actions.families.query();
  },

  getStateFromFlux() {
    return {
      families: this.getFlux().store("FamiliesStore").getAll(),
    };
  },

  render() {
    console.log(this.state.families);
    return (
      <ul className="todo-list m-t small-list">
        {_.map(this.state.families, (family) => {
          return <Family key={family.id} family={family} />
          })}
      </ul>
    );
  }
});

module.exports = FamiliesTable;
