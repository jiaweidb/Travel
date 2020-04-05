<template>
  <div>
      <div class="title">热门推荐</div>
      <ul>
          <router-link 
            tag="li"
            class="item" 
            v-for="item of list" 
            :key="item.id"
            :to=" '/detail/' + item.id"
          >
            <img class="item-img" :src="item.imgUrl">
            <div class="item-info">
                <p class="item-title">{{item.title}}</p>
                <p class="item-desc">{{item.desc}}</p>
                <button class="item-btn">查看详细</button>
            </div>
          </router-link>
      </ul>
  </div>
</template>

<script>
export default {
    name: 'HomeRecommend',
    props: {
        list: Array
    }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    margin-top: .1rem
    padding: .1rem
    background:#ccc
    text-indent: .2rem
    line-height: .48rem
    height: .48rem
  .item
    display: flex
    height: 1.9rem
    .item-img
      padding: .1rem
      width: 1.7rem
      height: 1.7rem
    .item-info
      flex: 1
      padding: .1rem
      min-width: 0
      .item-title
        line-height: .54rem
        text-indent: .2rem
        font-size: .32rem
        ellipsis()
      .item-desc
        line-heigth: .4rem
        color: #ccc
        margin-top: .1rem
        text-indent: .2rem
        ellipsis()
      .item-btn
        margin-left: .2rem
        margin-top: .23rem
        line-height: .42rem
        background: #ff9300
        border-radius: .06rem
        color: #fff
</style>