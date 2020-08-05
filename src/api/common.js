import { GetCategory } from "@/api/news";
import { reactive } from "@vue/composition-api";

export function common() {
    const categoryItem = reactive({
            item: []
        })
        /**
         * 获取分类
         */
    const getInfoCategory = () => {
        GetCategory({}).then(response => {
                // console.log(response.data.data);
                let data = response.data.data.data;
                categoryItem.item = data;
            })
            .catch(error => {});
    }

    return {
        getInfoCategory,
        categoryItem
    }
}