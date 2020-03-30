<template>
    <div class="title">
        <router-link to='/'>
           <span class="iconfont header-back">&#xe624;</span>
        </router-link>
        城市选择
    </div>
</template>

<script>
export default {
    name: 'CityHeader',
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .title
    position: relative
    line-height: $headerHeight
    height: $headerHeight
    text-align:center
    background: $bgcolor
    color: #fff
    font-size: .32rem
    .header-back
      position: absolute
      dispaly: block
      left: 0
      top: 0
      width: .64rem
      color: #fff
</style>