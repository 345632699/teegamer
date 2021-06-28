<!-- home -->
<template>
  <div class='detail-container'>
    <div class='warpper'>
      <!--      <div class="banner-small-container black-bg">-->
      <!--        <img src="@/assets/images/banner1.png" alt="">-->
      <!--      </div>-->
      <div class='header-title'>
        <div class='home-icon'>
          <van-icon class='home' name='wap-home' size='0.7rem'></van-icon>
        </div>
        <div class='sep'>/</div>
        <div class='text'>{{ titleName }}</div>
        <div class='view-more'>
          <span>view more</span>
          <img class='right-arrow' src='@/assets/images/right.png' alt=''>
        </div>
      </div>

      <div class='description'>
        <div class='title'>
          {{ gameDetail.name.toUpperCase() }}
        </div>
        <div class='desc-body'>
          <div class='desc-img'>
            <img :src='gameDetail.img' alt=''>
          </div>
          <div class='desc-main'>
            <div class='text'>
              {{ gameDetail.desc }}
            </div>
            <div class='operation'>
              <div class='reload' @click='refresh'>
                <van-icon name='replay'></van-icon>
                Reload Game
              </div>
              <!--              <div class="like">-->
              <!--                <van-icon name="good-job-o"></van-icon>-->
              <!--                {{ Math.round(Math.random()*1000)}}-->
              <!--              </div>-->
              <div class='unlike'>
                <van-icon name='good-job-o'></van-icon>
                {{ Math.round(Math.random() * 1000) }}
              </div>
              <div class='start'>
                {{ Math.round(Math.random() * 1000) }}
                <van-icon name='star-o' color='#FF5E1A'></van-icon>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class='btn-container'>
        <a :href='gameDetail.url'>
          <div class='play-btn'>
            <img src='@/assets/images/play.png' alt=''>
            PLAY NOW
          </div>
        </a>
      </div>

      <!--      <div class="tag-container">-->
      <!--        <div class="title">Principal Tags</div>-->
      <!--        <div class="tag-list">-->
      <!--          <div class="tag">-->
      <!--            Stickman WarriorsMore Tags-->
      <!--          </div>-->
      <!--        </div>-->
      <!--      </div>-->
      <div class='tag-container'>
        <div class='title'>Principal Tags</div>
        <div class='tag-list'>
          <div class='tag'>
            Stickman WarriorsMore Tags
          </div>
          <div class='tag'>
            Stickman WarriorsMore Tags
          </div>
          <div class='tag'>
            Stickman WarriorsMore Tags
          </div>
          <div class='tag'>
            Stickman WarriorsMore Tags
          </div>
          <div class='tag'>
            Stickman WarriorsMore Tags
          </div>
        </div>

      </div>
      <!--      <div class="banner-big-container">-->
      <!--        <img src="@/assets/images/banner.png" alt="">-->
      <!--      </div>-->
      <cat-title :game-list='gameList' :on-fresh='true'></cat-title>
      <!--      <div class="enjoy-word">-->
      <!--        <div class="adventure-btn">-->
      <!--          <div class="text">-->
      <!--            <img src="@/assets/images/qushi.png" alt="">-->
      <!--            <span>{{gameDetail.name}}</span>-->
      <!--          </div>-->
      <!--        </div>-->
      <!--        <div class="word">-->
      <!--          Play a new game from Cartoon Network totally free in Teen Titans Go: Super Hero Maker you can enjoy this free-->
      <!--          game on Kukogames.com with your favorite characters of the popular Teen Titans series!!! You will build your-->
      <!--          own super hero in this game, with special skills and apparel. Choose the features of your face, head, eyes to-->
      <!--          see how your new hero feels. Choose very well the skills to begin the option of the new Teen Titans hero with-->
      <!--          various skills and superpowers, launch the adventure and aid the citizens of the city to save the day again.-->
      <!--        </div>-->
      <!--      </div>-->
    </div>
  </div>
</template>

<script>
import CatTitle from '../../components/CatTitle'
import data from '../../assets/game.json'
import { getGameDetail, getGameList } from '@/api/game.js'

