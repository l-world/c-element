<template>
  <div :class="
          'el-row'" 
        :style="style">
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
    type:String,
    justify:{
      type:String,
      default:'start',
      validator: val => {
        return ['start','end','center','space-around','space-between'].includes(val)
      }
    },
    align:{
      type:String,
      default:'top',
      validator: val => {
        return ['top','middle','bottom'].includes(val)
      }
    }
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

<style lang="scss" scoped>

.el-row{
  &::after,
  &::before{
    display: block;
    content:''
  }
  &::after{
    clear: both;
  }
  & .el-row--flex{
    display: flex;
  }
}

</style>
