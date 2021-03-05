<template>
  <div class="el-row" :style="style">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'el-row',
  props: {
    gutter: {
      type: Number,
      default: 0,
    },
  },
  computed:{
    style(){
      let style = {}
      if(this.gutter){
        style.marginLeft = -this.gutter / 2 + 'px'
        style.marginRight = style.marginLeft
      }
      return style
    }
  }
};
</script>

<style>

</style>
