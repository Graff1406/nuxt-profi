<template>
  <v-row justify="center" class="mt-2 main">
    <v-col sm="7" md="6" lg="5">
      <Logo v-if="$device.isDesktop" />
      <TaskForm />
      <!-- <LoginForm /> -->
      <!-- <login-form>
        <template v-slot:logo>
        </template>
      </login-form> -->
    </v-col>
  </v-row>
</template>
<script>
import LoginForm from '@/components/sign/LoginForm'
import TaskForm from '@/components/createTask/TaskForm'
import Logo from '@/components/Logo'
  export default {
    name: 'createTask',
    layout: context => context.$device.isMobile ? 'createTask' : 'login',
    components: {
      Logo,
      LoginForm,
      TaskForm
    },
    computed: {
      userLoged() {
        return false
      }
    }
  }
</script>
<style scoped>
.main {
  height: 100%;
}
</style>