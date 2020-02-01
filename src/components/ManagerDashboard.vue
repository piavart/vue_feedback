<template>
    <div>
        <h2 class="mt-5 mb-5">Список обращений</h2>
        <feedback-item v-for="(feedback, key) in feedbacks" :key="key" :k="key" :feedback="feedback"></feedback-item>
    </div>
</template>

<script>
import FeedbackItem from "./FeedbackItem";
export default {
    name: "ManagerDashboard",
    components: {FeedbackItem},
    props: {},
    data() {
        return {
            feedbacks: []
        }
    },
    mounted() {
        this.fetch()
    },
    methods: {
        // получение данных
        fetch(){
            this.axios.get('/get-feedbacks').then(resp => {
                this.feedbacks = resp.data.feedbacks;
            })
        }
    }
}
</script>

<style scoped>

</style>