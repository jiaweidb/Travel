<template>
   <div>
        <div class="title">周末去哪游</div>
        <ul>
            <li class="item" v-for="item of weekendList" :key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl" />
                </div>
                <p class="item-title">{{item.title}}</p>
                <p class="item-desc">{{item.desc}}</p>
            </li>
        </ul>
   </div>
</template>

<script>
export default {
    name: 'HomeWeekend',
    data () {
        return {
            weekendList: [{
                id: '0001',
                imgUrl: "https://imgs.qunarzz.com/sight/source/1811/24/30f714149293b6.jpg_r_640x214_bfa37f12.jpg",
                title: "狮子峰等你",
                desc: "有黄山之险，悬崖峭壁，这里有满山的翠竹、青藤，堪称人间仙境世外桃源"
            },{
                id: '0002',
                imgUrl: "https://imgs.qunarzz.com/sight/source/1606/44/19689f8a01f5b2.jpg_r_640x214_7959e855.jpg",
                title: "九江打卡",
                desc: "有2200多年历史的江南文化名城"
            },{
                id: '0003',
                imgUrl: "https://imgs.qunarzz.com/sight/source/1505/bd/688c12889af7ad.jpg_r_640x214_cc490c32.jpg",
                title: "happy乐园",
                desc: "在这里玩转乐园，疯玩起来，无忧无虑一整天！"
            },]
        }
    }
}
</script>

<style lang="stylus" scoped>
  .title
    line-height: .48rem
    height: .48rem
    background: #ccc
    text-indent: .2rem
    padding: .1rem
  .item-img-wrapper
    height: 0
    overflow: hidden
    padding-bottom: 33.9%
    .item-img
      width: 100%
  .item-title
    padding: .1rem
    font-size: .32rem
  .item-desc
    padding: .1rem
    color: #ccc
</style>