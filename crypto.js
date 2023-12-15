exports.randomBytes = function() {
  const randomBytes = new Uint8Array(8)
  crypto.getRandomValues(randomBytes)
  return randomBytes
}