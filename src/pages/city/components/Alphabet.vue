<template>
    <div class="list">
        <ul v-for="(item, key) of cities" :key="key">
            <li class="item">{{key}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'CityAlphabet',
   props:{
            cities: Object
    },
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .list /*盒子的弹性布局，按列排列；排列在列的中间；相对于body绝对定位，right: 0 靠近右边*/
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    right: 0
    top: 1.58rem
    bottom: 0
    width: .4rem
    .item
      line-height: .4rem
      text-align: center
      color: $bgcolor
</style> 