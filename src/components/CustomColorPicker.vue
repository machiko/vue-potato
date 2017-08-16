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
    data: {
      type: String
    },
    options: {
      type: Array
    }
  },
  data () {
    return {
    }
  },
  methods: {
  },
  mounted () {
    /* eslint-disable */
    $(this.$el).find('#custom').spectrum({
      showPaletteOnly: true,
      showPalette: true,
      palette: this.options,
      color: this.data,
      move: color => {
        let rgb = color.toRgbString()
        this.$emit('update:data', rgb)
      }
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
