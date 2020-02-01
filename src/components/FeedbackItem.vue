<template>
    <div class="mt-3">
        <b-card :class="cardType" :title="`(${feedback.id}) ${feedback.title}`">
            <p class="mt-3 mb-0 info">Пользователь: <b>{{feedback.user.name}}</b></p>
            <p class="m-0 info">Email: <b>{{feedback.user.email}}</b></p>
            <p class="m-0 info">Дата обращения: <b>{{feedback.created_at}}</b></p>
            <p class="mt-4" v-html="feedback.content"></p>
            <b-button v-if="feedback.completed === 0" @click="feedbackComplete" class="mt-2" variant="outline-success">Отвечено</b-button>
        </b-card>
    </div>

</template>

<script>
export default {
    name: "FeedbackItem",
    props: {
        k: Number,
        feedback: Object
    },
    data() {
        return {}
    },
    mounted() {
    },
    methods: {
        // пометка обращения как отвеченного
        feedbackComplete(){
            this.axios.post( '/feedback-complete', {
                id: this.feedback.id
            } ).then( () => {
                // обновление состояния элемента в родительском компоненте
                // можно через генерацию события вызывать метод fetch() если нужно обновление данных полностью
                this.$parent.feedbacks[ this.k ].completed = 1;
            })
        }
    },
    computed:{
        cardType(){
            return this.feedback.completed === 1 ? 'bg-light' : 'border-success'
        }
    }
}
</script>

<style scoped lang="scss">
    p {
        &.info{
            font-size: 14px;
        }
    }
</style>