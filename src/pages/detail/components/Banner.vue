<template>
  <div>
    <div class="banner" @click="handleCBannerClick">
        <div class="banner-img">
            <img :src="bannerImg" />
        </div>
        <div class="banner-info">
            <div class="info-title">{{this.sightName}}</div>
            <div class="info-star banner-font">
                <span class="iconfont">&#xe60f;</span>
                {{this.bannerImgs.length}}
            </div>
        </div>
    </div>
    <common-gallary 
      :imgs="bannerImgs" 
      v-show="showGallary"
      @close="handleGallaryClose"
      ></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
    name: 'DetailBanner',
    props: {
      sightName: String,
      bannerImg: String,
      bannerImgs: Array
    },
    data () {
      return {
        showGallary: false,
      }
    },
    components: {
      CommonGallary
    },
    methods: {
      handleCBannerClick () {
        this.showGallary = true
      },
      handleGallaryClose () {
        this.showGallary = false
      }
    }
}
</script>

<style lang="stylus" scoped>
  .banner
    overflow: hidden
    height: 0
    padding-bottom: 55%
    position: relative
    .banner-img
      width: 100%
    .banner-info
      position: absolute
      display: flex
      bottom: 0
      left: 0
      right: 0
      line-height: .6rem
      color: #fff
      background-image: linear-gradient(top, rgba(0, 0, 0
         , 0), rgba(0, 0, 0, 0.8))
      .info-title
        flex: 1
        height: .4rem
        font-size: .32rem
        line-height: .4rem
        text-indent: .2rem
      .info-star
        line-height: .32rem
        height: .32rem
        padding: 0 .4rem
        background: rgba(0, 0, 0, .8)
        border-radius: .2rem
        font-size: .24rem
        .iconfont
          font-size: .24rem
</style>