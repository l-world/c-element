import ElMain from './src/main.vue';

ElMain.install = (Vue) => {
  Vue.component(ElMain.name, ElMain);
};

export default ElMain;
