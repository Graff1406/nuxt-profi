<template>
  <v-row class="main">
    <v-col sm="6" md="5" lg="4">
      <login-form>
        <template v-slot:logo>
          <Logo />
        </template>
      </login-form>
    </v-col>
  </v-row>
</template>
<script>
import LoginForm from "@/components/sign/LoginForm";
import Logo from "@/components/Logo";
export default {
  name: "login",
  layout: "login",
  components: {
    Logo,
    LoginForm
  }
};
</script>
<style scoped>
.main {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-content: center;
}
</style>
