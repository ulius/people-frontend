var React = require('react/addons');
var Router = require('react-router');
var { Navigation, RouteHandler, Link } = Router;
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React); 
var StoreWatchMixin = Fluxxor.StoreWatchMixin;
import FamiliesTable from './FamiliesTable.jsx';


var Families = React.createClass({
  mixins: [Navigation, FluxMixin, StoreWatchMixin('FamiliesStore')],

  getInitialState() {
    return {
      description: ''
    };
  },

  getStateFromFlux() {
    return {
      updating: this.getFlux().store("FamiliesStore").updating
    };
  },

  handleAddFamily(e) {
    e.preventDefault();
    if (this.state.description.length > 0) {
      this.getFlux().actions.families.create({description: this.state.description });  
      this.setState({description: ''});
    }
  },

  handleFamilyInput(e) {
    this.setState({
      description: e.target.value
    });
  },



  render: function() {
    return (
      <div>
        <div className="ibox-title">
          hey
        </div>
        <div className="ibox-content">
          <div className="row">
            <div className="col-sm-12">
              <form onSubmit={this.handleAddFamily}>
                <div className="input-group">
                  <input type="text" placeholder="Add a family..." className="input-sm form-control" 
                    value={this.state.description} onChange={this.handleFamilyInput}/> 
                  <span className="input-group-btn">
                    <button type="submit" className="btn btn-sm btn-primary"> Add</button> 
                  </span>
                </div>
              </form>
              <FamiliesTable />
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Families;
