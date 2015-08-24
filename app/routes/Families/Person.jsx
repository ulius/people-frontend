var React = require('react/addons');
var cx = React.addons.classNameSet;
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React); 
var StoreWatchMixin = Fluxxor.StoreWatchMixin;


var Person = React.createClass({
  mixins: [FluxMixin],

  getInitialState() {
    return { 
      editing: false
    };
  },


  handlePersonInput(e) {
    this.setState({
      personText: e.target.value
    });
  },

  handleUpdatePerson() {
    this.getFlux().actions.people.update(this.props.person.id, { 
     name: this.state.personText 
    });  
    this.setState({editing: false});
  },

  handleDeletePerson() {
    if (confirm(`Are you sure you want to delete ${this.props.person.name}?`)) {
      this.getFlux().actions.people.delete(this.props.person.id);  
    } 
  },

  handleToggleEdit() {
    console.log('toggle edit');
    this.setState({editing: !this.state.editing});
  },

  renderName() {
    if (this.state.editing) {
      return (
        <span>
          <input defaultValue={this.props.person.name} 
            value={this.state.personText} onChange={this.handlePersonInput}></input>
          <button className="btn btn-sm btn-primary" style={{marginLeft: 5}}
            onClick={this.handleUpdatePerson}>save</button>
          <button className="btn btn-sm" style={{marginLeft: 5}}
            onClick={this.handleToggleEdit}>
            cancel
          </button>
        </span>
      );
    } else {
      return (
        <span onClick={this.handleToggleEdit}>
          {this.props.person.name}
        </span>
      )
    }
  },

  render() {
    var person = this.props.person; 

    return (
      <tr> 
        <td className="no-borders">
          <button className="btn btn-xs" style={{marginRight: 3, padding: '1 4'}}
            onClick={this.handleDeletePerson}>
            X
          </button>
          {this.renderName()}
        </td>
      </tr>
    );
  }
});

module.exports = Person;
