<template>
    <div class="header-input">
        <input  class="input" placeholder="请输入城市名或拼音"/>
    </div>
</template>

<script>
export default {
    name: 'CitySearch',
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
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

</style>