module.exports =  {
  "plugins": [
    require("postcss-import")({}),
    require("postcss-url")({}),
    require("autoprefixer")({
      browsers: ['last 2 versions', 'ios>=7.0', 'Android>=4.3']
    })
  ]
}