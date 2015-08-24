var React = require('react/addons');
var cx = React.addons.classNameSet;
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React); 
var StoreWatchMixin = Fluxxor.StoreWatchMixin;

import _ from 'lodash';
import Person from './Person.jsx';


var Family = React.createClass({
  mixins: [FluxMixin],

  getInitialState() {
    return { 
      addPerson: false,
      personText: ''
    };
  },

  toggleAddPerson() {
    this.setState({
      addPerson: !this.state.addPerson
    });
  },

  handlePersonInput(e) {
    this.setState({
      personText: e.target.value
    });
  },

  handleSavePerson(e) {
    e.preventDefault();
    if (this.state.personText.length > 0) {
      this.getFlux().actions.people.create({
        name: this.state.personText,
        family: { id: this.props.family.id }
      });  
      this.setState({personText: ''});
    }
  },

  renderInput() {
    if (this.state.addPerson) {
      return (
        <tr>
          <td className="no-borders">
            <input onChange={this.handlePersonInput} value={this.state.personText}/>
            <button className="btn btn-sm btn-primary" style={{marginLeft: 5}}
              onClick={this.handleSavePerson}>
              save
            </button>
            <button className="btn btn-sm" style={{marginLeft: 5}}
              onClick={this.toggleAddPerson}>
              cancel
            </button>
          </td>
        </tr>
      );
    } else {
      return (
        <tr>
          <td className="no-borders">
            <button className="btn btn-sm" onClick={this.toggleAddPerson}>
              add person
            </button> 
          </td>
        </tr>
      )
    }
  },

  render() {
    var family = this.props.family; 

    return (
      <div className="ibox">
        <div className="ibox-content" style={{border: '1px solid #e5e5e5'}}>
          <h3>{family.name}
          </h3>
          <table className="table">
            <tbody>
              {_.map(family.members, (person) => {
                return (
                  <Person person={person}/>
                );
              })}
              {this.renderInput()}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
});

module.exports = Family;
