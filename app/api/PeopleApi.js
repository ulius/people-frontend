var Api = require('./Api.js');

var PoolApi = {

  query(query, callback) {
    Api.get('people')
    .query(query ? query : {})
    .end(callback);
  },

  get(id, callback) {
    Api.get('people/' + id)
    .end(callback);
  },

  create(payload, callback) {
    Api.post('people')
    .send(payload)
    .end(callback);
  },

  update(id, payload, callback) {
    Api.put('people/' + id)
    .send(payload)
    .end(callback);
  },

  del(id, callback) {
    Api.del('people/' + id)
    .end(callback);
  }
  
};


module.exports = PoolApi;
