<template>
  <q-page>
    <div>Je suis une <strong>div</strong></div>
    <p>
      Je suis <strong>content</strong>
    </p>
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-full.svg"
    >
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>

<style lang="sass" scoped>
img
  border: 3px solid $secondary
</style>
