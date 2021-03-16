import Col from '@element/col';
import Row from '@element/row';
import { shallowMount } from '@vue/test-utils';

describe('Col.vue', () => {
  let wrapper;
  let colEle;
  beforeEach(() => {
    wrapper = shallowMount(Col);
    colEle = wrapper.vm.$el;
  });

  it('create', () => {
    expect(colEle.classList).toContain('el-col');
  });

  it('span', () => {
    wrapper.setProps({ span: 12 });
    expect(colEle.classList).toContain('el-col-12');
  });

  it('offset', () => {
    wrapper.setProps({ offset: 20 });
    expect(colEle.classList).toContain('el-col-offset-20');
  });

  it('push', () => {
    wrapper.setProps({ push: 20 });
    expect(colEle.classList).toContain('el-col-push-20');
  });

  it('pull', () => {
    wrapper.setProps({ pull: 20 });
    expect(colEle.classList).toContain('el-col-pull-20');
  });

  it('responsive', () => {
    wrapper.setProps({
      xs: { span: 4, offset: 4 },
      md: 8,
      lg: { span: 6, offset: 6 },
    });
    expect(colEle.classList).toContain('el-col-xs-4');
    expect(colEle.classList).toContain('el-col-xs-offset-4');
  });

  it('gutter', () => {
    const wrappers = shallowMount(Col, {
      parentComponent: Row,
    });

    expect(wrappers.vm.$parent.$options.name).toBe('ElRow');
    wrappers.vm.$parent.gutter = 20;
    expect(colEle.style.paddingLeft).toBe('');
    expect(colEle.style.paddingRight).toBe('');
  });
});
