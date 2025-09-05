import './vars.css';
import 'vitepress-plugin-back-to-top/dist/style.css';

import vitepressBackToTop from 'vitepress-plugin-back-to-top';
import DefaultTheme from 'vitepress/theme';

import Cards from './components/Cards.vue';
import MNavLinks from './components/MNavLinks.vue';

export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        vitepressBackToTop({
            // default
            threshold: 300
        })
        app.component('MNavLinks', MNavLinks)
        app.component('Cards', Cards)

        app.provide('DEV', process.env.NODE_ENV === 'development')
    },
}