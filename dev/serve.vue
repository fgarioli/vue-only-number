<script>
import Vue from "vue";
import { InputInt, InputDecimal } from "@/entry";

export default Vue.extend({
  name: "ServeDev",
  directives: {
    InputInt,
    InputDecimal
  },
  data: () => ({
    nInt: null,
    nIntL: null,
    nFloat: null
  })
});
</script>

<template>
  <div id="app">
    <label for="int">Only "int" numbers:</label>
    <input id="int" type="text" v-input-int v-model.number="nInt" />
    <label for="int2">Only "int" numbers with leading zeros:</label>
    <input id="int2" type="text" v-input-int="true" v-model.number="nIntL" />
    <label for="float">Both "int" and "decimal" numbers:</label>
    <input id="float" type="text" v-input-decimal v-model.number="nFloat" />
  </div>
</template>

<style lang="scss" scoped>
#app {
  display: flex;
  flex-direction: column;

  input {
    margin: 5px;
  }

  label {
    margin: 10px 5px 0 5px;
  }
}
</style>
