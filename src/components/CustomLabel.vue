<template>
  <div>
    <label :style="{ color: data.color }">{{ data.field }} : {{ data.text }}</label>
  </div>
</template>

<script>
/**
 * @property
 * @data
 *  @param {String} field - label field
 *  @param {String} color - font color
 *  @param {String} value - label value
 */
export default {
  name: 'customLabel',
  props: {
    field: {
      type: String
    },
    data: {
      type: Object,
      default: {
        field: 'Title',
        color: '#ff0000',
        text: 'Value'
      }
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
