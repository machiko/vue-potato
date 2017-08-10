<template>
  <div class="content">
    <h1>
      {{ name }}
    </h1>
    <template v-for="(value, key) of config.viewers">
      <components :style="{color: color}" :is="value.component" :field="value.field" :value="computed[key]" />
    </template>
    <br/>
    <template v-for="(component, key) of config.controllers">
      <components :is="component.name" :field="key" :text.sync="component.varible" />
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
import CustomLabel from '@/components/CustomLabel'

export default {
  name: 'feature',
  props: {
    config: {
      type: Object
    },
    name: {
      type: String
    }
  },
  data () {
    return {
      default: {
        text: 'default',
        color: 'red'
      }
    }
  },
  computed: {
    title () {
      let title = this.config.controllers['title'] ? this.config.controllers['title'].varible : this.default.text
      return title
    },
    content () {
      let content = this.config.controllers['content'] ? this.config.controllers['content'].varible : this.default.text
      return content
    },
    color () {
      let color = this.config.controllers['color'] ? this.config.controllers['color'].varible : this.default.color
      return color
    },
    exception () {
      let exception = this.config.controllers['exception'] ? this.config.controllers['exception'].varible : this.default.text
      return exception
    },
    computed () {
      let computed = {
        title: this.title,
        content: this.content,
        color: this.color,
        exception: this.exception
      }
      return computed
    }
  },
  components: {
    CustomInput,
    CustomColorPicker,
    CustomLabel
  },
  mounted () {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
