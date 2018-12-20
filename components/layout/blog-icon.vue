<template>
  <svg>
    <use :xlink:href="svgModel[name]"></use>
  </svg>
</template>

<script>
const requireAll = context => context.keys().map(context)
const svgs = require.context('../assets/left-menu-svg', false, /\.svg$/)
const svgModel = requireAll(svgs).reduce((preVal, item) => {
  const currentModel = item.default
  const name = currentModel.id.replace('-usage', '')
  preVal[name] = currentModel.url
  return preVal
}, {})
export default {
  name: 'LeftMenuSvg',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data: () => ({
    svgModel
  })
}
</script>
