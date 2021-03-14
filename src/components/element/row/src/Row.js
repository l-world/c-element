export default {
  name: 'ElRow',
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
    },
    tag:{
      type:String,
      default:'div'
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
  render(h){
    return h(this.tag,{
      class:[
        'el-row',
        {'el-row--flex':this.type === 'flex'},
        this.justify !== 'start' && `is-justify-${this.justify}`,
        this.align !== 'top' && `is-align-${this.align}`
      ],
      style:this.style
    },this.$slots.default)
  }
}