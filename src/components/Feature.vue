<template>
  <div class="content">
    <h1>
      Feature
    </h1>
    <h5>Title: {{ title }}</h5>
    <h5>Content: {{ content }}</h5>
    <h5>Exception: {{ exception }}</h5>
    <template v-for="(component, key) of components">
      <components :is="component.name" :field="key" :text.sync="component.varible" ></components>
    </template>
    <router-link to="/">Go Back</router-link>
  </div>
</template>

<script>
import CustomInput from '@/components/CustomInput'

const components = {
  title: {
    name: 'CustomInput',
    varible: 'msg'
  },
  content: {
    name: 'CustomInput',
    varible: 'msg'
  }
}

export default {
  name: 'feature',
  data () {
    return {
      components,
      default: 'default'
    }
  },
  computed: {
    title () {
      let title = this.components['title'] ? this.components['title'].varible : this.default
      return title
    },
    content () {
      let content = this.components['content'] ? this.components['content'].varible : this.default
      return content
    },
    exception () {
      let exception = this.components['exception'] ? this.components['exception'].varible : this.default
      return exception
    }
  },
  components: {
    CustomInput
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
