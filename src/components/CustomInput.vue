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
      let value = e.target.value
      let warnings = {
        length: 'Warning: length limit is too long.',
        regex: 'Warning: illegal character.'
      }
      if (value.length > this.limit.length || !value.match(this.limit.regex)) {
        let warning = !value.match(this.limit.regex) ? warnings.regex : warnings.length
        e.target.value = this.data
        alert(warning)
      } else {
        this.$emit('update:data', value)
      }
    }
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
