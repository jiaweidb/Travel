<template>
    <div class="list">
        <ul>
            <li 
              class="item"
              v-for="item of letters" 
              :key="item" 
              :ref="item"
              @touchstart="handleTouchStart"
              @touchmove="handleTouchMove"
              @touchend="handleTouchEnd"
              @click="handleClick"
            >
              {{item}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'CityAlphabet',
    props:{
            cities: Object
    },
    //存放字母列表
    computed: {
        letters() {
            const letters = []
            //对于这里对于cities对象的for in 循环得出的i不是1,2,3，而是i='A',i='B'...
            for (let i in this.cities) {
                letters.push(i)
            }
            return letters 
            //得到类似于['A','B','C',....]这样的数组
        }
    },
    data () {
        return {
            touchStatus: false,
            startY: 0,
            timer: null
        }
    },
    //每次数据渲染渲染完成并被更新的时候，就执行这个函数
    //这个alphabet.vue组件一开始由city.vue父组件出传来的cities为空数组，
    //后面在city.vue执行mounted的生命函数钩子的时候才获取到了cities的json数据
    //故这个Alphabet.vue在数据被更新时执行updated函数，算一次就好
    updated () {
        this.startY = this.$refs['A'][0].offsetTop
    },
    methods: {
        handleClick (e) {
            this.$emit('change',e.target.innerText)
        },
        handleTouchStart () {
            this.touchStatus = true
        },
        handleTouchMove (e) {
            if (this.touchStatus) { 

                //这一句话可以优化，因为这个值是固定的，可以在上面的updated生命函数钩子里写
                //const startY = this.$refs['A'][0].offsetTop

                //用timer做个节流--->降低move操作执行的频率
                //如果timer存在就清空
                if(this.time)(
                    clearTimeout(this.timer)
                )
                //如果不存在，我就让你执行，但是延迟16ms;
                //所以如果在此期间你又发起了Move操作，我就把你的前一次的move操作清空。直接执行你最新的请求，
                this.timer = setTimeout(() => {
                    const touchY = e.touches[0].clientY - 82
                    //计算当前手指滑动的字母在letters里的下标位置index
                    const index = Math.floor((touchY - this.startY) / 20 )
                    if(index >= 0 && index < this.letters.length){
                        this.$emit('change',this.letters[index])
                    }
                },16)
            }
        },
        handleTouchEnd () {
            this.touchStatus = false
        },
    }
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