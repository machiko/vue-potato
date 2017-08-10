<template>
  <div>
    <label>{{ field }} :</label>
    <input type='text' id="custom" />
  </div>
</template>

<script>
export default {
  name: 'CustomColorPicker',
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
  },
  mounted () {
    let self = this
    console.log(this.$el)
    /* eslint-disable */
    $(this.$el).find('#custom').spectrum({
      color: this.text,
      change: function (color) {
        self.$emit('update:text', color.toHexString())
      }
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
