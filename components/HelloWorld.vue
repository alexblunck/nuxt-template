<template>
  <h1 class="flex text-4xl space-x-2">
    <div>Hello World</div>

    <div class="relative">
      <div class="w-3 h-3 absolute bg-purple-500 rounded-full"></div>
      <div class="w-3 h-3 bg-purple-500 rounded-full animate-ping"></div>
    </div>
  </h1>
</template>

<script>
export default {
  name: 'HelloWorld',
  components: {},

  data() {
    return {}
  },

  mounted() {},

  methods: {}
}
</script>
