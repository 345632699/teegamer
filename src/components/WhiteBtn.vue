<template>
  <div class="white-btn">
    <div class="text">
      <span>Wellcome to teegamer</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WhiteBtn'
}
</script>

<style lang="scss" scoped>
  .white-btn {
    margin: auto;
    background: #FFF;
    width: 340px;
    height: 35px;
    line-height: 35px;
    font-weight: bold;
    font-size: 15px;
    display: flex;
    color: #1D1C1F;
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
