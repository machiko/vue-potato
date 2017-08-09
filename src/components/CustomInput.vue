<template>
  <div>
    <label>{{ field }} :</label>
    <input type="text" :value="text" @input="handleInput">
  </div>
</template>

<script>
export default {
  name: 'customInput',
  props: {
    field: {
      type: String
    },
    text: {
      type: String
    }
  },
  data () {
    return {
    }
  },
  methods: {
    handleInput (e) {
      this.$emit('update:text', e.target.value)
    }
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
