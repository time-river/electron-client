/*
 * @Descripttion: 
 * @Author: zhangchong zc16607@gmail.com
 * @Date: 2022-12-30 09:49:43
 * @LastEditors: zhangchong zc16607@gmail.com
 * @LastEditTime: 2023-01-11 12:32:02
 */

import { contextBridge, ipcRenderer } from "electron";

// Expose protected methods that allow the renderer process to use the ipcRenderer without exposing the entire object. Reference: https://nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration
contextBridge.exposeInMainWorld('ipcRenderer', {
  receive: (channel, func) => {
    if (
      ['fromMain', 'tabs-update'].includes(
        channel
      )
    ) {
      ipcRenderer.on(channel, (event, ...args) => func(...args)); // Deliberately strip the event as it includes the sender.
    } // end if
  },
  send: (channel, data) => {
    if (
      [
        'close-tab',
        'toMain',
        'new-tab',
        'switch-tab',
        'control-ready',
      ].includes(channel)
    ) {
      ipcRenderer.send(channel, data);
    } // end if
  },
});
