import cookie from 'cookie_js'

const token_name = 'admin_token'
const user_name = 'user_name'

export function getToken() {
    return cookie.get(token_name)
}
export function setToken(token) {
    return cookie.set(token_name, token)
}
export function getUserName() {
    return cookie.get(user_name)
}
export function setUserName(token) {
    return cookie.set(user_name, token)
}
export function removeToken() {
    return cookie.remove(token_name)
}
export function removeUserName() {
    return cookie.remove(user_name)
}