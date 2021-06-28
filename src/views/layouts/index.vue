<template>
  <div class="app-container">
    <div class="layout-header">
      <div class="demo-nav">
        <div class="demo-nav__title" @click="jumpUrl('Home')">
          <img src="@/assets/images/logo.png" alt="">
        </div>
        <div class="demo-nav__back" @click="openMenu">
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
    <div class="menu-container" v-if="displayMenu">
      <div class="mask">
        <div class="logo-container">
          <img class="logo" src="@/assets/images/menu/logo.png" alt="">
          <img @click="closeMenu" class="close" src="@/assets/images/menu/close.png" alt="">
        </div>
        <div class="list">
          <div class="item" @click="jumpUrl('Home')">
            <img class="icon" src="@/assets/images/menu/home.png" alt="">
            Home
            <img class="right-arrow" src="@/assets/images/menu/right-arrow.png" alt="">
          </div>
          <div class="item item1">
            <img class="icon" src="@/assets/images/menu/game.png" alt="">
            New Games
            <img class="right-arrow" src="@/assets/images/menu/right-arrow.png" alt="">
          </div>
          <div class="item item2">
            <img class="icon" src="@/assets/images/menu/shaizi.png" alt="">
            More Played
            <img class="right-arrow" src="@/assets/images/menu/right-arrow.png" alt="">
          </div>
          <div class="item item3">
            <img class="icon" src="@/assets/images/menu/huangguan.png" alt="">
            Rated Games
            <img class="right-arrow" src="@/assets/images/menu/right-arrow.png" alt="">
          </div>
          <div class="item item4">
            <img class="icon" src="@/assets/images/menu/xq.png" alt="">
            Top Games
            <img class="right-arrow" src="@/assets/images/menu/right-arrow.png" alt="">
          </div>
          <div class="sub-item-list">
            <div class="item sub-item">
              <span class="sub-title">Action</span>
              <img class="right-arrow1" src="@/assets/images/menu/right-arrow.png" alt="">
            </div>
          </div>
          <div class="item item5">
            <img class="icon" src="@/assets/images/menu/game.png" alt="">
            All Tags
            <img class="right-arrow" src="@/assets/images/menu/right-arrow.png" alt="">
          </div>
          <div class="item item6">
            <img class="icon" src="@/assets/images/menu/game.png" alt="">
            Kiz10
            <img class="right-arrow" src="@/assets/images/menu/right-arrow.png" alt="">
          </div>
          <div class="item item7">
            <img class="icon" src="@/assets/images/menu/game.png" alt="">
            Kiz10 Girls
            <img class="right-arrow" src="@/assets/images/menu/right-arrow.png" alt="">
          </div>
          <div class="item item8">
            <img class="icon" src="@/assets/images/menu/game.png" alt="">
            Taptapking
            <img class="right-arrow" src="@/assets/images/menu/right-arrow.png" alt="">
          </div>
          <div class="item item9">
            <img class="icon" src="@/assets/images/menu/game.png" alt="">
            Fun10Games
            <img class="right-arrow" src="@/assets/images/menu/right-arrow.png" alt="">
          </div>
          <div class="item item10">
            <img class="icon" src="@/assets/images/menu/game.png" alt="">
            Games for your site
            <img class="right-arrow" src="@/assets/images/menu/right-arrow.png" alt="">
          </div>

        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .menu-container{
    .mask{
      width: 150px;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.7);
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }
    .logo-container{
      position: relative;
      .logo{
        display: inline-block;
        margin-left: 3px;
        margin-top: 6px;
        width: 145px;
        height: 37.5px;
      }
      .close{
        position: absolute;
        height: 20px;
        width: 20px;
        right: 10px;
        top: 15px;
      }
    }
    .list{
      font-size: 8px;
      font-weight: bold;
      color: #FFFFFF;

      .item{
        position: relative;
        width: 121px;
        height: 22px;
        background: #FF5E1A;
        border-radius: 2px;
        line-height: 22px;
        margin: 5px auto;
        padding-left: 10px;
        .right-arrow{
          position: absolute;
          right: 20px;
          top: 7.5px;
          width: 5.5px;
          height: 7.5px;
        }
        .right-arrow1{
          position: absolute;
          right: 20px;
          top: 7.5px;
          width: 5.5px;
          height: 7.5px;
        }
        .icon{
          margin-right: 5px;
          height: 10px;
          width: 12px;
        }
        &.item1{
          background: #7491FC;
        }
        &.item2{
          background: #FFA500;
        }
        &.item3{
          background: #4C2FFF;
        }
        &.item4{
          background: #800080;
        }
        &.item5{
          background: #F75959;
        }
        &.item6{
          background: #441774;
         }
        &.item7{
          background: #951961;
        }
        &.item8{
          background: #489FEF;
        }
        &.item9{
          background: #441774;
        }
        &.item10{
          background: #441774;
        }
        &.sub-item{
          padding-left: 10px;
          background: #5A5965;
          .sub-title{
            display: inline-block;
            margin-left: 10px;
          }
        }
      }
    }
  }
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
  inject: ['reload'],
  name: 'AppLayout',
  data() {
    return {
      displayMenu: false,
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
      if (this.displayMenu) {
        this.displayMenu = false
        this.reload()
      }
    },
    closeMenu () {
      this.displayMenu = false
    },
    openMenu () {
      this.displayMenu = true
    },

  }
}
</script>
