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
          name: 'CustomInput',
          varible: 'msg'
        },
        content: {
          name: 'CustomInput',
          varible: 'msg'
        }
        // color: {
        //   name: 'CustomColorPicker',
        //   varible: '#000000'
        // }
      },
      viewers: {
        title: {
          component: 'CustomLabel',
          field: 'Title'
        },
        content: {
          component: 'CustomLabel',
          field: 'Content'
        }
      }
    }
  },
  Quote: {
    type: 'Feature',
    config: {
      controllers: {
        title: {
          name: 'CustomInput',
          varible: 'msg'
        },
        content: {
          name: 'CustomInput',
          varible: 'msg'
        },
        color: {
          name: 'CustomColorPicker',
          varible: '#000000'
        }
      },
      viewers: {
        // content: {
        //   component: 'CustomLabel',
        //   field: 'Content'
        // },
        title: {
          component: 'CustomLabel',
          field: 'Title'
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
