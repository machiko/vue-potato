<template>
  <div>
    <label>{{ field }} :</label>
    <select @change="handleInput">
      <template v-for="option of data.options">
        <option :value="option" v-text="option" :selected="option == data.value"/>
      </template>
    </select>
  </div>
</template>

<script>
export default {
  name: 'customInput',
  props: {
    field: {
      type: String
    },
    data: {
      type: Object
    }
  },
  data () {
    return {
    }
  },
  methods: {
    handleInput (e) {
      let data = this.data
      let value = e.target.value

      data.value = value
      this.$emit('update:data', data)
    }
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
