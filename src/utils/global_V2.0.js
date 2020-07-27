// import { MessageBox } from 'element-ui';

// import global from '@/utils/global.js' //全局使用的弹窗
//  Vue.use(global);
// 
// export default {
//     install(Vue, options) {
//         Vue.prototype.confirm = (params) => {
//             console.log(options)
//             console.log(params)
//             MessageBox.confirm(params.content, params.tip || "提示", {
//                     cancelButtonText: "取消",
//                     confirmButtonText: "确定",
//                     type: params.type || "warning",
//                     center: true
//                 })
//                 .then(() => {
//                     MessageBox.$message({
//                         type: "success",
//                         message: "删除成功!"
//                     });
//                 })
//                 .catch(() => {
//                     MessageBox.$message({
//                         type: "info",
//                         message: "已取消删除"
//                     });
//                 });
//         }
//     }
// }
/**
 *  export default{
 *  MessageBox.confirm(params.content, params.tip || "提示", {
                    cancelButtonText: "取消",
                    confirmButtonText: "确定",
                    type: params.type || "warning",
                    center: true
                })
                .then(() => {
                    MessageBox.$message({
                        type: "success",
                        message: "删除成功!"
                    });
                })
                .catch(() => {
                    MessageBox.$message({
                        type: "info",
                        message: "已取消删除"
                    });
                });
         }
 */