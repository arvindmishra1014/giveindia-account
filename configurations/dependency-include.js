/*
 * Requirement - include all the global variables and module required by the application
 */

global.requireDirectory = require('../utilities/require-directory');
global.Logger = require('../utilities/logger-utility');
global.Joi = require('joi');

global.configHolder = {};

global.Sequelize = require('sequelize');
global.SequelizeConnect = require('./datasource.js')();
global.domain = require('../db/models');

global.views = require("../application/views");

configHolder.encryptUtility = require("../utilities/encrypt-utility");

module.exports = configHolder;
