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
 * Format object to media type, e.g., `image/svg+xml; charset=utf-8`.
 * @param {!ContentType} obj An object with type and parameters.
 * @return {string}
 */
function format(obj) {
  return _format(obj)
}

module.exports.parse = parse
module.exports.format = format

/* typal types/index.xml closure noSuppress */
/**
 * @typedef {_goa.ContentType} ContentType The content-type interface.
 */
/**
 * @typedef {Object} _goa.ContentType The content-type interface.
 * @prop {string} type The type of the content-type.
 * @prop {!Object<string, string>} parameters An object of the parameters in the media type (name of the parameter will be lower-cased).
 */
/**
 * @typedef {import('http').IncomingMessage} http.IncomingMessage
 */
/**
 * @typedef {import('http').ServerResponse} http.ServerResponse
 */
