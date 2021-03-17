import Row from './row';
import Col from './col';
import Container from './container';
import Main from './main';
import Header from './header';
import Footer from './footer';
import Aside from './aside';
import Icon from './icon';

const components = [Row, Col, Container, Main, Header, Footer, Aside, Icon];

const install = (Vue) => {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};


export default {
  install,
  ...components,
};

export {
  install,
  Row,
  Col,
  Container,
  Main,
  Header,
  Footer,
  Aside,
  Icon,
};
