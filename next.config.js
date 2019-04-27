// next.config.js 
const withCSS = require('@zeit/next-css')
const withImages = require('next-images')
const compose = require('next-compose')

const CSS = withCSS({
  cssLoaderOptions: {
    url: false
  }
})

const IMAGE = withImages()

module.exports = compose([
	withCSS, withImages
])