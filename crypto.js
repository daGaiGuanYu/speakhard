exports.randomBytes = function(length) {
  const randomBytes = new Uint8Array(length)
  crypto.getRandomValues(randomBytes)
  return randomBytes
}