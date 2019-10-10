<template>
    <div>
        <stock v-for="stock in stocks" :stock="stock"></stock>
    </div>
</template>
<script>
import Stock from './Stock.vue';

export default {
    components: {
            stock: Stock
        },
    computed: {
        stocks() {
            console.log(this.$store.default.getters.stocks);
            return this.$store.default.getters.stocks;
        }
    }
}
</script>