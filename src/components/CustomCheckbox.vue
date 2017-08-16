<template>
  <div>
    <label>{{ field }} :</label>
    <input type="checkbox" :value="data" @click="handleInput">
  </div>
</template>

<script>
export default {
  name: 'customCheckbox',
  props: {
    field: {
      type: String
    },
    data: {
      type: Boolean
    }
  },
  data () {
    return {
    }
  },
  methods: {
    handleInput (e) {
      let value = e.target.checked
      this.$emit('update:data', value)
    }
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
