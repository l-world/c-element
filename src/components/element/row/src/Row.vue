<template>
  <div 
    :class="[
      'el-row',
      {'el-row--flex':this.type === 'flex'},
      this.justify !== 'start' && `is-justify-${this.justify}`,
      this.align !== 'top' && `is-align-${this.align}`
    ]" 
    :style="style"
  >
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
      Number:String,
      default:'start',
      validator:val =>{
        return ['start','end','center','space-around','space-between'].includes(val)

      }
    },
    align:{
      Number:String,
      default:'top',
      validator: val => {
        return ['top','middle','bottom'].includes(val)
      }
    }
  },
  computed: {
    style() {
      const style = {};
      if (this.gutter) {
        style.marginLeft = `${-this.gutter / 2}px`;
        style.marginRight = style.marginLeft;
      }
      return style;
    },
  },
};
</script>

<style lang="scss" scoped>
.el-row{
  &::after,
  &::before{
    display: block;
    content: "";
  }
  &::after{
     clear: both;
  }
  &--flex{
    display: flex;
    &::after,
    &::before{
      display: none;
    }
    &.is-justify-end{
      justify-content: flex-end;
    }
    &.is-justify-center{
      justify-content: center;
    }
    &.is-justify-space-around{
      justify-content: space-around;
    }
    &.is-justify-space-between{
      justify-content: space-between;
    }
    &.is-align-middle{
      align-items:center
    }
    &.is-align-bottom{
      align-items:flex-end
    }
  }
}
</style>
