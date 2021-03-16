<template>
  <div :class="[
          'el-container',
          {'is-vertical':isVertical}
      ]">
      <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ElContainer',
  props: {
    diretion: {
      type: String,
      validator: val => ['horizontal', 'vertical'].includes(val),
    },
  },
  computed: {
    isVertical() {
      if (this.diretion === 'vertical') {
        return true;
      }
      if (this.diretion === 'horizontal') {
        return false;
      }

      return this.$slots && this.$slots.default
        ? this.$slots.default.some((vnode) => {
          const tag = vnode.componentOptions && vnode.componentOptions.tag;
          return tag === 'el-header' || tag === 'el-footer';
        })
        : false;
    },
  },
};
</script>

<style>

</style>
