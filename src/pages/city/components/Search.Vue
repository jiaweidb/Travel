<template>
    <div>
        <div class="header-input">
            <input  
            class="input" 
            placeholder="请输入城市名或拼音"
            v-model="keyword" 
            />
        </div>
        <div 
          class="search-res" 
          ref="search" 
          v-show="keyword">
            <ul>
                <li 
                  class="search-item border-bottom" 
                  v-for="item of list" 
                  :key="item.id"
                >
                {{item.name}}
                </li>
                <li 
                  class="search-item border-bottom"
                   v-show="hasNoData"
                >
                    没有找到匹配数据
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
    name: 'CitySearch',
    props: {
        cities: Object
    },
    data () {
        return {
            keyword: '',
            list: [],
            timer: null
        }
    },
    computed: {
        hasNoData () {
            return !this.list.length
        }
    },
    watch: {
        keyword () {
            if(this.timer){
                clearTimeout(this.timer)
            }
            //让keyword为空时什么都不显示
            if(!this.keyword){
                this.list = []
                return 
            }
            this.timer = setTimeout(() => {
                const result = []
                for (let i in this.cities){
                    this.cities[i].forEach((value) => {
                        //indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。
                        if(value.spell.indexOf(this.keyword) > -1 ||
                           value.name.indexOf(this.keyword) > -1 ) {
                            result.push(value)
                        }
                    })
                }
                //这样list里面就存放了满足keyword搜索条件的spell和name
                this.list = result
            },100)
        }
    },
    //在生命周期函数mounted函数里面
    //引入BScroll让搜索出的结果如果过多的话可以滚动
    mounted () {
        this.scroll = new Bscroll(this.$refs.search)
    }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .border-bottom
   &:before
     border-color: #ccc
  .header-input
    background:$bgcolor
    /*这里设了左右的padding，下面的input直接设100%即可使父元素剩下的100% */
    padding: 0 .1rem
    height: .78rem
    .input
      height: .64rem
      border-radius: .06rem
      width: 100%
      text-align: center
      /*给用户输入文字时颜色的感觉会更好 */
      color: #666
      /* 下面这两行样式是为了输入框中输入文字过多时，框中左右在不改变输入框大小时 左右仍留有空隙*/
      box-sizing: border-box
      padding: 0 .1rem 
  .search-res
    position: absolute
    overflow: hidden
    top: 1.58rem
    right: 0
    bottom: 0
    left: 0
    z-index: 1
    background: #ccc
    .search-item
      line-height: .62rem
      paddinf-left: .2rem
      background: #fff
      color: #666
</style>