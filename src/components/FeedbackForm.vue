<template>
    <div>
        <h2 class="mt-5 mb-4">Обратная связь</h2>
        <b-form-group
                id="fieldset-1"
                description="Укажите тему"
                label="Тема обращения"
                label-for="title"
                :invalid-feedback="invalidTitleFeedback"
                :state="titleState"
        >
            <b-form-input id="title" v-model="title" trim></b-form-input>
        </b-form-group>
        <editor
                api-key="no-api-key"
                :init="init"
                v-model="content"
        ></editor>

        <div tabindex="-1" v-if="invalidContentFeedback !== ''" role="alert" aria-live="assertive" aria-atomic="true" class="invalid-feedback d-block">{{invalidContentFeedback}}</div>

        <b-button class="mt-3" variant="success" @click="send">Отправить</b-button>

    </div>
</template>

<script>
import Editor from '@tinymce/tinymce-vue'
import moment from 'moment'
export default {
    name: "FeedbackForm",
    props: {},
    data() {
        return {
            content: '',
            title: '',
            errors: {},

            // настройки редактора + регистрация кастомной кнопки
            init:{
                height: 300,
                menubar: false,
                plugins: [
                ],
                toolbar:
                    ' bold italic backcolor  | customInsertButton',
                setup: (editor) =>{
                    editor.ui.registry.addButton('customInsertButton', {
                        text: 'Добавить подпись',
                        onAction:  () => {
                            this.content = this.content + `<p>-------</p><p>С уважением, ${this.$auth.user().name} (${moment().format('YYYY-MM-DD HH:mm')})</p>`
                        }
                    });
                }
            }
        }
    },
    mounted() {
    },
    methods: {
        send(){
            this.axios.post( '/feedback-create', {
                title: this.title,
                content: this.content
            } ).then(() => {
                // в случае успеха - обнуление полей + вывод уведомления
                this.title = ''
                this.content = ''
                this.errors = {}
                this.$swal({
                    type: 'success',
                    title: 'Обращение сохранено'
                })
            }).catch(error => {
                // получение ошибок для отображения невалидных полей
                this.errors = error.response.data.errors
            })
        }
    },
    computed:{
        titleState(){
            return false;
        },
        invalidTitleFeedback(){
            return this.errors.title !== undefined ? this.errors.title[0] : '';
        },
        invalidContentFeedback(){
            return this.errors.content !== undefined ? this.errors.content[0] : '';
        }
    },
    components: {
        Editor
    }
}
</script>

<style scoped lang="scss">

</style>