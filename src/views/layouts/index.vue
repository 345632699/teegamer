<template>
  <div class="app-container">
    <div class="layout-header">
      <div class="demo-nav">
        <div class="demo-nav__title">
          <img src="@/assets/images/logo.png" alt="">
        </div>
        <div class="demo-nav__back" @click="jumpUrl('Home')">
          <van-icon name="wap-nav" color="#fff" size="0.8rem"/>
        </div>
        <div class="search">
          <van-icon name="search" color="#fff" size="0.8rem"/>
        </div>
      </div>
    </div>
    <div class="layout-content">
      <keep-alive v-if="$route.meta.keepAlive">
        <router-view></router-view>
      </keep-alive>
      <router-view v-else></router-view>
    </div>
    <div class="layout-footer">
      <!--      <TabBar :data="tabbars" @change="handleChange" />-->
      <div class="foot-container">
        <div class="first">
          <img src="@/assets/images/logo.png" alt="">
          <span class="text">Let the world play</span>
        </div>
        <div class="nav">
          <div>About us</div>
          <div>|</div>
          <div>Help</div>
          <div>|</div>
          <div>Contact</div>
          <div>|</div>
          <div>Developers</div>
          <div>|</div>
          <div>Jobs</div>
          <div>|</div>
          <div>Poki Kids</div>
        </div>
        <div class="share">
          <img src="@/assets/images/B.png" alt="">
          <img src="@/assets/images/F.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .demo-nav {
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    height: 95px;
    background-color: #2E2E33;

    .demo-nav__title {
      font-weight: 600;
      font-size: 17px;
      text-transform: capitalize;

      img {
        height: 45px;
        width: 149px;
      }
    }

    .demo-nav__back {
      position: absolute;
      top: 26px;
      left: 20px;
      width: 24px;
      height: 24px;
      cursor: pointer;
    }

    .search {
      position: absolute;
      top: 26px;
      right: 20px;
      width: 24px;
      height: 24px;
      cursor: pointer;
    }
  }

  .foot-container {
    position: relative;
    width: 100%;
    height: 122.5px;
    background: url("../../assets/images/bg.png");
    background-size: 100%;

    .first {
      font-size: 8px;
      color: #1D1C1F;
      font-weight: bold;

      img {
        position: absolute;
        top: 29px;
        left: 26px;
        width: 60px;
        height: 18px;
      }

      .text {
        position: absolute;
        top: 29px;
        left: 103px;
      }
    }

    .nav {
      display: flex;
      justify-content: space-between;
      margin: 0 15px;
      padding-top: 68px;
      color: #1D1C1F;
      font-size: 8px;

    }

    .share {
      margin-left: 15px;

      img {
        margin-top: 10px;
        margin-right: 10px;
        width: 20px;
      }
    }
  }

</style>
<script>
export default {
  name: 'AppLayout',
  data() {
    return {
      tabbars: [
        {
          title: '首页',
          to: {
            name: 'Home'
          },
          icon: 'home-o'
        },
        {
          title: '关于我',
          to: {
            name: 'About'
          },
          icon: 'user-o'
        }
      ]
    }
  },
  components: {},
  methods: {
    handleChange(v) {
      console.log('tab value:', v)
    },
    jumpUrl(name) {
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>
