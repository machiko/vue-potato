<template>
  <div>
    <label>{{ field }} :</label>
    <input type="text" :value="data" @input="handleInput">
  </div>
</template>

<script>
export default {
  name: 'customInput',
  props: {
    field: {
      type: String
    },
    data: {
      type: String
    }
  },
  data () {
    return {
    }
  },
  methods: {
    handleInput (e) {
      this.$emit('update:data', e.target.value)
    }
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
