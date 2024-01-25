<template>
  <div>
    <img :src="`https://img.shields.io/badge/${name}-Latest:v${info?.latest?.version ?? '?.?.?'}-blue`" />
  </div>
</template>

<script>
export default {
  name: 'package-version',
  props: {
    name: {
      type: String,
    }
  },
  data() {
    return {
      info: {}
    }
  },
  mounted () {
    fetch(`http://10.13.4.153:4873/-/verdaccio/data/sidebar/${this.name}`).then(r => r.json()).then(r => this.info = r)
  }
}
</script>

<style scoped>
div {
  padding: 10px 0;
}
</style>
