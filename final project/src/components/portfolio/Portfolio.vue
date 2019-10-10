<template>
    <div>
        <h1>Portfolio</h1>
        <ul>
            <li :key="stock.name" v-for="stock in $store.default.getters.stockPortfolio">
                <stock :stock="stock"></stock>
            </li>
        </ul>
    </div>
    
</template>
<script>
import Stock from './Stock.vue';
import { mapGetters } from 'vuex';

export default {
    mounted() {
        console.log(this.$store.default.getters.stockPortfolio);
    },
    components: {
        'stock': Stock
    },
    computed: {
        ...mapGetters({
            stocks: 'stockPortfolio'
        })
    },
    
}
</script>