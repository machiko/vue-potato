<template>
  <div class="content">
    <h1>
      Feature
    </h1>
    <h5 :style="{color: color}">Title: {{ title }}</h5>
    <h5>Content: {{ content }}</h5>
    <h5>Exception: {{ exception }}</h5>
    <template v-for="(component, key) of components">
      <components :is="component.name" :field="key" :text.sync="component.varible" ></components>
    </template>
    <router-link to="/">Go Back</router-link>
  </div>
</template>

<script>
import 'jquery/dist/jquery.js'
import 'spectrum-colorpicker/spectrum.js'
import 'spectrum-colorpicker/spectrum.css'
import CustomInput from '@/components/CustomInput'
import CustomColorPicker from '@/components/CustomColorPicker'

const components = {
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
}

export default {
  name: 'feature',
  data () {
    return {
      components,
      default: {
        text: 'default',
        color: '#000000'
      }
    }
  },
  computed: {
    title () {
      let title = this.components['title'] ? this.components['title'].varible : this.default.text
      return title
    },
    content () {
      let content = this.components['content'] ? this.components['content'].varible : this.default.text
      return content
    },
    color () {
      let color = this.components['color'] ? this.components['color'].varible : this.default.color
      return color
    },
    exception () {
      let exception = this.components['exception'] ? this.components['exception'].varible : this.default.text
      return exception
    }
  },
  components: {
    CustomInput,
    CustomColorPicker
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
