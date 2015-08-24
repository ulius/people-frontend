var request = require('superagent');

// Base Api object.
var Api = {

  createUrl(url) {
    return `${this.domain}${url}`;
  },

  post(url) {
    return request.post(this.createUrl(url));
  },

  get(url) {
    return request.get(this.createUrl(url));
  },

  put(url) {
    return request.put(this.createUrl(url));
  },

  del(url) {
    return request.del(this.createUrl(url));
  }

};

if (__DEV__) {
  Api.domain = 'http://192.168.0.120:8080/';
} else {
  Api.domain = 'http://people.ulius.me:8080/';
}

module.exports = Api;
