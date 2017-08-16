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
      type: Object
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

    /* eslint-disable */
    $(this.$el).find('#custom').spectrum({
      showPaletteOnly: true,
      showPalette: true,
      palette: this.data.palette,
      color: this.data.color,
      move: function (color) {
        let data = self.data

        data.color = color.toRgbString()
        self.$emit('update:data', data)
      }
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
