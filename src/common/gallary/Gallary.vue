<template>
    <div class="container" @click="handleGallaryClick">
        <div class="wrapper">
            <swiper :options="swiperOptions">
                <swiper-slide v-for="(item, index) of imgs" :key="index">
                    <img class="swiper-img" :src="item" />
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CommonGallary',
    props: {
        imgs: {
            type: Array,
            default () {
                return []
                }
            }
    },
    data() {
        return {
            swiperOptions: {
                pagination: '.swiper-pagination',
                paginationType: 'fraction',
                /*通过自我刷新，解决点击图片看到详情后swiper划得不利索的问题 */
                observeParents: true,
                observer: true
            }
        }
    },
    methods: {
        handleGallaryClick () {
            this.$emit('close')
        }
    }
}
</script>

<style lang="stylus" scoped>
  /* 将swiper-pagination改为分式时，想让他显现在swiper的下面，要解决掉wrapper和swiper
  自带的swiper-container的over-flow: hidden 的问题*/
  .container >>> .swiper-container
    overflow: inherit 
  .container
    display: flex
    flex-direction: column
    justify-content: center
    z-index: 99 
    position: fixed
    bottom: 0
    top: 0
    left: 0
    right: 0
    background: #000
    .wrapper
      height: 0
      width: 100%
      padding-bottom: 100%
      background: #fff
      .swiper-img
        width: 100%
      .swiper-pagination
        color: #fff
        bottom: -1rem
</style>