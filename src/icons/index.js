import Vue from "vue";
import SvgIcon from './SvgIcon.vue'
Vue.component('svg-icon', SvgIcon);


/**
require.context(‘./svg’, false, /\.svg$/) 参数说明：
第一个：目录
第二个：是否遍历子级目录
第三个：定义遍历文件规则
 */
const req = require.context('./svg', false, /\.svg$/) //读取结尾为.svg的文件
const requireAll = requireContext => {
    // console.log(requireContext.keys()) 
    return requireContext.keys().map(requireContext)
}
requireAll(req)