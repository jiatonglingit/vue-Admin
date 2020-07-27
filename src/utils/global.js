import { MessageBox, Message } from 'element-ui';
import { ref } from '@vue/composition-api'
export function global() {
    const str = ref('')
    const confirm = (params) => {
        MessageBox.confirm(params.content, params.tip || "提示", {
                cancelButtonText: "取消",
                confirmButtonText: "确定",
                type: params.type || "warning",
                center: true
            })
            .then(() => {
                params.fn && params.fn(params.id || '')
                Message({
                    type: "success",
                    message: "删除成功!"
                });
                return
            })
            .catch(() => {
                params.catchFn && params.catchFn(params.id || '')
                Message({
                    type: "info",
                    message: "已取消删除"
                });
                return
            });
    }
    return {
        str,
        confirm

    }
}