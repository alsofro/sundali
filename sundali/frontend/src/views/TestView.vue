<template>
  <div>
    <div>
      action:
      <input type="text" v-model="action">
    </div>
    
    <div>
      text:
      <textarea cols="30" rows="10" v-model="text"></textarea>
    </div>

    <button @click="send">Send</button>
  </div>
</template>

<script>
export default {
  name: 'TestView',
  data: () => ({
    action: '',
    text: '',
  }),
  methods: {
    send() {
      console.log(this.action);
      console.log(this.text);
    }
  }
}
</script>

<style>

</style>
