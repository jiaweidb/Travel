<template>
    <div class="list">
        <ul>
            <li class="item">A</li>
            <li class="item">B</li>
            <li class="item">C</li>
            <li class="item">D</li>
            <li class="item">E</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'CityAlphabet',
    
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .list
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