## wxapp-cck

### 启动流程

1.执行 **npm init** 安装项目依赖

```
npm init
```

2.微信开发者工具导入项目，菜单栏 “**工具**” ==>"**构建npm**",项目即可打开

> 开发环境记得打开本地设置 不校验合法域名

## 相关文档

- 原型地址：https://lanhuapp.com/url/9f7sg

### 项目目录结构



```
├── config             // 项目配置文目录（存放全局以及接口url）
│   ├── config.js      // 全局配置
│   ├── index.js       // 对应接口url
│   └── login.js
├── images	// 图片资源
│   └── share.png
├── lib	// 常用工具
│   ├── eventBus.js
│   ├── http.js
│   ├── log.js
│   └── util.js
├── models			// 接口请求API
│   ├── global.js
│   └── index.js
├── pages			// 页面
│   ├── detail
│   │   ├── detail.js
│   │   ├── detail.json
│   │   ├── detail.wxml
│   │   └── detail.wxss
│   └── index
│       ├── index.js
│       ├── index.json
│       ├── index.wxml
│       └── index.wxss
├── utils			// 常用工具
│   ├── index.js
│   ├── interaction.js
│   ├── tip.js
│   └── util.js
├── wxParse		// 富文本解析
│   ├── html2json.js
│   ├── htmlparser.js
│   ├── showdown.js
│   ├── wxDiscode.js
│   ├── wxParse.js
│   ├── wxParse.wxml
│   └── wxParse.wxss
├── app.js
├── app.json
├── app.wxss
├── package-lock.json
├── package.json
├── project.config.json
├── project.private.config.json
├── README.md
├── sitemap.json
```



> 以上目录只是部分，后期有增加，有部分变动