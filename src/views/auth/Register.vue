<template>
    <div class="container">
        <div class="row justify-content-md-center">
            <div class="col-6">
                <div class="card card-default">
                    <div class="card-header">Регистрация</div>
                    <div class="card-body">
                        <div class="alert alert-danger" v-if="has_error && !success">
                            <p v-if="error == 'registration_validation_error'">Validation Errors.</p>
                            <p v-else>Error, can not register at the moment. If the problem persists, please contact an administrator.</p>
                        </div>
                        <form autocomplete="off" @submit.prevent="register" v-if="!success" method="post">
                            <div class="form-group" v-bind:class="{ 'has-error': has_error && errors.name }">
                                <label for="name">Имя</label>
                                <input type="text" id="name" class="form-control" placeholder="Имя" v-model="name">
                                <span class="help-block" v-if="has_error && errors.name">{{ errors.name }}</span>
                            </div>
                            <div class="form-group" v-bind:class="{ 'has-error': has_error && errors.email }">
                                <label for="email">E-mail</label>
                                <input type="email" id="email" class="form-control" placeholder="user@example.com" v-model="email">
                                <span class="help-block" v-if="has_error && errors.email">{{ errors.email }}</span>
                            </div>
                            <div class="form-group" v-bind:class="{ 'has-error': has_error && errors.password }">
                                <label for="password">Пароль</label>
                                <input type="password" id="password" class="form-control" v-model="password">
                                <span class="help-block" v-if="has_error && errors.password">{{ errors.password }}</span>
                            </div>
                            <div class="form-group" v-bind:class="{ 'has-error': has_error && errors.password }">
                                <label for="password_confirmation">Подтверждение пароля</label>
                                <input type="password" id="password_confirmation" class="form-control" v-model="password_confirmation">
                            </div>
                            <button type="submit" class="btn btn-primary mr-3">Зарегистрироваться</button>
                            <router-link :to="{name: 'login'}">Вход</router-link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Register",
        props: {},
        data() {
            return {
                name: '',
                email: '',
                password: '',
                password_confirmation: '',
                has_error: false,
                error: '',
                errors: {},
                success: false
            }

        },
        mounted() {
        },
        methods: {
            register() {
                this.$auth.register({
                    data: {
                        name: this.name,
                        email: this.email,
                        password: this.password,
                        password_confirmation: this.password_confirmation
                    },
                    success: () => {
                        this.success = true
                        this.$router.push({name: 'login', params: {successRegistrationRedirect: true}})
                    },
                    error:  (res) => {
                        // console.log(res.response.data.errors)
                        this.has_error = true
                        this.error = res.response.data.error
                        this.errors = res.response.data.errors || {}
                    }
                })
            }

        }
    }
</script>

<style scoped>

</style>