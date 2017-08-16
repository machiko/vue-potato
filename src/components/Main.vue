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
          name: 'Title',
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
          name: 'Content',
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
            }
          }
        }
      }
    }
  },
  Quote: {
    type: 'Feature',
    config: {
      controllers: {
        title: {
          name: 'Title',
          component: 'CustomInput',
          viewer: 'title',
          field: 'text'
        },
        content: {
          name: 'Content',
          component: 'CustomInput',
          viewer: 'content',
          field: 'text'
        },
        titleColor: {
          name: 'Title Color',
          component: 'CustomColorPicker',
          viewer: 'title',
          field: 'color'
        },
        contentColor: {
          name: 'Content Color',
          component: 'CustomColorPicker',
          viewer: 'content',
          field: 'color'
        }
      },
      viewers: {
        title: {
          component: 'CustomLabel',
          data: {
            field: 'Title',
            text: 'Title Value',
            color: '#000000'
          }
        },
        content: {
          component: 'CustomLabel',
          data: {
            field: 'Content',
            text: 'Content Value',
            color: '#000000'
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
