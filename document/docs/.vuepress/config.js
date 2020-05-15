module.exports = {
    title: 'D的文档',
    description: 'Just playing around',
    themeConfig: {
        logo: '/logo.png',
        smoothScroll: true,
        nav: [
            {
                text: 'Languages',
                ariaLabel: 'Language Menu',
                items: [
                    { text: 'Chinese', link: '/language/chinese/' },
                    {   text: 'Japanese', 
                        link: '/language/japanese/' ,           
                        items: [
                            { text: 'Chinese', link: '/language/chinese/' },
                            { text: 'Japanese', link: '/language/japanese/' }
                        ]
                    }
                ]
            },
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'External', link: 'https://google.com' },
        ],
        sidebar: [
          {
            title: 'Group 1',   // 必要的
            path: '../D20F/explanation.md',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            children: [
              ['/D20F/explanation.md','sss'],
              ['/D20F/mysql/mysql.md','安sss装'],
              ['/','安装'],
            ]
          },
        ]
    }
}