<template> 
   <div class="header">
       <div class="header-left">
           <span class="iconfont back-icon">&#xe624;</span>
       </div>
       <div class="header-input">
           <span class="iconfont">&#xe632;</span>
           输入城市/景点/有游玩主题
        </div>
        <router-link to='/city'>
          <div class="header-right">
              {{this.city}}
              <span class="iconfont arrow-icon">&#xe62a;</span>
          </div>
        </router-link>
   </div>
</template>

<script>
export default {
    name: 'HomeHeader',
    props: {
      city: String
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
  .header
    line-height: $headerHeight
    display: flex
    background: $bgcolor
    color: #ffffff
    .header-left
      width: .64rem
      float: left
      padding-left: .12rem
      .back-icon
        text-align: center
        font-size: .4rem
    .header-input
      flex: 1
      background: #fff
      height: .64rem
      line-height: .64rem
      margin-top: .12rem
      margin-left: .2rem
      padding-left: .2rem
      border-radius: .1rem
      color: #ccc
    .header-right
      width: 1.24rem
      float: right
      text-align: center
      color: #fff
      .arrow-icon
        margin-left: -.04rem
        font-size: .24rem
</style>
