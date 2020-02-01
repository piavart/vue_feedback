<template>
    <div class="container">
        <div class="row justify-content-md-center">
            <div class="col-6">
                <div class="card card-default">
                    <div class="card-header">Авторизация</div>
                    <div class="card-body">
                        <div class="alert alert-danger" v-if="has_error && !success">
                            <p v-if="error == 'login_error'">Validation Errors.</p>
                            <p v-else>Error, unable to connect with these credentials.</p>
                        </div>
                        <form autocomplete="off" @submit.prevent="login" method="post">
                            <div class="form-group">
                                <label for="email">E-mail</label>
                                <input type="email" id="email" class="form-control" placeholder="user@example.com" v-model="email" required>
                            </div>
                            <div class="form-group">
                                <label for="password">Пароль</label>
                                <input type="password" id="password" class="form-control" v-model="password" required>
                            </div>
                            <button type="submit" class="btn btn-primary mr-3">Вход</button>
                            <router-link :to="{name: 'register'}">Регистарция</router-link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: "Login",
    props: {},
    data() {
        return {
            email: null,
            password: null,
            success: false,
            has_error: false,
            error: ''
        }
    },
    mounted() {
    },
    methods: {
        login() {
            // get the redirect object
            this.$auth.login({
                data: {
                    email: this.email,
                    password: this.password
                },
                success: () => {
                    // handle redirection
                    this.success = true
                    const redirectTo = 'home'
                    this.$router.push({name: redirectTo})
                },
                error: (res) => {
                    this.has_error = true
                    this.error = res.response.data.error
                },
                rememberMe: true,
                fetchUser: true
            })
        }
    }
}
</script>

<style scoped>

</style>