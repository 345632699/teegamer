<!-- home -->
<template>
  <div class="index-container">
    <div v-for="cat in catList">
      <cat-title :title-name="cat.title" :game-list="cat.ganeList"></cat-title>
    </div>
    <div class="about">
      <div class="logo">
        <img src="@/assets/images/circle-logo.png" alt="">
      </div>
      <div class="detail">
        <div class="content">
          Play a new game from Cartoon Network totally free in Teen Titans Go: Super Hero Maker you can enjoy this
          free game on Kukogames.com with your favorite characters of the popular Teen Titans series!!! You will
          build your own super hero in this game, with special skills and apparel. Choose the features of your face,
          head, eyes to see how your new hero feels. Choose very well the skills to begin the option of the new Teen
          Titans hero with various skills and superpowers, launch the adventure and aid the citizens of the city to
          save the day again.

        </div>
        <div class="thanks">Thank for have fun</div>
      </div>
      <div class="btn-list">
        <orange-btn></orange-btn>
<!--        <white-btn></white-btn>-->
      </div>
    </div>
  </div>
</template>

<script>
import CatTitle from '../../components/CatTitle'
import OrangeBtn from '../../components/OrangeBtn'
import WhiteBtn from '../../components/WhiteBtn'
import data from '../../assets/game.json'
import { getGameList } from '@/api/game.js'

export default {
  components: { WhiteBtn, OrangeBtn, CatTitle },
  data() {
    return {
      data: data,
      catList: [
        {
          'title': 'New Game',
          ganeList: []
        },
        {
          'title': 'Top Games',
          ganeList: []
        },
        {
          'title': 'Action Games',
          ganeList: []
        },
        {
          title: 'Puzzle Games',
          ganeList: []
        },
        {
          title: 'Adventure Games',
          ganeList: []
        },
        {
          title: 'Skill Games',
          ganeList: []
        },
        {
          title: 'Puzzle Games',
          ganeList: []
        },
        {
          title: 'Sports Games',
          ganeList: []
        },
        {
          title: 'Strategy Games',
          ganeList: []
        },
        {
          title: 'Girls Games',
          ganeList: []
        }
      ]
    }
  },

  computed: {},

  mounted() {
    let i = 1
    this.catList.forEach((cat) => {
      const strings = cat.title.split(' ')
      console.log(strings)
      const params = {
        Page: i,
        PageSize: 100
        // categories: strings[0]
      }
      getGameList(params)
        .then((data) => {
          if (data.code === 10000) {
            data.result.splice(9, 1)
            cat.ganeList = data.result
          } else {
            this.catList.forEach((cat) => {
              cat.ganeList = this.makeRandomArr(this.data, 9)
            })
          }
        })
        .catch(() => {
          this.catList.forEach((cat) => {
            cat.ganeList = this.makeRandomArr(this.data, 9)
          })
        })
      i++
    })
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
    }

  }
}
</script>
<style lang="scss" scoped>
  .index-container {
    .about {
      padding-top: 40.5px;
      height: 535px;
      width: 100%;
      background: black;

      .logo {
        margin: auto;
        text-align: center;
        margin-bottom: 15px;

        img {
          width: 175px;
          height: 127px;
        }
      }

      .detail {
        .content, .thanks {
          text-align: justify;
          margin: 20px;
          max-height: 230px;
          overflow-y: auto;
        }
      }
    }
  }
</style>
