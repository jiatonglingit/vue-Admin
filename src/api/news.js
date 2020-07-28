import service from '@/utils/request.js'

/**
 * 新增一级分类
 */
export function AddFirstCategory(data) {
    return service.request({
        method: 'post',
        url: '/news/addFirstCategory/',
        data
    })
}
/**
 * 获取新闻
 */
export function getInfoCategoryAll(data) {
    return service.request({
        method: 'post',
        url: '/news/getCategoryAll/',
        data
    })
}
/**
 * 编辑
 */
/**
 * 删除
 */
export function DelateCategoryAll(data) {
    return service.request({
        method: 'post',
        url: '/news/deleteCategory/',
        data
    })
}
/**
 * 修改分类
 */
export function EditCategory(data) {
    return service.request({
        method: "post",
        url: "/news/editCategory/",
        data
    })
}