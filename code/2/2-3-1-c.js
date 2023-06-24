import { mergeConfig } from 'vite'
import { defineConfig } from 'vitest/config'
import viteConfig from './vite.config' // 原先的 vite 設定檔案

export default mergeConfig(viteConfig, defineConfig({
  test: {
    // 在這裡加入測試設定
  },
}))