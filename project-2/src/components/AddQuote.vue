<template>
    <div>
        <textarea v-model="quoteText" placeholder="input quote here" />
        <button @click="tryAddQuote">Add quote</button>
    </div>
</template>

<script>
import {eventBus} from '../main'
export default {
    props: {
        addQuote: {
            type: Function,
            required: true
        }
    },
    data() {
        return {
            quoteText: ''
        }
    },
    methods: {
        tryAddQuote() {
            if (this.addQuote(this.quoteText)) {
                this.quoteText = '';
            }
        }
    }
}
</script>