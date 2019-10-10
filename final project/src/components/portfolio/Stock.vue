<template>
    <div>
        <p>{{stock.name}} -- {{stock.quantity}}</p>
        <input class="form-control" v-model="amountToSell"  min="0" type="number" />
        <button class="btn btn-success" :disabled="amountToSell < 1 || stock.quantity < amountToSell" @click="sell">Sell</button>
    </div>
    
</template>
<script>
import {mapActions} from 'vuex';

export default {
    data() {
        return {
            amountToSell: null
        }
    },
    methods: {
        ...mapActions({
                placeSellOrder: 'sellStock'
            }),
            sell() {
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity
                };
                this.placeSellOrder(order);
                this.quantity = 0;
            }
    },
    props: ['stock']
}
</script>