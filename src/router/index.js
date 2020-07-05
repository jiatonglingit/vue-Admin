import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

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
        meta: {
            name: '控制台'
        },
        component: () =>
            import ("../views/Layout/index.vue"),
        children: [{
            path: "/index",
            name: "Index",
            meta: {
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
            name: '信息管理'
        },
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/Layout/index.vue"),
        children: [{
                path: "/infoIndex",
                name: "infoIndex",
                meta: {
                    name: '信息列表'
                },
                component: () =>
                    import ( /* webpackChunkName: "about" */ "../views/Info/index.vue")
            },
            {
                path: "/infoCategory",
                name: "infoCategory",
                meta: {
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
            name: '用户管理'
        },
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/Layout/index.vue"),
        children: [{
            path: "/userIndex",
            name: "UserIndex",
            meta: {
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