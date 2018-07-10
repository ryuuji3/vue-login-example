<template>
  <b-form @submit="onSubmit">
      <b-form-group
        label="Username:"
        label-for="username"
      >
        <b-form-input 
          id="username"
          type="email"
          required
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
          required
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
        <b-button type="submit" variant="primary">Login</b-button>
      </b-form-group>
  </b-form>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'LoginForm',
  computed: {},
  data: () => ({
    username: '',
    password: '',
    remember: false,
  }),
  methods: {
    onSubmit(e) {
      e.preventDefault();
    },
  },
};
</script>
