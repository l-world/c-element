import ElContainer from './src/container.vue';

ElContainer.install = (Vue) => {
  Vue.component(ElContainer.name, ElContainer);
};

export default ElContainer;
