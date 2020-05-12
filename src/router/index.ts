import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Index from '../views/visual/Index.vue'
import Buttons from '../views/visual/Buttons.vue'
import Color from '../views/visual/Color.vue'
import Container from '../views/visual/Container.vue'
import DataDisplay from '../views/visual/DataDisplay.vue'
import DataEntry from '../views/visual/DataEntry.vue'
import Feedback from '../views/visual/Feedback.vue'
import Font from '../views/visual/Font.vue'
import Navigation from '../views/visual/Navigation.vue'
import Grid from '../views/visual/Grid.vue'
import Init from '../views/visual/Init.vue'

import Dev from '../views/robot/Dev.vue'
import Pro from '../views/robot/Pro.vue'
import { AntdComponent } from 'ant-design-vue/types/component'
import RobotHome from '../views/robot/RobotHome.vue'


Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/',
        redirect: 'home',
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
        children: [
            {
                path: '/',
                redirect: 'visual',
            },
            {
                path: 'visual',
                component: Index,
                children: [
                    {
                        path: '/',
                        redirect: 'color',
                    },
                    {
                        path: 'color',
                        name: 'color',
                        meta: { title: '视觉规范-颜色' },
                        component: Color
                    },
                    {
                        path: 'buttons',
                        name: 'Buttons',
                        component: Buttons
                    },
                    {
                        path: 'container',
                        name: 'Container',
                        component: Container
                    },
                    {
                        path: 'dataDisplay',
                        name: 'DataDisplay',
                        component: DataDisplay
                    },
                    {
                        path: 'dataEntry',
                        name: 'DataEntry',
                        component: DataEntry
                    },
                    {
                        path: 'feedback',
                        name: 'Feedback',
                        component: Feedback
                    },
                    {
                        path: 'font',
                        name: 'Font',
                        component: Font
                    },
                    {
                        path: 'navigation',
                        name: 'Navigation',
                        component: Navigation
                    },
                    {
                        path: 'grid',
                        name: 'Grid',
                        component: Grid
                    },
                    {
                        path: 'init',
                        name: 'Init',
                        component: Init
                    },
                ]
            },
            {
                path: 'table',
                name: 'Table',
                component: () => import(/* webpackChunkName: "table" */ '../views/typical/Table.vue')
            },
            {
                path: 'form',
                name: 'Form',
                component: () => import(/* webpackChunkName: "form" */ '../views/typical/Form.vue')
            },
            {
                path: 'drawer',
                name: 'Drawer',
                component: () => import(/* webpackChunkName: "drawer" */ '../views/typical/Drawer.vue')
            },
            {
                path: 'data',
                name: 'Data',
                component: () => import(/* webpackChunkName: "data" */ '../views/typical/Data.vue')
            },
            {
                path: 'in-in',
                name: 'Test',
                component: () => import(/* webpackChunkName: "test" */ '../views/in-in/test.vue')
            },
            {
                path: 'dev',
                name: 'Dev',
                component: Dev
            },
            {
                path: 'pro',
                name: 'Pro',
                component: Pro
            },
            {
                path: 'controlPlatform',
                name: 'ControlPlatform',
                component: () => import(/* webpackChunkName: "test" */ '../views/platform/controlPlatform.vue'),
                children: [
                    {
                        path: '/',
                        redirect: 'platform-index',
                    },
                    {
                        path: 'platform-index',
                        name: 'platform-index',
                        component: () => import('../views/platform/platform-index.vue')
                    },
                    {
                        path: 'test-env-detail',
                        name: 'test-env-detail',
                        component: () => import('../views/platform/test-env-detail.vue')
                    },
                    {
                        path: 'production-env-detail',
                        name: 'production-env-detail',
                        component: () => import('../views/platform/production-env-detail.vue')
                    }
                ]
            },
            {
                path: 'testEnv',
                name: 'TestEnv',
                component: () => import(/* webpackChunkName: "test" */ '../views/robot/testEnv.vue')
            },
            {
                path: 'productionEnv',
                name: 'ProductionEnv',
                component: () => import(/* webpackChunkName: "test" */ '../views/robot/productionEnv.vue')
            },
            {
                path: 'robotHome',
                component: RobotHome,
                children: [
                    {
                        path: '/',
                        redirect: 'libraryList',
                    },
                    {
                        path: 'libraryList',
                        name: 'libraryList',
                        component: () => import(/* webpackChunkName: "test" */ '../views/robot/LibraryList.vue')
                    },
                    {
                        path: 'createQA',
                        name: 'createQA',
                        component: () => import(/* webpackChunkName: "test" */ '../views/robot/createQA.vue')
                    },
                    {
                        path: 'guideDialog',
                        name: 'guideDialog',
                        component: () => import(/* webpackChunkName: "test" */ '../views/robot/sample.vue')
                    },
                    {
                        path: 'sceneDialog',
                        name: 'sceneDialog',
                        component: () => import(/* webpackChunkName: "test" */ '../views/robot/sample.vue')
                    },
                    {
                        path: 'presetSkills',
                        name: 'presetSkills',
                        component: () => import(/* webpackChunkName: "test" */ '../views/robot/sample.vue')
                    },
                    {
                        path: 'extRecommendation',
                        name: 'extRecommendation',
                        component: () => import(/* webpackChunkName: "test" */ '../views/robot/sample.vue')
                    },
                    {
                        path: 'userLogs',
                        name: 'userLogs',
                        component: () => import(/* webpackChunkName: "test" */ '../views/robot/sample.vue')
                    },
                    {
                        path: 'dataStatistics',
                        name: 'dataStatistics',
                        component: () => import(/* webpackChunkName: "test" */ '../views/robot/sample.vue')
                    },
                    {
                        path: 'operationLog',
                        name: 'operationLog',
                        component: () => import(/* webpackChunkName: "test" */ '../views/robot/sample.vue')
                    },
                    {
                        path: 'dataAnnotation',
                        name: 'dataAnnotation',
                        component: () => import(/* webpackChunkName: "test" */ '../views/robot/sample.vue')
                    }
                ]
            },
            {
                path: 'qaLibrary',
                name: 'qaLibrary',
                component: () => import(/* webpackChunkName: "test" */ '../views/robot/qaLibrary.vue')
            },
            {
                path: 'presetskill-empty',
                name: 'Presetskill-empty',
                component: () => import(/* webpackChunkName: "test" */ '../views/pre-set_skill/presetskill-empty.vue')
            },
            {
                path: 'presetskill-added',
                name: 'Presetskill-added',
                component: () => import(/* webpackChunkName: "test" */ '../views/pre-set_skill/presetskill-added.vue')
            },
            {
                path: 'presetskill-production',
                name: 'Presetskill-production',
                component: () => import(/* webpackChunkName: "test" */ '../views/pre-set_skill/presetskill-production.vue')
            },
        ]
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/custom-order',
        name: 'custom-order',
        component: () => import(/* webpackChunkName: "test" */ '../views/in-in/custom-order.vue')
    },
    {
        path: '/order-result',
        name: 'custom-order',
        component: () => import(/* webpackChunkName: "test" */ '../views/in-in/order-result.vue')
    }

]

const router = new VueRouter({
    routes
})

export default router
