<template>
  <div>
    <template v-for="(module, key) of modules">
      <components :name="key" :is="module.type" :config="module.config" />
    </template>
  </div>
</template>

<script>
import Feature from '@/components/Feature'
import defaultColors from '@/config/colors'

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
          field: 'nameColor'
        },
        nameStrokeColor: {
          name: 'Name Stroke Color',
          component: 'CustomColorPicker',
          viewer: 'svg',
          field: 'nameStrokeColor'
        },
        isCurved: {
          name: 'Curved',
          component: 'customCheckbox',
          viewer: 'svg',
          field: 'isCurved'
        }
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
            nameColor: {
              palette: defaultColors,
              color: '#ffe800'
            },
            numberColor: {
              palette: defaultColors,
              color: '#ffe800'
            },
            nameStrokeColor: {
              palette: defaultColors,
              color: 'rgba(0,0,0,0)'
            },
            numberStrokeColor: {
              palette: defaultColors,
              color: 'rgba(0,0,0,0)'
            },
            isCurved: false
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
