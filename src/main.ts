import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title
    } else {
        document.title = '智能交互中心';
    }
    next()
})

import {
    Button,
    Input,
    Radio,
    notification,
    message,
    Row,
    Col,
    Tooltip,
    Dropdown,
    Menu,
    Table,
    Drawer,
    Form,
    Switch,
    Icon,
    Pagination,
    Divider,
    Select,
    DatePicker
} from 'ant-design-vue';
Vue.component('jt-button', Button);
Vue.component('jt-input', Input);
Vue.component('jt-radio', Radio);
Vue.component('jt-input-search', Input.Search);
Vue.component('jt-input-group', Input.Group);
Vue.component('jt-input-textarea', Input.TextArea);
Vue.component('jt-row', Row);
Vue.component('jt-col', Col);
Vue.component('jt-tooltip', Tooltip);
Vue.component('jt-drawer', Drawer);
Vue.component('jt-switch', Switch);
Vue.component('jt-dropdown', Dropdown);
Vue.component('jt-menu', Menu);
Vue.component('jt-sub-menu', Menu.SubMenu);
Vue.component('jt-menu-item', Menu.Item);
Vue.component('jt-table', Table);
Vue.component('jt-form', Form);
Vue.component('jt-icon', Icon);
Vue.component('jt-pagination', Pagination);
Vue.component('jt-divider', Divider);
Vue.component('jt-select', Select);
Vue.component('jt-select-option', Select.Option);
Vue.component('jt-range-picker', DatePicker.RangePicker);
Vue.prototype.$notification = notification;
Vue.prototype.$message = message;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
