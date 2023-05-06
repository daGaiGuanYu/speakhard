exports.format = function({ hostname, pathname, query }) {
  let result = `otpauth://${hostname}/${pathname}?`
  for(const key in query)
    result += key + '=' + query[key] + '&'
  return result.slice(0, result.length - 1)
}
