<template>
    <div class="icons">
        <swiper>
            <swiper-slide v-for="(page, index) of pages" :key="index">
                <div class="icon"  v-for="item of page" :key="item.id">
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.imgUrl"/>
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default {
    name: 'HomeIcons',
    data () {
        return {
            iconsList: [{
                id: '001',
                imgUrl: "https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
                desc: "热门景点热热热热热热 "
            },
            {
                id: '002',
                imgUrl: "https://imgs.qunarzz.com/piao/fusion/1803/67/9a1678221b8e0e02.png",
                desc: "热门景点"
            },
            {
                id: '003',
                imgUrl: "https://imgs.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
                desc: "一日游"
            },
            {
                id: '004',
                imgUrl: "https://imgs.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png",
                desc: "踏青赏花"
            },
            {
                id: '005',
                imgUrl: "https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
                desc: "热门景点"
            },
            {
                id: '006',
                imgUrl: "https://imgs.qunarzz.com/piao/fusion/1803/67/9a1678221b8e0e02.png",
                desc: "热门景点"
            },
            {
                id: '007',
                imgUrl: "https://imgs.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
                desc: "一日游"
            },
            {
                id: '008',
                imgUrl: "https://imgs.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png",
                desc: "踏青赏花"
            },{
                id: '009',
                imgUrl: "https://imgs.qunarzz.com/piao/fusion/1803/8c/47630407f70e8302.png",
                desc: "影城"
            }]
        }
    },
    //根据数据项的不同，做到多页切换的功能
    computed: {
        pages () {
            const pages = []
            this.iconsList.forEach((item, index) => {
                const page  = Math.floor(index / 8)
                if(!pages[page]) {
                    //如果pages[0]这一页不存在，就这里建一个
                    //将每个页面初始化为一个数组，这样后面才能push进
                    pages[page] = []
                }
                //每8个push到新建好的pages[0],pages[1]
                pages[page].push(item)
            })
            return pages
        }
    }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .icons >>> .swiper-container
    width: 100%
    height: 0
    padding-bottom: 50%
  .icon
    position: relative
    width: 25%
    overflow: hidden
    padding-bottom: 25%
    height: 0
    float: left
    .icon-img
      position: absolute
      left: 0
      right: 0
      top: 0
      bottom: .44rem
      box-sizing: border-box
      padding: .06rem
      .icon-img-content
        display: block
        height: 110%
        margin: 0 auto
    .icon-desc
      position: absolute
      left: 0
      right: 0
      bottom: 0
      height: .44rem
      line-height: .44rem
      text-align: center
      color: $darkTextColor
      ellipsis()
</style>