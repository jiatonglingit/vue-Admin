import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
import Layout from '@/views/Layout/index'
const routes = [{
        path: "/",
        redirect: "login",
        hidden: true,
        meta: {
            name: '主页'
        }
    },
    {
        path: "/login",
        name: "Login",
        hidden: true,
        meta: {
            name: '登录'
        },
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/Login/index.vue")
    },
    {
        path: "/console",
        name: "Console",
        redirect: "index",
        meta: {
            icon: 'console',
            name: '控制台'
        },
        component: Layout,
        children: [{
            path: "/index",
            name: "Index",
            meta: {
                icon: 'index',
                name: '首页'
            },
            component: () =>
                import ( /* webpackChunkName: "about" */ "../views/Console/index.vue")
        }]
    },
    {
        path: "/info",
        name: "Info",
        meta: {
            icon: 'news',
            name: '信息管理'
        },
        component: Layout,
        children: [{
                path: "/infoIndex",
                name: "infoIndex",
                meta: {
                    icon: 'infoList',
                    name: '信息列表'
                },
                component: () =>
                    import ( /* webpackChunkName: "about" */ "../views/Info/index.vue")
            },
            {
                path: "/infoCategory",
                name: "infoCategory",
                meta: {
                    icon: 'infoCategory',
                    name: '信息分类'
                },
                component: () =>
                    import ( /* webpackChunkName: "about" */ "../views/Info/category.vue")
            }
        ]
    },
    {
        path: "/user",
        name: "User",
        meta: {
            icon: 'user',
            name: '用户管理'
        },
        component: Layout,
        children: [{
            path: "/userIndex",
            name: "UserIndex",
            meta: {
                icon: 'userList',
                name: '用户列表'
            },
            component: () =>
                import ( /* webpackChunkName: "about" */ "../views/User/index.vue")
        }]
    }
];

const router = new VueRouter({
    routes
});

export default router;