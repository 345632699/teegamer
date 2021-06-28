<template>
  <div>
    <div class="header-title sub-title">
      <div class="text">{{titleName}}</div>
      <div class="view-more">
        <span>view more</span>
        <img class="right-arrow" src="@/assets/images/right.png" alt="">
      </div>
    </div>
    <div class="game-list">
      <a @click="goUrl(game.id)" v-for="game in gameList" v-if="onFresh">
        <div class="game">
          <img :src="game.img" alt="" :name="game.name">
        </div>
      </a>
      <router-link :to="{name:'Detail',params: {id: game.Id, titleName: titleName}}" v-for="game in gameList" v-if="!onFresh">
        <div class="game">
          <img :src="game.img" alt="" :name="game.name">
        </div>
      </router-link>
      <div style="text-align: center" v-if="gameList.length <= 0">
        no result
      </div>
    </div>
<!--    <div class="banner-small-container" v-if="gameList.length > 0">-->
<!--      <img src="@/assets/images/banner1.png" alt="">-->
<!--    </div>-->
  </div>

</template>

<script>
export default {
  inject: ['reload'],
  name: 'CatTitle',
  props: {
    titleName: {
      type: String,
      default: 'Suggested Games'
    },
    onFresh: {
      type: Boolean,
      default: false
    },
    gameList: {
      type: Array,
      default: () => {
        return [
          {
            id: 1,
            name: '111',
            url: 'detail',
            img: require('@/assets/images/desc.png')
          },
          {
            id: 2,
            name: '2222',
            url: 'www.baidu.com',
            img: require('@/assets/images/desc.png')
          },
          {
            id: 3,
            name: '2222',
            url: 'www.baidu.com',
            img: require('@/assets/images/desc.png')
          },
          {
            id: 1,
            name: '111',
            url: 'www.baidu.com',
            img: require('@/assets/images/desc.png')
          },
          {
            id: 2,
            name: '2222',
            url: 'www.baidu.com',
            img: require('@/assets/images/desc.png')
          },
          {
            id: 3,
            name: '2222',
            url: 'www.baidu.com',
            img: require('@/assets/images/desc.png')
          }
        ]
      }
    }
  },
  data() {
    return {}
  },
  mounted() {
  },
  methods: {
    goUrl(id) {
      this.$parent.refresh(id)
    }
  }
}
</script>

<style lang="scss" scoped>
  .header-title {
    position: relative;
    background: #FF5E1A;
    width: 100%;
    height: 40px;
    font-weight: bold;
    display: flex;
    justify-content: normal;
    align-items: center;
    font-size: 18px;
    background: url("../assets/images/title_bg.png");
    background-size: 100% 100%;

    .home-icon {
      .home {
        line-height: 30px;
        padding-left: 10px;
      }
    }

    .sep {
      padding: 0 12.5px;
    }

    .view-more {
      position: absolute;
      right: 10px;
      height: 20px;
      width: 75px;
      line-height: 20px;
      background: #E8E5FF;
      border-radius: 3px;
      color: #1D1C1F;
      font-size: 7px;
      text-align: center;

      .right-arrow {
        padding-left: 2px;
        width: 10px;
        vertical-align: middle;
        display: inline-block;
      }
    }
  }

  .sub-title {
    .text {
      margin-left: 10px;
    }
  }

  .game-list {
    /*display: flex;*/
    /*justify-content: space-between;*/
    /*flex-wrap: wrap;*/
    margin: 5px 5px;

    .game {
      display: inline-block;
      margin: 5px;

      img {
        width: 109px;
        height: 109px;
        border-radius: 20px;
      }
    }
  }

  .banner-small-container {
    text-align: center;
    padding: 10px;

    img {
      width: 345px;
      height: 38.5px;
    }
  }
</style>
