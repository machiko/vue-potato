<template>
  <div>
    <template v-for="(module, key) of modules">
      <components :name="key" :is="module.type" :config="module.config" />
    </template>
  </div>
</template>

<script>
import Feature from '@/components/Feature'
import { fontColor, fontFamily } from '@/config/jersey'

const modules = {
  Jersey: {
    type: 'Feature',
    config: {
      controllers: {
        name: {
          name: 'Name',
          component: 'CustomInput',
          viewer: 'svg',
          field: 'name',
          limit: {
            length: 13,
            /* eslint-disable */
            regex: /^[A-Za-z\u4E00-\u9FFF\.,-\/#!$%\^&\*;:{}=\-_`~()\ლ(́◕◞౪◟◕‵ლ)\s]*$/
          }
        },
        number: {
          name: 'Number',
          component: 'CustomInput',
          viewer: 'svg',
          field: 'number',
          limit: {
            length: 5,
            /* eslint-disable */
            regex: /^[0-9\.]*$/
          }
        },
        nameColor: {
          name: 'Name Color',
          component: 'CustomColorPicker',
          viewer: 'svg',
          field: 'nameColor',
          options: fontColor
        },
        nameStrokeColor: {
          name: 'Name Stroke Color',
          component: 'CustomColorPicker',
          viewer: 'svg',
          field: 'nameStrokeColor',
          options: fontColor
        },
        isCurved: {
          name: 'Curved',
          component: 'CustomCheckbox',
          viewer: 'svg',
          field: 'isCurved'
        },
        fontFamily: {
          name: 'FontFamily',
          component: 'CustomSelect',
          viewer: 'svg',
          field: 'fontFamily',
          options: fontFamily
        },
        stripes: {
          name: 'Stripes',
          component: 'CustomRadio',
          viewer: 'svg',
          field: 'stripes',
          options: ['None', 'Vertical', 'Horizontal']
        },
        stripesCount: {
          name: 'Stripes Count',
          component: 'CustomRange',
          viewer: 'svg',
          field: 'stripesCount',
          limit: {
            min: 1,
            max: 11,
            step: 2
          }
        },
      },
      viewers: {
        svg: {
          component: 'Jersey',
          data: {
            name: 'YOURNAME',
            number: '00',
            fontFamily: 'HighSchoolUSASerif',
            nameFontSize: 44,
            numberFontSize: 150,
            nameColor: '#ffe800',
            numberColor: '#ffe800',
            nameStrokeColor: 'rgba(0,0,0,0)',
            numberStrokeColor: 'rgba(0,0,0,0)',
            isCurved: false,
            stripes: 'None',
            stripesCount: 1
          }
        }
      }
    }
  }
}

export default {
  name: 'main',
  data () {
    return {
      modules
    }
  },
  methods: {
  },
  mounted () {
  },
  components: {
    Feature
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
