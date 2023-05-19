<template>
  <main>
    <h1>Hi, please enter your name:</h1>
    <p>First: <input v-model="firstName" /></p>
    <p>Last: <input v-model="lastName" /></p>
    <p>{{ fullName }}</p>
    <p><button v-on:click="reset">Reset</button></p>
  </main>
</template>

<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: ''
    }
  },
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName
    }
  },
  methods: {
    reset() {
      this.firstName = ''
      this.lastName = ''
    }
  }
}
</script>