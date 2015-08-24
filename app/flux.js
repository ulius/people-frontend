var Fluxxor = require('fluxxor');

var FamiliesActions = require('./actions/FamiliesActions.js');
var PeopleActions = require('./actions/PeopleActions.js');

var actions = {
  families: FamiliesActions,
  people: PeopleActions
};

var FamiliesStore = require('./stores/FamiliesStore.js');

var stores = {
  FamiliesStore: new FamiliesStore(),
}

var flux = new Fluxxor.Flux(stores, actions);

// if (__DEV__) {
//   flux.on("dispatch", function(type, payload) {
//     if (console && console.log) {
//       console.log("[Dispatch]", type, payload);
//     }
//   });
// }

module.exports = flux;