export default {
  inject: ['reload'],
  components: { CatTitle },
  data() {
    return {
      name: 'ddd',
      gameDetail: {
        desc: 'The game has two modes, endless and customs mode, you can play as much as you play, the more you play, the more fun you play.',
        name: 'Adventer game',
        url: '',
        img: require('@/assets/images/desc.png')
      },
      isRouterAlive: true,
      data: data,
      titleName: 'New Game',
      gameList: []
    }
  },

  computed: {},

  mounted() {
    this.titleName = this.$route.params.titleName
    this.getDetail()
    this.getSuggestList()
  },

  methods: {
    makeRandomArr(arrList, num) {
      if (num > arrList.length) {
        return
      }
      var tempArr = arrList.slice(0)
      var newArrList = []
      for (var i = 0; i < num; i++) {
        var random = Math.floor(Math.random() * (tempArr.length - 1))
        var arr = tempArr[random]
        tempArr.splice(random, 1)
        newArrList.push(arr)
      }
      return newArrList
    },
    refresh(id) {
      if (id > 0) {
        this.$route.params.id = id
      }
      this.reload()
    },
    getDetail() {
      getGameDetail({
        gameId: this.$route.params.id
      }).then((data) => {
        if (data.code === 10000) {
          this.gameDetail = data.result
          this.titleName = this.gameDetail.categories.replace('|', ' ')
        } else {
          for (const dataKey in this.data) {
            if (data[dataKey].Id == this.$route.params.id) {
              this.gameDetail = data[dataKey]
            }
          }
        }
      }).catch(() => {
        for (const dataKey in this.data) {
          if (data[dataKey].Id == this.$route.params.id) {
            this.gameDetail = data[dataKey]
          }
        }
      })
    },
    getSuggestList() {
      const params = {
        Page: 1,
        PageSize: 100
      }
      getGameList(params)
        .then((data) => {
          if (data.code === 10000) {
            data.result.splice(9, 1)
            this.gameList = data.result
          } else {
            this.gameList = this.makeRandomArr(this.data, 9)
          }
        })
        .catch(() => {
          this.gameList = this.makeRandomArr(this.data, 9)
        })
    }
  }
}
</script>
<style lang='scss' scoped>
.detail-container {
  .warpper {
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

    .description {
      background: #2E2E33;
      margin: 15px;

      .title {
        font-size: 14px;
        color: #FF5E1A;
        height: 22.5px;
        font-weight: bold;
      }

      .desc-body {
        display: flex;
        justify-content: normal;

        .desc-img {
          width: 100px;
          height: 100px;
          margin-right: 10px;

          img {
            width: 100%;
          }
        }

        .desc-main {
          .text {
            overflow-y: scroll;
            width: 228px;
            height: 67.5px;

            .text::-webkit-scrollbar-track { /*滚动条里面轨道*/

              -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);

              border-radius: 10px;

              background: red;

            }

            margin-bottom: 12.5px;
          }

          .operation {
            display: flex;
            justify-content: space-between;
          }
        }

      }
    }

    .btn-container {
      a {
        color: #fff;
      }

      background: #2E2E33;

      .play-btn {
        margin: auto;
        margin-bottom: 15px;
        background: #FF5E1A;
        width: 340px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        font-weight: bold;

        img {
          vertical-align: middle;
          margin-right: 10px;
          width: 15.5px;
          height: 18px;
        }
      }
    }

    .tag-container {
      background: #2E2E33;
      width: 100%;
      margin-bottom: 10px;

      .title {
        margin-left: 10px;
        width: 100%;
        color: #FF5E1A;
        font-size: 12px;
        padding-bottom: 4.5px;
      }

      .tag-list {
        margin-left: 10px;

        .tag {
          width: 110px;
          color: #999999;
          text-align: center;
          font-size: 7px;
          padding: 0 2px;
          margin-right: 5px;
          margin-bottom: 5px;
          display: inline-block;
          border: 0.5px #FFFFFF solid;
          border-radius: 3px;
        }
      }

    }

    .banner-big-container {
      width: 100%;
      background: black;

      img {
        background: black;
        display: block;
        padding: 10px 15px 40px 15px;
        width: 345px;
        height: 100px;
      }
    }

    .game-list {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin: 10px 15px;

      .game {
        margin-bottom: 5px;

        img {
          width: 109px;
          height: 109px;
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

    .black-bg {
      background: black;
    }

    .enjoy-word {
      /*height: 128px;*/
      background: black;
      padding: 40px 0;

      .adventure-btn {
        margin: auto;
        background: #FF5E1A;
        width: 340px;
        height: 35px;
        line-height: 35px;
        font-weight: bold;
        font-size: 15px;
        display: flex;

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

      .word {
        margin: auto;
        margin-top: 10px;
        width: 340px;
        color: #999999;
        text-align: justify;
      }
    }

  }
}
</style>
