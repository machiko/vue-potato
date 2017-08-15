<template>
  <div>
    <template v-for="(module, key) of modules">
      <components :name="key" :is="module.type" :config="module.config" />
    </template>
  </div>
</template>

<script>
import Feature from '@/components/Feature'

const modules = {
  Jersey: {
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
