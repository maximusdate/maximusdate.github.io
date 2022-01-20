module.exports = {
    description: 'CKATEPTb',
    theme: '@vuepress/theme-default',
    themeConfig: {
        logo: 'images/hero.png',
        locales: {
            '/': {
                selectLanguageText: '🌐 Язык',
                selectLanguageName: 'Русский',
                editLink: false,
                editLinkText: 'Измените эту страницу на GitHub',
                navbar: [
                    {
                        text: 'Страница',
                        children: [
                            {
                                text: 'Знакомство',
                                link: '/landing/',
                            },
                            {
                                text: 'Вакансии',
                                link: '/landing/vacancy/',
                            },
                        ],
                    },
                ],
                sidebar: [
                    {
                        text: 'Знакомство',
                        link: '/landing/',
                    },
                    {
                        text: 'Вакансии',
                        link: '/landing/vacancy/',
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
    },
    plugins: [
        [
            '@vuepress/plugin-search',
            {
                locales: {
                    '/': {
                        placeholder: 'Поиск...',
                    },
                },
            },
        ],
    ],
}