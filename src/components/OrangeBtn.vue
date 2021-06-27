<template>
  <div class="orange-btn">
    <div class="text">
      <img src="../assets/images/qushi.png" alt="">
      <span>Free games at Teegamer.com</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrangeBtn'
}
</script>

<style lang="scss" scoped>
  .orange-btn {
    margin: auto;
    background: #FF5E1A;
    width: 340px;
    height: 35px;
    line-height: 35px;
    font-weight: bold;
    font-size: 15px;
    display: flex;
    margin-bottom: 10px;
    .text {
      img {
        display: inline-block;
        vertical-align: middle;
        width: 20px;
        padding-right: 10px;
      }

      margin-left: 10px;
    }
  }
</style>
