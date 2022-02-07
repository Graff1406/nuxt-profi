<template>
  <v-row justify="center" class="mt-2 main">
    <v-col sm="7" md="6" lg="5">
      <v-row justify="center" class="title pb-3">
        <Logo v-if="$device.isDesktop" show-icon />
      </v-row>
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
import LoginForm from "@/components/sign/LoginForm";
import TaskForm from "@/components/createTask/TaskForm";
import Logo from "@/components/Logo";
export default {
  name: "createTask",
  layout: "createTask",
  components: {
    Logo,
    LoginForm,
    TaskForm
  },
  computed: {
    userLoged() {
      return false;
    }
  }
};
</script>
<style scoped>
.main {
  height: 100%;
}
</style>
