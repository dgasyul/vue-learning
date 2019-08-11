<template>
    <div>Quotes Added: {{quotesAdded}} </div> 
</template>

<script>
export default {
    props: {
        quotesAdded: {
            type: Number,
            required: true,
            default: 0
        }
    }
}
</script>