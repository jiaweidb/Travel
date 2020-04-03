<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">您的位置</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">{{this.currentCity}}</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div 
                      class="button-wrapper" 
                      v-for="item of hotCities" 
                      :key="item.id"
                      @click="handleCityClick(item.name)"
                      >
                        <div class="button">{{item.name}}</div>
                    </div>
                </div>
            </div>
            <div 
              class="area" v-for="(item, key) of cities" 
              :key="key"
              :ref="key"  
            >
                <div class="title border-topbottom">{{key}}</div>
                <div 
                  class="item-list" 
                  v-for="innerItem of item" 
                  :key="innerItem.id"
                  @click="handleCityClick(innerItem.name)"
                  >
                    <div class="item border-bottom">{{innerItem.name}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
    name: 'CityList',
    props: {
        hotCities: Array,
        cities: Object,
        letter: String
    },
    computed: {
      ...mapState({
        currentCity: 'city'
      })
    },
    methods: {
      handleCityClick (city) {
        //this.$store.commit('changeCity', city)
        //引入mapMutations之后可以改为
        this.changeCity(city)
        this.$router.push('/')
      },
      ...mapMutations(['changeCity'])
    },
    mounted () {
        this.scroll = new Bscroll(this.$refs.wrapper)
    },
    watch: {
      //侦听点击的letter是否变化，一旦变化就执行下面的函数
      letter () {
        //BetterScroll提供给我们了这样一个接口：如果this.scroll不为空，可以自动滚到这个元素上
        //this.scroll.scrollToElement
        if(this.letter) {
          //最后不加[0]的话v-for获得的是这个字母对应的area,加上[0]获得的就是对应的元素
          const element = this.$refs[this.letter][0]
          //这样输出的element为数组，可是这个scroll插件需要操作的是dom元素
          //console.log(element)
          this.scroll.scrollToElement(element)
        }
      }
    }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .border-topbottom
    &:before
      border-color: #ccc 
    &:after
      border-color:  #ccc
  .border-bottom
    &:before
      border-color: #ccc
  .list /*要保证这个整个list不能滑动，所以设置absolute,并且设置overflow:hidden。top留值给输入框显示，*/
    position: absolute
    top: 1.63rem
    right: 0
    bottom: 0
    left: 0
    overflow: hidden
    .title
      line-height: .54rem
      height: .5rem
      background: #eee
      text-indent: .2rem
      font-size: .26rem
      color: #666
    .button-list
      overflow: hidden
      padding: .1rem .6rem .1rem .1rem
      .button-wrapper /*这个wrapper的样式写的很简洁，你要注意了 */
        float: left 
        width: 33.33%
        .button /*控制多个button间的间距在这里写了，其中想改变button的高度：即内容到上下边框的距离的时候使用了padding */
          margin: .1rem
          text-align: center
          padding: .1rem 0
          border-radius: .06rem
          border: .02rem solid #ccc
    .item-list
      .item
        line-height: .64rem
        padding-left: .2rem
</style> 