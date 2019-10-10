<template>
    <div class="container">
        <ul class="nav nav-pills">
            <router-link to="/" tag="li"><a>Home</a></router-link>
            <router-link to="/portfolio" tag="li"><a>Portfolio</a></router-link>
            <router-link to="/stocks" tag="li"><a>Stocks</a></router-link>
        </ul>
        <ul class="nav nav-pills">
            <li><a href="#" @click="saveData">SaveData</a></li>
            <li><a href="#" @click="loadData">Load Data</a></li>
            <li><strong>Funds: {{ funds }}</strong></li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';

    export default {
        created() {
            this.$store.default.dispatch('initStocks');
        },
        computed: {
            funds() {
                return this.$store.default.getters.funds;
            }
        },
        methods: {
            ...mapActions({
                randomizeStocks: 'randomizeStocks',
                fetchData: 'loadData'
            }),
            endDay() {
                this.randomizeStocks();
            },
            saveData() {
                const data = {
                    funds: this.$store.default.getters.funds,
                    stockPortfolio: this.$store.default.getters.stockPortfolio,
                    stocks: this.$store.default.getters.stocks
                };
                this.$http.put('data.json', data);
            },
            loadData() {
                this.fetchData();
            },
        }
        
    }
</script>

<style>

</style>
