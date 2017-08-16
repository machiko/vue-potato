<template>
  <div>
    <label>{{ field }} :</label>
    <select @change="handleInput">
      <template v-for="option of options">
        <option :value="option" v-text="option" :selected="option == data"/>
      </template>
    </select>
  </div>
</template>

<script>
export default {
  name: 'customSelect',
  props: {
    field: {
      type: String
    },
    data: {
      type: Object
    },
    options: {
      type: Array
    }
  },
  data () {
    return {
    }
  },
  methods: {
    handleInput (e) {
      let value = e.target.value
      this.$emit('update:data', value)
    }
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
