/*
 * @Descripttion:
 * @Author: zhangchong zc16607@gmail.com
 * @Date: 2022-12-30 11:56:06
 * @LastEditors: zhangchong zc16607@gmail.com
 * @LastEditTime: 2023-01-11 18:00:46
 */
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

const IconsResolver = require('unplugin-icons/resolver')

module.exports = {
  configureWebpack: {
    devtool: "source-map",
    plugins: [
      // elementPlus组件自动按需导入
      Components({
        resolvers: [
          IconsResolver({
            prefix: false,  // 不要前缀
            enabledCollections: ['ep'], // 启用的svg图标集合
          }),
          ElementPlusResolver()]
      }),
      // 自动按需导入elementPlus图标
      require('unplugin-icons/webpack')({ autoInstall: true, }),
    ],
  },
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        appId: "com.electron.client",
        artifactName: "${name}_${version}_${os}_${arch}.${ext}",
        generateUpdatesFilesForAllChannels: true,
        nsis: {
          allowToChangeInstallationDirectory: true,
          createDesktopShortcut: "always",
          installerLanguages: "zh_CN",
          language: "2052",
          oneClick: false,
          perMachine: true,
          runAfterFinish: false,
        },
        asar: true,
        win: {
          target: "nsis",  // 打包为免安装应用，可以改为portable,但是启动要十几秒
          icon: "./build/icon.ico",
          requestedExecutionLevel: 'asInvoker',  // 启动模式，普通用户或管理员权限
          verifyUpdateCodeSignature: false
        },
        mac: {
          category: "public.app-category.utilities",
          target: [
            {
              arch: ["arm64", "x64"],
              target: "default", // Squirrel.Mac requires the zip target. Reference: https://www.electron.build/auto-update#quick-setup-guide
            },
          ],
        },
      },
      preload: "./src/preload.js",
    },
  }, // Reference: https://www.electron.build/configuration/configuration
  runtimeCompiler: true,
};
