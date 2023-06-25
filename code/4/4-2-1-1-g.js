const isProd = process.env.NODE_ENV === 'production'
const removeDataTestAttrs = (node) => {
  const NodeTypes = Object.freeze({
    ELEMENT: 1,
    ATTRIBUTE: 6,
  })
  if (node.type === NodeTypes['ELEMENT']) {
    node.props = node.props.filter((prop) => (prop.type === NodeTypes['ATTRIBUTE'] ? prop.name !== 'data-test' : true)) // 請自行替換命名 data-test 
  }
}

export default defineConfig(() => {
  return {
    plugins: [
      vue({
        template: {
          compilerOptions: {
            nodeTransforms: isProd ? [removeDataTestAttrs] : [],
          },
        },
      }),
    ]
  }
})