<template>
  <div>
    <div class="banner" @click="handleCBannerClick">
        <div class="banner-img">
            <img src='https://imgs.qunarzz.com/vs_ceph_vs_tts/27cb1a13-fd9e-4d28-ae24-1877d77fe612.jpg_r_390x260x95_b7bccd22.jpg' />
        </div>
        <div class="banner-info">
            <div class="info-title">踏春赏花全景特价含往返机票7日</div>
            <div class="info-star banner-font">
                <span class="iconfont">&#xe60f;</span>
                39
            </div>
        </div>
    </div>
    <common-gallary 
      :imgs="imgs" 
      v-show="showGallary"
      @close="handleGallaryClose"
      ></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
    name: 'DetailBanner',
    data () {
      return {
        showGallary: false,
        imgs: ['https://img1.qunarzz.com/vs_ceph_vs_tts/9262aa27-498a-45b5-8013-c80d112ce7e9.png',
                         'https://img1.qunarzz.com/vs_ceph_vs_tts/fc3a05f3-b829-41f7-9440-11823e76c281.png']
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