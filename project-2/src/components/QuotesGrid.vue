<template>
    <ul>
        <li :key="index" @click="tryDeleteQuote(index)" v-for="(quote, index) in quotes">
            {{ quote.quoteText }}
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        'quotes': Array,
        'deleteQuote': {
            type: Function,
            required: true
        }
    }, 
    methods: {
        tryDeleteQuote(index) {
            this.deleteQuote(index);
        }
    }
}
</script>