<template>
  <b-container class="fluid centered">
    <h2>Login</h2>
    <LoginForm/>
  </b-container>
</template>

<script>
import LoginForm from "@/components/login.form.vue"

export default {
  name: "login",
  components: {
    LoginForm
  }
};
</script>

<style>
.centered {
  margin: 0 auto;
  width: 40%;
}
</style>
