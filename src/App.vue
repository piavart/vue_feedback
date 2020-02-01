<template>
    <div id="app">
        <component :is="layout">
            <router-view/>
        </component>
    </div>
</template>

<script>

// LAYOUTS
import EmptyLayout from './views/layouts/EmptyLayout'
import MainLayout from './views/layouts/MainLayout'

export default {
    computed: {
        // определение типа layout
        layout(){
            return ( this.$route.meta.layout || 'empty' ) + `-layout`
        }
    },
    components:{
        EmptyLayout,
        MainLayout
    }
}
</script>

<style lang="scss">
    @import "~bootstrap";
    @import '~sweetalert2/src/sweetalert2';
</style>
