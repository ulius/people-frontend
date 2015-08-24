var Fluxxor = require('fluxxor');
var constants = require('../constants.js');
var _ = require('lodash');


var _families = {};

var FamiliesStore = Fluxxor.createStore({
  initialize: function() {
    this.loading = false;
    this.updating = false;
    this.error = null;

    this.bindActions(
      constants.QUERY_FAMILIES, this.onQueryFamilies,
      constants.QUERY_FAMILIES_SUCCESS, this.onQueryFamiliesSuccess,
      constants.QUERY_FAMILIES_FAIL, this.onQueryFamiliesFail,
      
      constants.CREATE_FAMILIES, this.onCreateFamilies,
      constants.CREATE_FAMILIES_SUCCESS, this.onCreateFamiliesSuccess,
      constants.CREATE_FAMILIES_FAIL, this.onCreateFamiliesFail,

      constants.UPDATE_FAMILIES, this.onUpdateFamilies,
      constants.UPDATE_FAMILIES_SUCCESS, this.onUpdateFamiliesSuccess,
      constants.UPDATE_FAMILIES_FAIL, this.onUpdateFamiliesFail,

      constants.CREATE_PEOPLE_SUCCESS, this.onCreatePeopleSuccess,
      constants.UPDATE_PEOPLE_SUCCESS, this.onUpdatePeopleSuccess,
      constants.DELETE_PEOPLE_SUCCESS, this.onDeletePeopleSuccess

    );
  },

  onCreatePeopleSuccess(payload) {
    _families[payload.familyId].members.push({
      id: payload.body.id,
      name: payload.body.name
    });
    this.emit("change");
  },

  onUpdatePeopleSuccess(payload) {
    var members = _families[payload.familyId].members;
    for (var i = 0; i < members.length; i++) {
      if (members[i]['id'] == payload.id) 
        members[i] = payload.body;
    }
    this.emit("change");
  },

  onDeletePeopleSuccess(payload) {
    _.each(_families, (family) => {
      for (var i = 0; i < family.members.length; i++) {
        if (family.members[i]['id'] == payload.id) 
          family.members.splice(i, 1);
      }
    });
    this.emit("change");
  },


  onUpdateFamilies(payload) {
    this.updating = true; 
    this.emit("change");
  },

  onUpdateFamiliesSuccess(payload) {
    _families[payload.id] = payload.body;
    this.updating = false; 
    this.emit("change");
  },

  onUpdateFamiliesFail(payload) {
    this.error = payload.error;
    this.emit("change");
  },

  onCreateFamilies(payload) {
    this.updating = true; 
    this.emit("change");
  },

  onCreateFamiliesSuccess(payload) {
    this.updating = false; 
    _families[payload.id] = payload;
    this.emit("change");
  },

  onCreateFamiliesFail(payload) {
    // this.error = payload;
    // this.updating = false; 
    // this.emit("change");
  },

  onQueryFamilies: function() {
    this.loading = true;
    this.emit("change");
  },

  onQueryFamiliesSuccess: function(payload) {
    this.loading = false;
    this.error = null;

    _families = _.reduce(payload, (acc, family) => {
      acc[family.id] = family;
      return acc;
    }, {});
    this.emit("change");
  },

  onQueryFamiliesFail: function() {
    this.loading = false;
    this.emit("change");
  },

  getAll: function() {
    return _families;
  },


});

module.exports = FamiliesStore;
