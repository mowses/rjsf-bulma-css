
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./bulma-css.cjs.production.min.js')
} else {
  module.exports = require('./bulma-css.cjs.development.js')
}
