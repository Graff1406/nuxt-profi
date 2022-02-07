<template>
  <v-row align="center" class="pl-2">
    <template v-if="solo">
      <v-text-field
        v-model="search"
        name="name"
        placeholder="Find master"
        id="id"
        ref="field"
        :solo="solo"
        @keyup.enter="setLocalStorage"
      ></v-text-field>
    </template>
    <template v-else>
      <input
        v-model="search"
        type="text"
        ref="field"
        class="input"
        placeholder="Find master"
        @keyup.enter="setLocalStorage"
      />
      <v-btn v-if="search" icon @click="clearSearch">
        <v-icon>close</v-icon>
      </v-btn>
    </template>
  </v-row>
</template>
<script>
// var localStorage = require('localStorage')
// import VueLocalStorage from 'vue-localstorage'
export default {
  name: "MainSearch",
  props: {
    focus: Boolean,
    solo: Boolean,
    value: String
  },
  data() {
    return {
      search: null
    };
  },
  watch: {
    focus(focus) {
      if (focus) {
        this.focusField();
        this.getHistory();
      }
    },
    value(value) {
      this.search = value;
    }
  },
  mounted() {
    this.focusField();
  },
  methods: {
    clearSearch() {
      this.search = null;
      this.$refs.field.focus();
    },
    focusField() {
      // this.$nextTick().then(() => this.$refs.field.focus())
      setTimeout(() => this.$refs.field.focus(), 300);
    },
    getHistory() {
      console.log("getHistory");
    },
    setLocalStorage() {}
  }
};
</script>
<style scoped>
.input {
  /* padding: 5px; */
  font-size: 20px;
  outline: none;
}
</style>
