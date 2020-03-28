<template>
   <div>
        <div class="title">周末去哪游</div>
        <ul>
            <li class="item" v-for="item of list" :key="item.id">
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
    props: {
        list: Array
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
    padding-bottom: 37.09%
    .item-img
      width: 100%
  .item-title
    padding: .1rem
    font-size: .32rem
  .item-desc
    padding: .1rem
    color: #ccc
</style>