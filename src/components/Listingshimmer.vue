<template>
	<pulse-loader :loading="loading" :color="color" :size="size"></pulse-loader>
</template>
<script>
    // import axios from 'axios';
    import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
    // import ListingItem from '@/components/ListingItem';
    export default {
        name: 'Listingshimmer',
        components: {
        	PulseLoader
        },
        data() {
            return {
                searchId: '',
                color: '#5dc596',
                size: '15px',
                loading : true,
                listings: []
            }
        },
        props: {
            loading: true
        }
    }
</script>