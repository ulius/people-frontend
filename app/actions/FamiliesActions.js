var _ = require('lodash');
var Api = require('../api/Api.js');
var FamiliesApi = require('../api/FamiliesApi.js');
var Constants = require('../constants');

module.exports = {
  query: function(query) {
    this.dispatch(Constants.QUERY_FAMILIES);
    FamiliesApi.query(query ? query : {}, (err, res) => {
      if (res.ok) {
        this.dispatch(Constants.QUERY_FAMILIES_SUCCESS, res.body);
      } else {
        this.dispatch(Constants.QUERY_FAMILIES_FAIL, {});
      }
    }) 
  },

  create: function(payload) {
    this.dispatch(Constants.CREATE_FAMILIES, payload);
    FamiliesApi.create(payload, (err, res) => { 
      console.log(res);
      if (res.ok) {
        this.dispatch(Constants.CREATE_FAMILIES_SUCCESS, res.body);
      } else {
        this.dispatch(Constants.CREATE_FAMILIES_FAIL, res.body);
      }
    });
  },

  update: function(id, payload) {
    this.dispatch(Constants.UPDATE_FAMILIES, {id: id, body: payload });
    FamiliesApi.update(id, payload, (err, res) => {
      if (res.ok) {
        this.dispatch(Constants.UPDATE_FAMILIES_SUCCESS, {id: id, body: res.body });
      } else {
        this.dispatch(Constants.UPDATE_FAMILIES_FAIL, {id: id, error: "There was an error" });
      }
    });
  }, 

};

