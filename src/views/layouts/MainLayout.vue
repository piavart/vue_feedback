<template>
    <div class="">
        <nav class="site-header sticky-top py-3 bg-dark justify-content-end">
            <div class="container ">
                <div class="row">
                    <div class="col">
                        <p class="logo mb-0"><b>Обратная связь</b></p>
                    </div>
                    <div class="col">
                        <ul class="nav justify-content-end">
                            <li class="nav-item">
                                <a class="nav-link" @click.prevent="$auth.logout()" href="">Выход</a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </nav>
        <router-view/>
    </div>
</template>

<script>
export default {
    name: "MainLayout",
    props: {},
    data() {
        return {}
    },
    mounted() {
    },
    methods: {}
}
</script>

<style scoped lang="scss">
    .logo{
        font-size: 20px;
        color: #fff;
        margin-top: 6px;
    }
    nav{
        a{
            color: #fff;
        }
    }
</style>