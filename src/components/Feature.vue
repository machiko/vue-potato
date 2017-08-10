<template>
  <div class="content">
    <h1>
      Feature
    </h1>
    <template v-for="(value, key) of viewers">
      <components :style="{color: color}" :is="value.component" :field="value.field" :value="controllers[key].varible" />
    </template>
    <br/>
    <template v-for="(component, key) of controllers">
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

const controllers = {
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

const viewers = {
  title: {
    component: 'CustomLabel',
    field: 'Title'
  },
  content: {
    component: 'CustomLabel',
    field: 'Content'
  }
}

export default {
  name: 'feature',
  data () {
    return {
      controllers,
      viewers,
      default: {
        text: 'default',
        color: '#000000'
      }
    }
  },
  computed: {
    title () {
      let title = this.controllers['title'] ? this.controllers['title'].varible : this.default.text
      return title
    },
    content () {
      let content = this.controllers['content'] ? this.controllers['content'].varible : this.default.text
      return content
    },
    color () {
      let color = this.controllers['color'] ? this.controllers['color'].varible : this.default.color
      return color
    },
    exception () {
      let exception = this.controllers['exception'] ? this.controllers['exception'].varible : this.default.text
      return exception
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
