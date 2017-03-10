/**
 * @module db-model
 */

// imports
const _ = require('underscore');

/**
 * This is the dbmodel
 * @constructor DbModel
 * @class DbModel
 */
function DbModel() {}

/**
 * Creates something
 * @function create
 * @memberOf module:db-model~DbModel
 * @param {string} id - the id of something
 * @returns {PromiseLike}
 * @static
 */
function create(id) {
  return Promise.resolve();
}

/**
 * Destroys something
 * @memberOf module:db-model~DbModel
 * @function delete
 * @param {string} id - the id of something
 * @returns {PromiseLike}
 * @static
 */
function destroy(id) {
  return Promise.resolve();
}

// add static functions
_.extend(DbModel, {
  create: create,
  destroy: destroy
});

module.exports = DbModel;