import { Login, GetSms } from "@/api/login";
import { setToken, setUserName, getUserName, removeToken, removeUserName } from '@/utils/app'
const state = {
    token: '',
    username: getUserName() || ''
}
const getters = {
    username: state => state.username

}

const mutations = { // 必须的  同步 没有回调处理事情
    SET_TOKEN(state, value) {
        state.token = value
    },
    SET_USERNAME(state, value) {
        state.username = value
    }
}

const actions = { // 可以回调处理事情 
    login({ commit }, requestData) {
        return new Promise((resolve, reject) => {
            Login(requestData).then((response) => {
                // console.log(response.data.data)
                let data = response.data.data
                commit('SET_TOKEN', data.token)
                commit('SET_USERNAME', data.username)
                setToken(data.token)
                setUserName(data.username)
                resolve(response)
            }).catch(error => {
                reject(error)
            })
        })
    },
    getSms(content, requestData) {
        return new Promise((resolve, reject) => {
            GetSms(requestData).then((response) => {
                resolve(response)
            }).catch((error) => {
                reject(error)
            })
        })
    },
    exit({ commit }) {
        return new Promise((resolve, reject) => {
            removeToken()
            removeUserName()
            commit('SET_TOKEN', '')
            commit('SET_USERNAME', '')
            resolve()
        })
    }
}
export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}