module.exports = {
    title: 'D的文档',
    description: 'Just playing around',
    themeConfig: {
        logo: '/logo.png',
        smoothScroll: true,
        nav: [
            // { 有下拉框的 -- 暂不启用
            //     text: 'Languages',
            //     ariaLabel: 'Language Menu',
            //     items: [
            //         { text: 'Chinese', link: '/language/chinese/' },
            //         {   text: 'Japanese', 
            //             link: '/language/japanese/' ,           
            //             items: [
            //                 { text: 'Chinese', link: '/language/chinese/' },
            //                 { text: 'Japanese', link: '/language/japanese/' }
            //             ]
            //         }
            //     ]
            // },
            { text: 'Home', link: '/' },
            { text: 'GitHub', link: 'https://github.com/D20F' },
            { text: '个人项目展示', link: 'https://106.53.202.188:8080' },
        ],
        sidebar: [
          {
            title: '前端',   // 必要的 frontEnd
            // path: '/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,侧边栏的每个子组默认是可折叠的，你可以设置 collapsable: false 来让一个组永远都是展开状态。
            sidebarDepth: 3,    // 可选的, 默认值是 1 一个侧边栏的子组配置同时支持 sidebarDepth 字段用于重写默认显示的侧边栏深度(1)。
            children: [
              ['/D20F/frontEnd/indexedOB.md','indexedOB'],
              ['/D20F/frontEnd/canvas.md','canvas'],
              ['/D20F/frontEnd/面试难题.md','面试难题'],
              ['/D20F/frontEnd/dom.md','dom'],
              ['/D20F/frontEnd/js操作.md','js操作'],
              ['/D20F/frontEnd/js应用.md','js应用'],
            ]
          },
          {
            title: '后端',   // 必要的 backEnd
            sidebarDepth: 3, 
            children: [
              ['/D20F/backEnd/mysql.md','Mysql'],
              ['/D20F/backEnd/linux.md','Liunx'],
            ]
          },
          {
            title: '框架',   // 必要的 frame
            sidebarDepth: 3, 
            children: [
              ['/D20F/frame/vue.md','vue'],
              ['/D20F/frame/vuex.md','vuex'],
              ['/D20F/frame/vuerouter.md','vuerouter'],
              ['/D20F/frame/react.md','react'],
              ['/D20F/frame/react_router.md','react_router'],
              ['/D20F/frame/react_redux.md','react_redux'],
              ['/D20F/frame/wxchat.md','wxchat'],
            ]
          },
          {
            title: '混合开发',   // 必要的 webApp
            sidebarDepth: 3, 
            children: [
              ['/D20F/webApp/react_native.md','react_native'],
              ['/D20F/webApp/taro.md','taro'],
            ]
          },
          {
            title: '通用',   // 必要的 general
            sidebarDepth: 3, 
            children: [
              ['/D20F/general/git.md','Git'],
              ['/D20F/general/环境安装指南.md','环境安装指南'],
              ['/D20F/general/Liunx环境配置.md','Liunx环境配置'],
              ['/D20F/general/封装axios.md','封装axios'],
              ['/D20F/general/网站收藏.md','网站收藏'],
            ]
          },
          {
            title: 'Cocos',   // 必要的 cocos
            sidebarDepth: 3, 
            children: [
              ['/D20F/cocos/节点操作.md','节点操作'],
              ['/D20F/cocos/CocosCreate3D.md','CocosCreate3D'],
            ]
          },
          {
            title: 'Css',   // 必要的 css
            sidebarDepth: 3, 
            children: [
              ['/D20F/css/面试css.md','面试css'],
              ['/D20F/css/样式记忆.md','样式记忆'],
            ]
          },
          {
            title: 'interview',   // 
            sidebarDepth: 3, 
            children: [
              ['/D20F/interview/axios.md','axios'],
              ['/D20F/interview/webpack.md','webpack'],
            ]
          },
        ]
    }
}