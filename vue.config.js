/*
 * @Author: daidai
 * @Date: 2021-11-22 14:57:15
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-04-29 15:12:50
 */
const path = require("path");
// https://vitejs.dev/config/
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: './',
  outputDir: process.env.VUE_APP_outputDir || 'dist',
  assetsDir: 'static',
  filenameHashing: true,
  lintOnSave: false,
  runtimeCompiler: false,
  transpileDependencies: [],
  productionSourceMap: false,
  chainWebpack: (config) => {
    // 配置别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets')) 
      .set('components', resolve('src/components'))
      .set('api', resolve('src/api'))
     

    if (process.env.NODE_ENV === "production") {
      // 删除系统默认的splitChunk
      config.optimization.delete("splitChunks");
    }
    // 删除预加载
    //  // 移除 prefetch  插件
    //  config.plugins.delete('prefetch-index')
    //  // 移除 preload 插件
    //  config.plugins.delete('preload-index');
    //   config.optimization.minimizer('terser').tap((args) => {
    //     // 去除生产环境console
    //     args[0].terserOptions.compress.drop_console = true
    //     return args
    //   })
  },
  configureWebpack: config => {
    // 给输出的js名称添加hash
    config.output.filename = "static/js/[name].[hash].js";
    config.output.chunkFilename = "static/js/[name].[hash].js";
    config.optimization = {
      splitChunks: {
        cacheGroups: {
          // 抽离所有入口的公用资源为一个chunk
          common: {
            name: "chunk-common",
            chunks: "initial",
            minChunks: 2,
            maxInitialRequests: 5,
            minSize: 0,
            priority: 1,
            reuseExistingChunk: true,
            enforce: true
          },
          // 抽离node_modules下的库为一个chunk
          // vendors: {
          //   name: "chunk-vendors",
          //   test: /[\\/]node_modules[\\/]/,
          //   chunks: "initial",
          //   priority: 2,
          //   reuseExistingChunk: true,
          //   enforce: true
          // },
          element: {
            name: "chunk-element-ui",
            test: /[\\/]node_modules[\\/]element-ui[\\/]/,
            chunks: "all",
            priority: 3,
            reuseExistingChunk: true,
            enforce: true
          },
          yhhtUi: {
            name: "chunk-yhht-ui",
            test: /[\\/]node_modules[\\/]yhht-ui[\\/]/,
            chunks: "all",
            priority: 4,
            reuseExistingChunk: true,
            enforce: true
          },
          datav: {
            name: "chunk-datav",
            test: /[\\/]node_modules[\\/]@jiaminghi[\\/]data-view[\\/]/,
            chunks: "all",
            priority: 4,
            reuseExistingChunk: true,
            enforce: true
          },
        }
      }
    };
  },
  // 是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建。
  parallel: require('os').cpus().length > 1,

  devServer: {
    // 配置多个代理
  },
  pluginOptions: {
  }
}
