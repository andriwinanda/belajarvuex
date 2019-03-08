<template>
  <form @submit.prevent="login()">
    <div class="modal-card" style="width:300px;">
      <section class="modal-card-body">
        <b-field label="Email">
          <b-input
              type="email"
              placeholder="Your email"
              v-model="email"
              required>
          </b-input>
        </b-field>

        <b-field label="Password">
          <b-input
              type="password"
              v-model="password"
              password-reveal
              placeholder="Your password"
              required>
          </b-input>
        </b-field>

        <b-field>
          <b-checkbox>Remember me</b-checkbox>
        </b-field>
        <b-field>
          <button class="button is-primary is-fullwidth">Login</button>
        </b-field>
      </section>
    </div>
  </form>
</template>
<script>
export default {
  data() {
    return {
      email: "andriwinanda1@gmail.com",
      password: ""
    }
  },
  methods: {
    login() {
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password
      }).then(res => {
        this.$router.push('/');
      })
    },
  }
}
</script>

