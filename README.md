# vue-only-number

A Vue directive to allow only numbers to html input text

## Installing

```bash
$ npm install --save vue-only-number
```

```js
import { InputInt, InputDecimal } from "vue-only-number";

Vue.directive('v-input-int', InputInt);
Vue.directive('v-input-decimal', InputDecimal);
```

## Hello world

```js
<template>
  <div>
    <label for="int">Only "int" numbers:</label>
    <input id="int" type="text" v-input-int v-model.number="nInt" />
    <label for="int2">Only "int" numbers with leading zeros:</label>
    <input id="int2" type="text" v-input-int="true" v-model.number="nIntL" />
    <label for="float">Both "int" and "decimal" numbers:</label>
    <input id="float" type="text" v-input-decimal v-model.number="nFloat" />
  </div>
</template>

<script>
export default {
  data: () => ({
    nInt: null,
    nIntL: null,
    nFloat: null
  })
}
</script>
```

## Options
| Directive | Description
|:--|:--|
| v-input-int | Allow only numbers without leading zeros (Example: 10)
| v-input-int="true" | Allow only numbers with leading zeros (Example: 0001)
| v-input-decimal | Allow decimal numbers with dot (.) separator (Example: 1.5)

## License

[MIT](LICENSE)
