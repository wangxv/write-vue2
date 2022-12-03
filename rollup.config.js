import babel from 'rollup-plugin-babel';
// rollup可以默认导出一个对象，作为打包的配置文件
export default {
  input: './src/index.js',
  output: {
    file: './dist/vue.js',
    name: 'Vue',
    format: 'umd', // esm es6模块 commonjs模块 iife自执行函数 umd
    sourcemap: true
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    })
  ]
}