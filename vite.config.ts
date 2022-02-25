import {UserConfigExport} from 'vite';
import vue from '@vitejs/plugin-vue';
import {
  createStyleImportPlugin,
  AndDesignVueResolve,
  VantResolve,
  ElementPlusResolve,
  NutuiResolve,
  AntdResolve,
} from "vite-plugin-style-import";
// @ts-ignore
const { resolve } = require('path');

export default (): UserConfigExport => {
  return {
    // 1. If you are using the ant-design series, you need to configure this
    // 2. Make sure less is installed in the dependency `yarn add less -D`
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        },
      },
    },
    plugins: [
      vue(),
      createStyleImportPlugin({
        resolves: [
          AndDesignVueResolve(),
          VantResolve(),
          ElementPlusResolve(),
          NutuiResolve(),
          AntdResolve(),
        ],
        libs: [
          // If you don’t have the resolve you need, you can write it directly in the lib, or you can provide us with PR
          {
            libraryName: 'ant-design-vue',
            esModule: true,
            resolveStyle: (name) => {
              return `ant-design-vue/es/${name}/style/index`
            },
          },
        ],
      }),
    ],
    alias: {
      // @ts-ignore
      '@': resolve(__dirname, 'src')
    }
  }
}
