<template>
  <div id="jersey">
    <svg id="jersey-element" viewBox="0, 10, 270, 546">
      <image xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" preserveAspectRatio="none" x="0" y="0" width="300" height="577"></image>
      <defs>
        <mask id="camera7-transparent">
          <rect x="8" y="8" width="256.7336" height="538" rx="34.5" ry="34.5" stroke="#000000" fill="#ffffff" style="stroke-width: 1;"></rect>
          <rect x="11" y="7" width="110" height="60" rx="31" ry="29" stroke="#000000" fill="#000000" style="stroke-width: 1;"></rect>
        </mask>
        <mask id="camera7plus-transparent">
          <rect x="6" y="3" width="258.3476" height="550" rx="34.5" ry="34.5" stroke="#000000" fill="#ffffff" style="stroke-width: 1;"></rect>
          <rect x="7" y="5" width="129" height="55" rx="29" ry="28" stroke="#000000" fill="#000000" style="stroke-width: 1;"></rect>
        </mask>
        <mask id="camera7">
          <g id="g_point">
            <rect x="0" y="0" width="265" height="550" rx="0" ry="0" stroke="#000000" fill="#ffffff" style="stroke-width: 1;"></rect>
            <rect x="11" y="7" width="110" height="60" rx="31" ry="29" stroke="#000000" fill="#000000" style="stroke-width: 1;"></rect>
          </g>
        </mask>
        <mask id="camera7plus">
          <g>
            <rect x="0" y="0" width="265" height="550" rx="34.5" ry="34.5" stroke="#000000" fill="#ffffff" style="stroke-width: 1;"></rect>
            <rect x="7" y="5" width="129" height="55" rx="29" ry="28" stroke="#000000" fill="#000000" style="stroke-width: 1;"></rect>
          </g>
        </mask>
        <mask id="camera6">
          <g>
            <rect x="0" y="0" width="265" height="550" rx="34.5" ry="34.5" stroke="#000000" fill="#ffffff" style="stroke-width: 1;"></rect>
            <rect x="31" y="7" width="87.5" height="47" rx="24" ry="23" stroke="#000000" fill="#000000" style="stroke-width: 1;"></rect>
          </g>
        </mask>
        <mask id="cameraXZ">
          <g>
            <rect x="0" y="0" width="265" height="550" rx="0" ry="0" stroke="#000000" fill="#ffffff" style="stroke-width: 1;"></rect>
            <rect x="13" y="9.5" width="53.5" height="123.5" rx="29" ry="28" stroke="#000000" fill="#000000" style="stroke-width: 1;"></rect>
          </g>
        </mask>
        <path d="M0 300 C0 150 270 150 270 300" id="pathCurve"></path>
      </defs>
      <g id="s_group" mask="url('#camera7plus')">
        <text x="135" y="200" :style="{ stroke: data.nameStrokeColor.color, 'font-family': data.fontFamily, 'font-size': data.nameFontSize }" style="stroke-width: 8; text-anchor: middle; stroke-linejoin: round;" v-text="data.name" />
        <text x="135" y="200" :style="{ fill: data.nameColor.color, 'font-family': data.fontFamily, 'font-size': data.nameFontSize }" style="text-anchor: middle; stroke-linejoin: round; font-family: HighSchoolUSASerif;" v-text="data.name" />
        <text x="0" y="0" :style="{ stroke: data.nameStrokeColor.color, 'font-family': data.fontFamily, 'font-size': data.nameFontSize }" style="stroke-width: 8; text-anchor: middle; stroke-linejoin: round; display: none;">
          <textPath xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#pathCurve" startOffset="50%" v-text="data.name" />
        </text>
        <text x="0" y="0" :style="{ fill: data.nameColor.color, 'font-family': data.fontFamily, 'font-size': data.nameFontSize }" style="stroke-width: 8; text-anchor: middle; stroke-linejoin: round; display: none;">
          <textPath xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#pathCurve" startOffset="50%" v-text="data.name" />
        </text>
        <text x="135" y="300" class="jerseyNumber" :style="{ stroke: data.numberStrokeColor.color, 'font-family': data.fontFamily, 'font-size': data.numberFontSize }" style="stroke-width: 10; text-anchor: middle;" v-text="data.number" />
        <text x="135" y="300" class="jerseyNumber" :style="{ fill: data.numberColor.color, 'font-family': data.fontFamily, 'font-size': data.numberFontSize }" style="text-anchor: middle;" v-text="data.number" />
      </g>
    </svg>
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
import { fontColor, fontSize } from '@/config/jersey'

export default {
  name: 'customLabel',
  props: {
    field: {
      type: String
    },
    data: {
      type: Object,
      default: {
        name: 'YOURNAME',
        number: '00',
        fontFamily: 'HighSchoolUSASerif',
        nameFontSize: 44,
        numberFontSize: 150,
        nameColor: {
          palette: fontColor,
          color: '#ffe800'
        },
        numberColor: {
          palette: fontColor,
          color: '#ffe800'
        },
        nameStrokeColor: {
          palette: fontColor,
          color: '#ffe800'
        },
        numberStrokeColor: {
          palette: fontColor,
          color: '#ffe800'
        }
      }
    }
  },
  data () {
    return {
    }
  },
  watch: {
    data: {
      handler: function (val, oldVal) {
        let data = val

        data.nameFontSize = fontSize[val.fontFamily].nameFontSize[val.name.length]
        data.numberFontSize = fontSize[val.fontFamily].numberFontSize[val.number.length]
        this.$emit('update:data', data)
      },
      deep: true
    }
  },
  methods: {
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
#jersey
  height: 580px
  width: 100%

#jersey-element
  width: 300px
  height: 580px
  text
    font-size: 50px
    text-anchor: middle
    font-family: HighSchoolUSASerif
    opacity: 1
    stroke-linejoin: round
    stroke-width: 8
  .jerseyNumber
    font-size: 150px
    text-anchor: middle
    alignment-baseline: central
    dominant-baseline: central
    font-family: HighSchoolUSASerif
    opacity: 1

</style>
