const { parse: _parse, format: _format } = require('./depack')

/**
 * Parse media type to object.
 * @param {string|!http.IncomingMessage|!http.ServerResponse} string
 * @return {ContentType}
 */
function parse(string) {
  return _parse(string)
}

/**
 * Format object to media type.
 * @param {!ContentType} obj
 */
function format() {
  return _format()
}

module.exports.parse = parse
module.exports.format = format


/**
 * @typedef {import('http').IncomingMessage} http.IncomingMessage
 * @typedef {import('http').ServerResponse} http.ServerResponse
 * @typedef {{ type: string, parameters: !Object }} ContentType
 */