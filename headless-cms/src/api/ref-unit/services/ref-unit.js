'use strict';

/**
 * ref-unit service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ref-unit.ref-unit');
