
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./bulma.cjs.production.min.js')
} else {
  module.exports = require('./bulma.cjs.development.js')
}
