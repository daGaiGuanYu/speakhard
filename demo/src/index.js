import speakeasy from 'speakhard'

const secret = speakeasy.generateSecret({ length: 16 })
console.log({ secret })