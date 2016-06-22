
var computeLayout = require("./src/Layout.js");

module.exports.cssLayout = function (node) {
    /*eslint-disable */
    // disabling ESLint because this code relies on the above include
    computeLayout.fillNodes(node);
    computeLayout.computeLayout(node);
    /*eslint-enable */
};

