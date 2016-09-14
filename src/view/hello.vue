<template lang="jade">
  p hello
  button(v-on:click="test('hello')") test
</template>

<script>
export default{
  methods:{
    test: function (msg) {
      alert(msg);
      this.$http.get('/api/siteUser/allsite').then(
        (success) => {
          console.log(success);
        }, 
        (error) => {
          console.log(error)
        }
      );
      console.log(this.$http)
    }
  }
}
</script>