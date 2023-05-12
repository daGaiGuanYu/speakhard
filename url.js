exports.format = function({ hostname, pathname, query }) {
  let result = `otpauth://${hostname}/${pathname}?`
  for(const key in query)
    result += key + '=' + encodeURIComponent(query[key]) + '&'
  return result.slice(0, -1)
}
