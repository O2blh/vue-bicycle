import Vue from 'vue'
import Router from 'vue-router'
import login from '@/view/login'
import home from '@/view/home'
import manage from '@/view/manage'
import users from '@/components/manage/users'
import introduction from '@/view/introduction'
import bicycle from '@/components/manage/bicycle'
import bikeDetail from '@/components/manage/bikeDetail'
import trip from '@/components/manage/trip'
import statistics from '@/view/statistics'
import sexStatistics from '@/components/statistics/sexStatistics'
import areaStatistics from '@/components/statistics/areaStatistics'
import ageStatistics from '@/components/statistics/ageStatistics'


Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            name: "login",
            component: login
        },
        {
            path: "/home",
            name: "home",
            component: home,
            children: [{
                    path: '',
                    name: "introduction",
                    component: introduction
                },
                {
                    path: 'introduction',
                    name: 'introduction',
                    component: introduction
                },
                {
                    path: 'manage',
                    name: 'manage',
                    component: manage,
                    children: [{
                            path: "",
                            name: "users",
                            meta: { parentName: 'manage' },
                            component: users
                        }, {
                            path: "users",
                            name: "users",
                            meta: { parentName: 'manage' },
                            component: users
                        },
                        {
                            path: "bicycle",
                            name: "bicycle",
                            meta: { parentName: 'manage' },
                            component: bicycle
                        },
                        {
                            path: "trip",
                            name: "trip",
                            meta: { parentName: 'manage' },
                            component: trip
                        },
                        {
                            path: "bikeDetail/:Id",
                            name: "bikeDetail",
                            meta: { parentName: 'manage' },
                            component: bikeDetail
                        }
                    ]
                },
                {
                    path: 'statistics',
                    name: 'statistics',
                    component: statistics,
                    children: [{
                        path: "",
                        name: "sexStatistics",
                        meta: { parentName: 'statistics' },
                        component: sexStatistics
                    }, {
                        path: "sexStatistics",
                        name: "sexStatistics",
                        meta: { parentName: 'statistics' },
                        component: sexStatistics
                    }, {
                        path: "areaStatistics",
                        name: "areaStatistics",
                        meta: { parentName: 'statistics' },
                        component: areaStatistics
                    }, {
                        path: "ageStatistics",
                        name: "ageStatistics",
                        meta: { parentName: 'statistics' },
                        component: ageStatistics
                    }]
                }

            ]

        }

    ]
})