<template>
  <b-form @submit="onSubmit">
      <b-form-group
        label="Username:"
        label-for="username"
      >
        <b-form-input 
          id="username"
          type="email"
          placeholder="email@example.com"
          v-model.trim="username"
        />
      </b-form-group>
      <b-form-group
        label="Password:"
        label-for="password"
      >
        <b-form-input
          id="password"
          type="password"
          placeholder="password"
          v-model.trim="password"
          />
      </b-form-group>
      <b-form-group>
        <b-form-checkbox-group>
          <b-form-checkbox
          id="remember"
          v-model="remember"
          >
            Remember Me
          </b-form-checkbox>
        </b-form-checkbox-group>
        <b-button type="submit" variant="primary" :disabled="loggingIn">Login</b-button>
      </b-form-group>
      <b-alert variant="danger" :show="loginError">{{ errorMessage }}</b-alert>
  </b-form>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'LoginForm',
  computed: {
    ...mapState({
      loggingIn: state => state.token.metadata.isFetching,
      errorMessage: state => state.token.payload && state.token.payload.error
    }),
    ...mapGetters(['loggedIn', 'loginError'])
  },
  data: () => ({
    username: '',
    password: '',
    remember: false,
  }),
  methods: {
    async onSubmit(e) {
      e.preventDefault();
      await this.$store.dispatch('login', {
        username: this.username,
        password: this.password
      })
      if (!this.loginError) {
        console.log(this.$router)
        this.$router.push('/')
      }
    },
  },
};
</script>
