# electron-client

electron多tab页面桌面客户端，多tab的实现是基于开源项目[神户座kobe](https://gitee.com/ArvinZJC/Kobe)，本项目主要是换了一套tab的UI，使用vue3.2.45 + element-plus2.2.28 + vue_cli + vue-cli-plugin-electron-builder插件进行打包。修复了一点原项目的bug，目前测试多tab运行正常。

如果你的项目是vue + element技术栈，本项目也可以作为一些pc前端项目转为electron客户端的简单框架，如果只是客户端嵌网页，直接改配置文件即可。如果要开发页面的话，那还需要做很多工作。

项目没啥问题，后续应该不会再更新

## 预览图
启动页面
![screenshot.png](./img_README/home.png)


多tab展示
![screenshot.png](./img_README/tabs.png)

### 安装依赖
```
npm install
```

### 本地运行 
```
npm run electron:serve
```

### 打包
```
npm run electron:build
```

### vue配置
见 [配置连接](https://cli.vuejs.org/config/).

### electron开发文档
见 [开发文档](https://cli.vuejs.org/config/).

### 客户端打包相关配置
见 [打包相关配置](https://www.electron.build/configuration/configuration).