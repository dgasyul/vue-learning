<template>
    <div class="container">
        <app-header :quotesAdded="quotes.length"></app-header>
        <add-quote :addQuote="addQuote"></add-quote>
        <quotes-grid :quotes="quotes" :deleteQuote="deleteQoute"></quotes-grid>
    </div>
</template>

<script>
    import Header from './components/Header.vue';
    import AddQuote from './components/AddQuote.vue';
    import QuotesGrid from './components/QuotesGrid.vue';

    import {eventBus} from './main';

    const maxQuotes = 10;
    export default {
        components: {
            'app-header': Header,
            'add-quote': AddQuote,
            'quotes-grid': QuotesGrid
        },
        data() {
            return {
                maxQuotes: maxQuotes,
                quotes: []
            }
        },
        methods: {
            addQuote(quoteText) {
                if (this.quotes.length >= maxQuotes) {
                    alert('Max amount of quotes reached. Delete any to add this one');
                    
                    return false;
                }

                this.quotes.push({quoteText});

                return true;
            },
            deleteQoute(index) {
                this.quotes.splice(index, 1);
            }
        } 
        
    }
</script>

<style>
</style>
