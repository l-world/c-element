<template>
  <div 
    :class="['el-col',classList]"
    :style="style"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'el-col',
  props: {
    span: {
      type: Number,
      default: 24,
    },
    offset:{
      type:Number,
      default:0
    },
    push:{
      type:Number,
      default:0
    },
    pull:{
      type:Number,
      default:0
    }
  },
  computed: {
    gutter() {
      let parent = this.$parent;
      while(parent && parent.$options.name !== "el-row"){
        parent = parent.$parent
      }
      return parent ? parent.gutter : 0;
    },
    style(){
      let style = {}
      if(this.gutter){
        style.paddingLeft = this.gutter / 2 + 'px';
        style.paddingRight = style.paddingLeft
      }
      return style
    },
    classList(){
      let classList = [];
      ['span','offset','pull','push'].forEach((prop) => {
        if(this[prop]){
          classList.push( prop === 'span' ? `el-col-${prop}` : `el-col-${prop}-${this[prop]}` )
        }
      })
      return classList;
    }
  },
};
</script>

<style lang="scss" scoped>
.el-col{
  float: left;
  box-sizing: border-box;
}
@for $i from 0 through 24{
  .el-col-#{$i}{
    width: $i / 24 * 100%;
  }
  .el-col-offset-#{$i}{
    margin-left: $i / 24 * 100%;
  }
  .el-col-push-#{$i}{
    position: relative;
    left: $i / 24 * 100%;
  }j
  .el-col-pull-#{$i}{
    position: relative;
    right: $i / 24 * 100%;
  }
}

</style>
