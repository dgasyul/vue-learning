import Home from './components/Home.vue';
import Portfolio from './components/portfolio/Portfolio.vue';
import StocksList from './components/stocks/StocksList.vue';

export const routes = [
    { path: '/', component: Home },
    { path: '/portfolio', component: Portfolio },
    { path: '/stocks', component: StocksList }
];