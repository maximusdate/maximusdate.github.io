module.exports = {
    description: 'CKATEPTb',
    theme: '@vuepress/theme-default',
    themeConfig: {
        logo: 'images/hero.png',
        repo: 'CKATEPTb',
        docsRepo: 'https://github.com/CKATEPTb',
        docsBranch: 'main',
        docsDir: 'docs',
        editLinkPattern: ':repo/edit/:branch/:path',
        locales: {
            '/': {
                selectLanguageText: '🌐 Язык',
                selectLanguageName: 'Русский',
                editLink: false,
                editLinkText: 'Измените эту страницу на GitHub',
                navbar: [
                    {
                        text: 'Проекты',
                        children: [
                            {
                                text: 'Tablecloth',
                                link: '/projects/tablecloth/',
                            },
                            {
                                text: 'AbilitySlots',
                                link: '/projects/abilityslots/',
                                children: [
                                    {
                                        text: 'Avatar: The Legends Of Korra',
                                        link: '/projects/abilityslots/atlok/',
                                    },
                                ]
                            },
                        ],
                    },
                    {
                        text: 'Discord',
                        link: 'https://discord.gg/P7FaqjcATp',
                    },
                ],
                sidebar: [
                    {
                        text: 'Проекты',
                        link: '/projects/',
                        children: [
                            {
                                text: 'Tablecloth',
                                link: '/projects/tablecloth/',
                                children: []
                            },
                            {
                                text: 'AbilitySlots',
                                link: '/projects/abilityslots/',
                                children: [
                                    {
                                        text: 'Avatar: The Legends Of Korra',
                                        link: '/projects/abilityslots/atlok/',
                                        children: []
                                    },
                                ]
                            },
                        ],
                    },
                ],
            },
            '/en/': {
                selectLanguageText: '🌐 Language',
                selectLanguageName: 'English',
                editLink: false,
                editLinkText: 'Edit this page on GitHub',
                navbar: [
                    {
                        text: 'Project',
                        children: [
                            {
                                text: 'Tablecloth',
                                link: '/en/projects/tablecloth/',
                            },
                            {
                                text: 'AbilitySlots',
                                link: '/en/projects/abilityslots/',
                                children: [
                                    {
                                        text: 'Avatar: The Legends Of Korra',
                                        link: '/en/projects/abilityslots/atlok/',
                                    },
                                ]
                            },
                        ],
                    },
                    {
                        text: 'Discord',
                        link: 'https://discord.gg/P7FaqjcATp',
                    },
                ],
                sidebar: [
                    {
                        text: 'Projects',
                        link: '/en/projects/',
                        children: [
                            {
                                text: 'Tablecloth',
                                link: '/en/projects/tablecloth/',
                                children: []
                            },
                            {
                                text: 'AbilitySlots',
                                link: '/en/projects/abilityslots/',
                                children: [
                                    {
                                        text: 'Avatar: The Legends Of Korra',
                                        link: '/en/projects/abilityslots/atlok/',
                                        children: []
                                    },
                                ]
                            },
                        ],
                    },
                ],
            },
        },
    },
    head: [
        ['link', {rel: 'icon', type: 'image/png', sizes: '16x16', href: `/images/icons/favicon-16x16.png`,}],
        ['link', {rel: 'icon', type: 'image/png', sizes: '32x32', href: `/images/icons/favicon-32x32.png`,}],
    ],
    locales: {
        '/': {
            lang: 'ru-RU',
            title: 'CKATEPTb',
            description: 'Сайт разработчика CKATEPTb на русском'
        },
        '/en/': {
            lang: 'en-US',
            title: 'CKATEPTb',
            description: 'CKATEPTb developer site on english'
        }
    },
    plugins: [
        [
            '@vuepress/plugin-search',
            {
                locales: {
                    '/': {
                        placeholder: 'Поиск...',
                    },
                    '/en/': {
                        placeholder: 'Search...',
                    },
                },
            },
        ],
    ],
}