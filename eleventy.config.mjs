export default function(config) {
  config.addPassthroughCopy({ static: '.' })
  config.addPassthroughCopy({ 'src/images/': 'images/' })
  config.addPassthroughCopy('src/**/*.css')
  config.setInputDirectory('src')
  config.setOutputDirectory('build/')
  config.setIncludesDirectory('includes/')
  config.setLayoutsDirectory('layouts/')
  config.setLayoutResolution(true)
}
