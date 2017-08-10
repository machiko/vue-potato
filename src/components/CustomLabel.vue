<template>
  <div>
    <label>{{ field }} : {{ value }}</label>
  </div>
</template>

<script>
export default {
  name: 'customLabel',
  props: {
    field: {
      type: String
    },
    value: {
      type: String
    }
  },
  data () {
    return {
    }
  },
  methods: {
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
