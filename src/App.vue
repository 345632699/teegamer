<template>
  <div id="app">
    <router-view v-if="isRouterAlive" />
  </div>
</template>
<script>
export default {
  name: 'App',
  provide (){
    return {
      reload:this.reload
    }
  },
  data(){
    return {
      isRouterAlive:true
    }
  },
  methods: {
    reload() {
      this.$toast.loading({
        message: '加载中...',
        forbidClick: false,
        loadingType: 'spinner',
        duration: 10,
      })
      this.isRouterAlive = false
      this.$nextTick(function(){
        this.isRouterAlive = true
      })
    }
  }
}
</script>
<style lang="scss">
  #app{
    background: #2E2E33;
    overflow: hidden;
  }
</style>
