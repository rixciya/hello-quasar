<template>
  <q-page>
    <h1>Page de Contact</h1>
    <p>Je m'appelle {{name}} et j'ai {{age}}.</p>
  </q-page>
</template>

<script>
export default {
  name: 'PageContact',
  data () {
    return {
      name: 'Rixciya',
      age: 21
    }
  }
}
</script>

<style lang="sass" scoped>
img
  border: 3px solid $secondary
</style>
