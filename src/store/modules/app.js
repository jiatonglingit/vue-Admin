const state = {
    isCollapse: false || JSON.parse(sessionStorage.getItem('isCollapse'))
}
const getters = {
        isCollapse: state => state.isCollapse
    }
    //同步方法
const mutations = {
        SET_COLLAPSE(state) {
            state.isCollapse = !state.isCollapse
            sessionStorage.setItem('isCollapse', JSON.stringify(state.isCollapse))
        }
    }
    //异步回调方法
const actions = {}
export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions

}