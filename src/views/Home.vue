<template>
    <div class="container">
        <!--
        отдаю нужный компонент в зависимости от прав пользователя
        можно разделить на разные роуты
        -->
        <feedback-form v-if="$auth.user().roles.indexOf('client') !== -1"></feedback-form>
        <manager-dashboard v-if="$auth.user().roles.indexOf('manager') !== -1"></manager-dashboard>
    </div>
</template>

<script>
import FeedbackForm from "../components/FeedbackForm";
import ManagerDashboard from "../components/ManagerDashboard";

export default {
    name: 'home',
    components: {ManagerDashboard, FeedbackForm},
    data() {
        return {

        }
    }
}
</script>
