/* Automatically generated by './build/bin/build-entry.js' */
import Dialog from '../packages/dialog/index.js';
import Input from '../packages/input/index.js';
import Button from '../packages/button/index.js';
import Popover from '../packages/popover/index.js';
import Form from '../packages/form/index.js';
import FormItem from '../packages/form-item/index.js';
import Alert from '../packages/alert/index.js';
import locale from 'element-ui/src/locale';
// import CollapseTransition from 'element-ui/src/transitions/collapse-transition';

const components = [
  Dialog,
  Input,
  Button,
  Popover,
  Form,
  FormItem,
  Alert,
  // CollapseTransition
];

const install = function(app, opts = {}) {
  // locale.use(opts.locale);
  // locale.i18n(opts.i18n);

  components.forEach(component => {
    app.component(component.name, component);
  });

  // app.use(InfiniteScroll);
  // app.use(Loading.directive);

  app.config.globalProperties.$ELEMENT = {
    size: opts.size || '',
    zIndex: opts.zIndex || 2000
  };

  // app.config.globalProperties.$loading = Loading.service;
  // app.config.globalProperties.$msgbox = MessageBox;
  // app.config.globalProperties.$alert = MessageBox.alert;
  // app.config.globalProperties.$confirm = MessageBox.confirm;
  // app.config.globalProperties.$prompt = MessageBox.prompt;
  // app.config.globalProperties.$notify = Notification;
  // app.config.globalProperties.$message = Message;
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '2.13.3',
  locale: locale.use,
  i18n: locale.i18n,
  install,
  //CollapseTransition,
  // Loading,
  Dialog,
  Input,
  Button,
  Popover,
  Form,
  FormItem,
  Alert
};
