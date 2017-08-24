# dynamax-react-scaffold #

基于reactjs、reudx、redux-thunk和react-router的轻量级前端框架，基于create-react-app创建。

## 目录结构 ##

    
    |- build  打包生成的目录
    |- config  配置目录
    |- public  静态资源目录，该文件夹不会被webpack打包
    |- scripts  运行脚本目录
    |- src  源代码目录
    |-- actions  action目录
    |-- components  组件View目录
    |-- constants   常量目录
    |-- containers  组件容器目录
    |-- reducers  reducer目录
    |-- services 数据业务处理（数据请求）
    |-- store  store目录
    |---- middlewares  中间件目录
    |-- utils  工具目录
    |-- config.js 配置目录
    |-- global-styles.js  全局定义的CSS样式（不会被模块化）
    |-- index.js  程序的主入口
    |-- routes.js 路由
    |- package.json
    |- package-lock.json
    
## 规范 ##

- 组件文件及文件夹命名大写开头，使用驼峰式（index.js除外）
- 非组件的js文件命名为小写开头，两个单词之间用-隔开
- 尽量不使用;
- ESLint规范(使用create-react-app默认)


## 入门 ##

- ReactJs官网：https://facebook.github.io/react/（中文：https://discountry.github.io/react/）
- Redux 中文文档：http://cn.redux.js.org/
- 阮一峰的React 入门实例教程：http://www.ruanyifeng.com/blog/2015/03/react.html
- 【资料汇总】React (中文)：https://github.com/dingyiming/example-react/issues/1
- React技术栈一览：https://segmentfault.com/a/1190000009879742


## 代码处理流程

index.js =>  router => views => redux

action => types => reducers => store => connect => views

~~组件 -->action--> thunk中间件-->ajax请求-->reducer-->store->组件~~

## stylus书写约定

- 使用一些基本前缀: .fn、.page、.lt、.ui
- css熟悉紧跟选择器，每块选择器代码间隔空一行
- css命名不用太长直接根据当前页面结构、模块结构、功能命名即可
- 页面样式尽量不用fn-left、fn-right、fn-clear布局，可以直接写入css，也可以直接用flex

### 以下是约定的标准书写

    .page-index

        .lt-header
            height: 100px
            clear: both

            /* 这个是一个logo */    
            .logo
                height: 57px // logo实际高度是50px

            .nav
                float: left
            
        .lt-main
            height: 100px

            .lt-left

                .fn-left
                    font-size: 20px

                .ui-btn
                    border: 0 none

        .lt-footer
            height: 100px


## dva 入门

- https://github.com/pigcan/blog/issues/2
- https://github.com/sorrycc/blog/issues/8