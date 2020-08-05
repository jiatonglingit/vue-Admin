import { GetCategory } from "@/api/news";

//异步回调方法
const actions = {
    getInfoCategory(content, requestData) {
        return new Promise((resolve, reject) => {
            GetCategory({}).then((response) => {
                resolve(response.data.data.data)
            }).catch((error) => {
                reject(error)
            })
        })
    }
}
export default {
    namespaced: true,
    actions

}