'use strict'

var form = require('express-form')
var field = form.field

module.exports = form(
  field('loginForm.email').required(),
  field('loginForm.password')
    .required()
    .is(/^[\x20-\x7F]{6,}$/),
)
