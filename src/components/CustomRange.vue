<template>
  <div>
    <label>{{ field }} :</label>
    <input type="range" :value="data" :min="limit.min" :max="limit.max" :step="limit.step" @input="handleInput"> {{data}}
  </div>
</template>

<script>
export default {
  name: 'customRange',
  props: {
    field: {
      type: String
    },
    data: {
      type: Number
    },
    limit: {
      type: Object
    }
  },
  data () {
    return {
    }
  },
  methods: {
    handleInput (e) {
      let value = parseInt(e.target.value)
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
