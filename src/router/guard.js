import router from './index'
import store from '../store/index'
import { getToken, removeToken, removeUserName } from '../utils/app'
const whiteRouter = ['/login']
router.beforeEach((to, from, next) => {
    /**
     * to 进入的页面（下一个界面）
     * from 离开之前的页面（上一个页面）
     * next 
     */
    if (getToken()) {
        // console.log('存在');
        if (to.path === '/login') { //用户把地址改变为login，清除所有token、username
            removeToken()
            removeUserName()
            store.commit('login/SET_TOKEN', '')
            store.commit('login/SET_USERNAME', '')
        } else {
            //1.获取用户的角色
            //2.动态分配路由权限
            next()
        }
        next()
    } else {
        // console.log('不存在')
        if (whiteRouter.indexOf(to.path) !== -1) { //存在 //indexOf():判断数组中是否存在指定的某个对象，如果不存在则返回-1
            next()
        } else {
            next('/')
        }
    }
    /**
     * 1.直接进入index的时候，参数to 变成了 "/index",触发路由指向，就会跑beforeEach
     * 2.再一次路由指向了login，再次发生路由指向，就会跑beforeEach，参数的to变成了 "/login"
     * 3.白名单判断是否存在 则执行next(),因为没有参数，所以不会再次beforeEach
     */
})