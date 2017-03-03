/**
 * componentExists
 *
 * Check whether the given component exist in either the components or containers directory
 */

const fs = require('fs');
const path = require('path');
const pageComponents = fs.readdirSync(path.join(__dirname, '../../../app/components'));
const pageContainers = fs.readdirSync(path.join(__dirname, '../../../app/containers'));
const components = pageComponents.concat(pageContainers);

function componentExists(comp) {
  const zero = 0;
  return components.indexOf(comp) >= zero;
}

module.exports = componentExists;
