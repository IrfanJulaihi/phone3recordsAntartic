'use strict';

/**
 * ref-unit router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::ref-unit.ref-unit');
