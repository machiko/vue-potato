<template>
  <div class="content">
    <h1>
      {{ name }}
    </h1>
    <!-- Viewers -->
    <template v-for="value of config.viewers">
      <components :is="value.component" :field="value.field" :data.sync="value.data" />
    </template>
    <br/>
    <!-- Controllers -->
    <template v-for="component of config.controllers">
      <components v-if="config.viewers[component.viewer]" :is="component.component" :field="component.name" :data.sync="config.viewers[component.viewer].data[component.field]" />
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
import Jersey from '@/components/Jersey'

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
    }
  },
  computed: {
  },
  components: {
    CustomInput,
    CustomColorPicker,
    CustomLabel,
    Jersey
  },
  mounted () {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
