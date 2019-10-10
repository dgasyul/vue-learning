<template>
    <div>
        <p>{{ stock.name }} - Price: {{stock.price}}</p>
        <input
            type="number"
            min="0"
            class="form-control"
            v-model="quantity"
        >
        <button
                class="btn btn-success"
                @click="buyStock"
                :disabled="insufficientFunds"
        >{{ insufficientFunds ? 'Insufficient Funds' : 'Buy' }}
        </button>
    </div>
</template>
<script>
export default {
        props: ['stock'],
        data() {
            return {
                quantity: 0
            }
        },
        computed: {
            funds() {
                return this.$store.default.getters.funds;
            },
            insufficientFunds() {
                
                return this.quantity * this.stock.price > this.funds || this.quantity < 1;
            }
        },
        methods: {
            buyStock() {
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity
                };
                this.$store.default.dispatch('buyStock', order);
                this.quantity = 0;
            }
        }
    }
</script>