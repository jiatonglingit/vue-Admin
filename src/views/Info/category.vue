<template>
  <div id="category">
    <el-button type="danger" @click="addFirst">添加一级分类</el-button>
    <hr class="hr-e9e9e9" />
    <div>
      <el-row :gutter="30">
        <el-col :span="8">
          <div class="category-wrap">
            <div class="category" v-for="firstItem in category.item" :key="firstItem.id">
              <!--一级分类-->
              <h4>
                <svg-icon icon-class="plus"></svg-icon>
                {{firstItem.category_name}}
                <div class="button-group">
                  <el-button size="mini" type="danger" round>编辑</el-button>
                  <el-button size="mini" type="success" round>添加子级</el-button>
                  <el-button size="mini" round @click="deleteCategory(firstItem.id)">删除</el-button>
                </div>
              </h4>
              <!--子级分类-->
              <ul>
                <li v-if="firstItem.children">
                  国内
                  <div class="button-group">
                    <el-button size="mini" type="danger" round>编辑</el-button>
                    <el-button size="mini" round>删除</el-button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </el-col>
        <el-col :span="16">
          <h4 class="menu-title">一级分类编辑</h4>
          <el-form label-width="142px" class="from-wrap" ref="categoryFrom">
            <el-form-item label="一级分类名称：" v-if="category_first_input">
              <el-input v-model.trim="form.categoryName" @blur="onBlur"></el-input>
            </el-form-item>
            <el-form-item label="二级分类名称：" v-if="category_children_input">
              <el-input v-model.trim="form.setCategoryName"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="danger" @click="submit" :loading="button_loading">确定</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import { global } from "@/utils/global";
import {
  AddFirstCategory,
  getInfoCategoryAll,
  DelateCategoryAll
} from "@/api/news";
import { reactive, ref, onMounted } from "@vue/composition-api";
export default {
  setup(props, { root }) {
    const { confirm } = global();
    //属性
    const category_first_input = ref(true);
    const category_children_input = ref(true);
    const button_loading = ref(false);
    const deleteId = ref("");
    //对象
    const form = reactive({
      categoryName: "",
      setCategoryName: ""
    });
    const category = reactive({
      item: []
    });
    //methods
    const submit = () => {
      if (form.categoryName !== "") {
        AddFirstCategory({ categoryName: form.categoryName })
          .then(response => {
            button_loading.value = true;
            // console.log(response.data);
            let data = response.data;
            if (data.resCode === 0) {
              root.$message({
                message: data.message,
                type: "success"
              });
              category.item.push(data.data);
            }
            button_loading.value = false;
          })
          .catch(error => {
            root.$message({
              message: data.message,
              type: "error"
            });
            button_loading.value = false;
          });
      } else {
        root.$message({
          message: "输入内容不能为空！",
          type: "error"
        });
        button_loading.value = true;
      }
    };
    const addFirst = () => {
      category_first_input.value = true;
      category_children_input.value = false;
    };
    const onBlur = () => {
      if (form.categoryName == "") {
        button_loading.value = false;
      }
    };
    const deleteCategory = categoryId => {
      deleteId.value = categoryId;
      confirm({
        content: "确定删除此信息",
        tip: "提示",
        type: "success",
        fn: () => {
          DelateCategoryAll({ categoryId: deleteId.value })
            .then(response => {
              let newData = category.item.filter(
                item => item.id != deleteId.value
              );
              console.log(newData);
              category.item = newData;
              // console.log(response);
              if (data.resCode === 0) {
                root.$message({
                  message: data.message,
                  type: "success"
                });
              }
            })
            .catch(error => {});
        },
        id: "111"
      });
    };
    const deleteCategoryById = () => {
      // DelateCategoryAll({ categoryId: deleteId.value })
      //   .then(response => {
      //     console.log(response);
      //     if (data.resCode === 0) {
      //       root.$message({
      //         message: data.message,
      //         type: "success"
      //       });
      //     }
      //   })
      //   .catch(error => {});
    };

    /**
     * 生命周期
     */
    // 挂载完成时执行，（页面DOM元素完成时，实例完成）
    onMounted(() => {
      getInfoCategoryAll({})
        .then(response => {
          // console.log(response.data.data);
          let data = response.data.data;
          category.item = data;
        })
        .catch(error => {});
    });
    return {
      deleteId,
      category_first_input,
      category_children_input,
      deleteCategoryById,
      button_loading,
      category,
      form,
      submit,
      onBlur,
      deleteCategory,
      addFirst
    };
  }
};
</script>

<style lang="scss" scoped>
@import url("../../styles/elementUi.scss");
.category-wrap {
  div:first-child {
    &:before {
      top: 20px;
    }
  }
  div:last-child {
    &:before {
      bottom: 21px;
    }
  }
}
.menu-title {
  line-height: 44px;
  padding-left: 22px;
  background-color: #f3f3f3;
}
.category {
  position: relative;
  line-height: 44px;
  cursor: pointer;
  &:before {
    content: "";
    position: absolute;
    left: 22px;
    top: 0;
    bottom: 0;
    width: 32px;
    border-left: 1px dotted #000;
  }
  h4 {
    position: relative;
    padding-left: 40px;
  }
  svg {
    position: absolute;
    left: 14px;
    top: 15px;
    background-color: #fff;
    font-size: 17px;
  }
  li {
    position: relative;
    padding-left: 36px;
    margin-left: 24px;
    &:before {
      content: "";
      position: absolute;
      left: 0;
      top: 22px;
      width: 32px;
      border-bottom: 1px dotted #000;
    }
  }
  li,
  h4 {
    @include webkit(transition, all 0.5s ease 0s);
    &:hover {
      background-color: #eeeaea;
      .button-group {
        display: block;
      }
    }
  }
}
.button-group {
  display: none;
  position: absolute;
  z-index: 2;
  right: 11px;
  top: -1px;
  button {
    font-size: 12px;
  }
}
.from-wrap {
  width: 410px;
  padding-top: 26px;
}
.hr-e9e9e9 {
  width: calc(100% + 60px);
  margin-left: -30px;
  border: none;
  margin-top: 30px;
  margin-bottom: 30px;
  border-bottom: 1px solid #e9e9e9;
}
</style>
