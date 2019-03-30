<template>
  <div>
    Menu
  </div>
</template>

<script>
export default {
  name: 'TheMenuApp',
  methods: {
    goTo(link) {
      this.$router.push({ path: link });
    }
  },
};
</script>

<style>

</style>
