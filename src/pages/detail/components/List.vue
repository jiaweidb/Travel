<template>
    <div>
        <div 
           class="list-item border-bottom"
           v-for="(item, key) of categoryList" 
           :key="key">
           <div class="item">
               <span class="item-icon"></span>
               {{item.title}}
           </div>
           <div v-if="item.children">
               <detail-list 
                 :categoryList="item.children"
                 class="children-item"></detail-list>
           </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetailList',
    props: {
        categoryList: Array
    },
}
</script>

<style lang="stylus" scoped>
  .border-bottom
    &:before
      border-color: #ccc
  .item
    line-height: .8rem
    height: .8rem
    font-size: .32rem
    padding: 0 .2rem
    .item-icon
      position: relative
      left: .05rem
      top: .08rem
      display: inline-block
      width: .36rem
      height: .36rem
      background : url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
      background-size: .4rem 3rem
      margin-top: .2rem
  .children-item
    padding: 0 .2rem
      
</style> 