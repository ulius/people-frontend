var _ = require('lodash');
var Api = require('../api/Api.js');
var PeopleApi = require('../api/PeopleApi.js');
var Constants = require('../constants');

module.exports = {
  // query: function(query) {
  //   this.dispatch(Constants.QUERY_TODOS);
  //   TodoApi.query(query ? query : {}, (err, res) => {
  //     if (res.ok) {
  //       this.dispatch(Constants.QUERY_TODOS_SUCCESS, res.body);
  //     } else {
  //       this.dispatch(Constants.QUERY_TODOS_FAIL, {});
  //     }
  //   }) 
  // },

  create: function(payload) {
    this.dispatch(Constants.CREATE_PEOPLE, payload);
    console.log(payload);
    PeopleApi.create(payload, (err, res) => { 
      if (res.ok) {
        this.dispatch(Constants.CREATE_PEOPLE_SUCCESS, {familyId: payload.family.id, body: res.body});
      } else {
        this.dispatch(Constants.CREATE_PEOPLE_FAIL, res.body);
      }
    });
  },

  update: function(id, payload) {
    console.log(id, payload);
    this.dispatch(Constants.UPDATE_PEOPLE, {id: id, body: payload });
    PeopleApi.update(id, payload, (err, res) => {
      if (res.ok) {
        this.dispatch(Constants.UPDATE_PEOPLE_SUCCESS, {id: id, body: res.body });
      } else {
        this.dispatch(Constants.UPDATE_PEOPLE_FAIL, {id: id, error: "There was an error" });
      }
    });
  }, 

  delete: function(id, familyId) {
    this.dispatch(Constants.DELETE_PEOPLE, {id: id, familyId: familyId});
    PeopleApi.del(id, (err, res) => {
      if (res.ok) {
        this.dispatch(Constants.DELETE_PEOPLE_SUCCESS, {id: id, body: res.body });
      } else {
        this.dispatch(Constants.DELETE_PEOPLE_FAIL, {id: id, error: "There was an error" });
      }
    });
  }, 

};

