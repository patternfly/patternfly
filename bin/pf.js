const yeoman = require('yeoman-environment')
const env = yeoman.createEnv()

const ResourceGenerator = require('./generators/resource')
const UnsupportedGenerator = require('./generators/unsupported')

env.registerStub(ResourceGenerator, 'resource')
env.registerStub(UnsupportedGenerator, 'unsupported')

module.exports = env
