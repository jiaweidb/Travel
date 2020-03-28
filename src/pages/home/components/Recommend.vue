<template>
  <div>
      <div class="title">热门推荐</div>
      <ul>
          <li class="item" v-for="item of recommendList" :key="item.id">
            <img class="item-img" :src="item.imgUrl">
            <div class="item-info">
                <p class="item-title">{{item.title}}</p>
                <p class="item-desc">{{item.desc}}</p>
                <button class="item-btn">查看详细</button>
            </div>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    name: 'HomeRecommend',
    data () {
        return {
            recommendList: [{
                id: '0001',
                imgUrl: "https://imgs.qunarzz.com/sight/p0/1610/96/96dd898b88f35cc0a3.water.jpg_200x200_4885de47.jpg",
                title: "景德镇古窑民俗博览区",
                desc: "春暖花开 走出室内 体验你和它的乐趣"
            },{
                id: '0002',
                imgUrl: "https://imgs.qunarzz.com/sight/p0/1610/96/96dd898b88f35cc0a3.water.jpg_200x200_4885de47.jpg",
                title: "景德镇古窑民俗博览区",
                desc: "春暖花开 走出室内 体验你和它的乐趣"
            },{
                id: '0003',
                imgUrl: "https://imgs.qunarzz.com/sight/p0/1610/96/96dd898b88f35cc0a3.water.jpg_200x200_4885de47.jpg",
                title: "景德镇古窑民俗博览区",
                desc: "春暖花开 走出室内 体验你和它的乐趣"
            },]
        }
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