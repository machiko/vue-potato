<template>
  <div>
    <label>{{ field }} :</label>
    <form @change="handleInput">
      <template v-for="option of options">
        <div>
          <input type="radio" :name="field" :value="option" v-text="option" :checked="option == data">{{option}}
        </div>
      </template>
    </form>
  </div>
</template>

<script>
export default {
  name: 'customRadio',
  props: {
    field: {
      type: String
    },
    data: {
      type: String
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
