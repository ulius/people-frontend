var Api = require('./Api.js');

var FamiliesApi = {

  query(query, callback) {
    Api.get('families')
    .query(query ? query : {})
    .end(callback);
  },

  get(id, callback) {
    Api.get('families/' + id)
    .end(callback);
  },

  create(payload, callback) {
    Api.post('families')
    .send(payload)
    .end(callback);
  },

  update(id, payload, callback) {
    Api.put('families/' + id)
    .send(payload)
    .end(callback);
  },

  delete(id, callback) {
    Api.del('families/' + id)
    .send(payload)
    .end(callback);
  }
  
};


module.exports = FamiliesApi;
