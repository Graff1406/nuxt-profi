<template>
  <v-row class="main">
    <v-col sm="6" md="5" lg="4">
      <login-form>
        <template v-slot:logo>
          <v-row justify="center" class="title pb-3">
            <Logo v-if="$device.isDesktop" show-icon />
          </v-row>
        </template>
      </login-form>
    </v-col>
  </v-row>
</template>
<script>
import LoginForm from "@/components/sign/LoginForm";
import Logo from "@/components/Logo";
export default {
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
