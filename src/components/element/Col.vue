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
    offset: {
      type: Number,
      default: 0,
    },
    push: {
      type: Number,
      default: 0,
    },
    pull: {
      type: Number,
      default: 0,
    },
    xs:[Number,Object],
    sm:[Number,Object],
    md:[Number,Object],
    lg:[Number,Object],
    xl:[Number,Object],
  },
  computed: {
    gutter() {
      let parent = this.$parent;
      while (parent && parent.$options.name !== 'el-row') {
        parent = parent.$parent;
      }
      return parent ? parent.gutter : 0;
    },
    style() {
      const style = {};
      if (this.gutter) {
        style.paddingLeft = `${this.gutter / 2}px`;
        style.paddingRight = style.paddingLeft;
      }
      return style;
    },
    classList() {
      const classList = [];
      ['span', 'offset', 'pull', 'push'].forEach((prop) => {
        if (this[prop]) {
          classList.push(prop === 'span' ? `el-col-${this[prop]}` : `el-col-${prop}-${this[prop]}`);
        }
      });
      ['xs','sm','md','lg','xl'].forEach( size => {
        if(typeof this[size] === 'number'){
          classList.push(`el-col-${size}-${this[size]}`)
        }
        else if(typeof this[size] === 'object'){
          const props = this[size]
          Object.keys(props).forEach( prop => {
            classList.push(prop === 'span' ? `el-col-${size}-${props[prop]}` : `el-col-${size}-${prop}-${props[prop]}`)
          })
        }
      })
      return classList;
    },
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
@media only screen and (max-width: 768px) {
  @for $i from 0 through 24{
    .el-col-xs-#{$i}{
      width: $i / 24 * 100%;
    }
    .el-col-offset-xs-#{$i}{
      margin-left: $i / 24 * 100%;
    }
    .el-col-push-xs-#{$i}{
      position: relative;
      left: $i / 24 * 100%;
    }j
    .el-col-pull-xs-#{$i}{
      position: relative;
      right: $i / 24 * 100%;
    }
  }
}
@media only screen and (min-width: 768px) {
  @for $i from 0 through 24{
    .el-col-sm-#{$i}{
      width: $i / 24 * 100%;
    }
    .el-col-offset-sm-#{$i}{
      margin-left: $i / 24 * 100%;
    }
    .el-col-push-sm-#{$i}{
      position: relative;
      left: $i / 24 * 100%;
    }j
    .el-col-pull-sm-#{$i}{
      position: relative;
      right: $i / 24 * 100%;
    }
  }
}

@media only screen and (min-width: 992px) {
  @for $i from 0 through 24{
    .el-col-md-#{$i}{
      width: $i / 24 * 100%;
    }
    .el-col-offset-md-#{$i}{
      margin-left: $i / 24 * 100%;
    }
    .el-col-push-md-#{$i}{
      position: relative;
      left: $i / 24 * 100%;
    }j
    .el-col-pull-md-#{$i}{
      position: relative;
      right: $i / 24 * 100%;
    }
  }
}

@media only screen and (min-width: 992px) {
  @for $i from 0 through 24{
    .el-col-md-#{$i}{
      width: $i / 24 * 100%;
    }
    .el-col-offset-md-#{$i}{
      margin-left: $i / 24 * 100%;
    }
    .el-col-push-md-#{$i}{
      position: relative;
      left: $i / 24 * 100%;
    }
    .el-col-pull-md-#{$i}{
      position: relative;
      right: $i / 24 * 100%;
    }
  }
}

@media only screen and (min-width: 1200px) {
  @for $i from 0 through 24{
    .el-col-lg-#{$i}{
      width: $i / 24 * 100%;
    }
    .el-col-offset-lg-#{$i}{
      margin-left: $i / 24 * 100%;
    }
    .el-col-push-lg-#{$i}{
      position: relative;
      left: $i / 24 * 100%;
    }
    .el-col-pull-lg-#{$i}{
      position: relative;
      right: $i / 24 * 100%;
    }
  }
}

@media only screen and (min-width: 1920px) {
  @for $i from 0 through 24{
    .el-col-xl-#{$i}{
      width: $i / 24 * 100%;
    }
    .el-col-offset-xl-#{$i}{
      margin-left: $i / 24 * 100%;
    }
    .el-col-push-xl-#{$i}{
      position: relative;
      left: $i / 24 * 100%;
    }
    .el-col-pull-xl-#{$i}{
      position: relative;
      right: $i / 24 * 100%;
    }
  }
}

</style>
