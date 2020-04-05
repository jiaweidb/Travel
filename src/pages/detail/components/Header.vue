<template>
  <div>
    <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
      <span class="iconfont header-abs-back">&#xe624;</span>
    </router-link>
    <div 
      class="header-fixed" 
      v-show="!showAbs"
      :style="opacityStyle"
    >
      <router-link to='/'>
           <span class="iconfont header-fixed-back">&#xe624;</span>
        </router-link>
        城市选择
    </div>
  </div>
</template>

<script>
export default {
    name: 'DetailHeader',
    data () {
      return {
        showAbs: true,
        opacityStyle: {
          opacity: 0
        }
      }
    },
    methods: {
      handleScroll () {
        const top = document.documentElement.scrollTop
        if ( top > 60 ) {
          /*下面对opacity还有个正则表达式的运算，不能用只读变量const声明 */
          /*opacity表示的是不透明度，默认值为 1  */
          let opacity = top / 140
          opacity = opacity > 1 ? 1 : opacity
          this.opacityStyle = {
            opacity
          }
          this.showAbs = false
        }else{
          this.showAbs = true
        }
      }
    },
    activated () {
      window.addEventListener('scroll', this.handleScroll)
    }
}
</script>

<style lang="stylus" scoped>
 /*opacity设置元素的不透明级别 ,默认值1,完全不透明*/
 @import '~styles/varibles.styl'
  .header-abs
    position: absolute
    top: .2rem
    left: .2rem
    /*width height border-radius三者是为了一个圆 */
    width: .8rem
    height: .8rem
    /*为了让箭头垂直居中 */
    line-height: .8rem
    border-radius: 50%
    text-align:center
    background: rgba(0, 0, 0, .8)
    .header-abs-back
      color: #fff
      font-size: .4rem
  .header-fixed
    position: fixed
    top: 0
    right: 0
    bottom: 0
    left: 0
    line-height: $headerHeight
    height: $headerHeight
    text-align:center
    background: $bgcolor
    color: #fff
    font-size: .32rem
    .header-fixed-back
      position: absolute
      dispaly: block
      left: 0
      top: 0
      width: .64rem
      color: #fff
</style>