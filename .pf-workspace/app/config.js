const path = require('path')
const ejs = require('browser-sync-ejs')

const WORKSPACE_PUBLIC_DIR = path.resolve(__dirname, './public')
const DESIGN_SYSTEM_PUBLIC_DIR = path.resolve(process.cwd(), './dist')

const config = {
  server: {
    settings: {
      server: [
        WORKSPACE_PUBLIC_DIR,
        DESIGN_SYSTEM_PUBLIC_DIR
      ],
      files: [
        `${DESIGN_SYSTEM_PUBLIC_DIR}/**/*.html`,
        `${DESIGN_SYSTEM_PUBLIC_DIR}/**/*.css`,
        `${DESIGN_SYSTEM_PUBLIC_DIR}/**/*.js`,
        `${DESIGN_SYSTEM_PUBLIC_DIR}/**/*.png`
      ],
      port: 3000,
      open: false
    }
  }
}

module.exports = config
