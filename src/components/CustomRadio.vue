<template>
  <div>
    <label>{{ field }} :</label>
    <form @change="handleInput">
      <template v-for="option of data.options">
        <div>
          <input type="radio" :name="field" :value="option" v-text="option" :checked="option == data.value">{{option}}
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
