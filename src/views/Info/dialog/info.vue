<template>
  <div id="info">
    <el-dialog title="新增" :visible.sync="dialog_info_flag" width="576px" @close="closeDialog()">
      <el-form :model="form">
        <el-form-item label="类型" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="标题" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off" placeholder="请输入标题"></el-input>
        </el-form-item>
        <el-form-item label="概况" :label-width="formLabelWidth">
          <el-input type="textarea" v-model="form.name" autocomplete="off" placeholder="请输入内容"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialog_info_flag = false">取 消</el-button>
        <el-button type="danger" @click="dialog_info_flag = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { reactive, ref, watchEffect } from "@vue/composition-api";
export default {
  name: "info",
  props: {
    //单项数据流 父级->子级 不能反向修改
    flag: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { emit }) {
    //属性
    const dialog_info_flag = ref(false);
    const formLabelWidth = ref("70px");
    const dialogFormVisible = ref(false);
    //对象
    const form = reactive({
      name: "",
      region: "",
      date1: "",
      date2: "",
      delivery: false,
      type: [],
      resource: "",
      desc: ""
    });
    //watch
    watchEffect(() => (dialog_info_flag.value = props.flag));
    //方法
    const closeDialog = () => {
      /**
       * 两种方法
       * 回调时需要逻辑处理的时候 就不能使用修饰器 反之则可以使用
       */
      //第一种方法
      dialog_info_flag.value = false;
      // this.$emit("close", false);
      //第二种方法
      //父组件里关闭方法删掉 在父组件向子组件传递数据（props)的时候加上 .sync修饰符
      emit("update:flag", false);
    };
    return {
      dialog_info_flag,
      formLabelWidth,
      dialogFormVisible,
      form,
      closeDialog
    };
  }
};
// },
// data() {
//   return {
//     dialog_info_flag: true,
//     form: {
//       name: "",
//       region: "",
//       date1: "",
//       date2: "",
//       delivery: false,
//       type: [],
//       resource: "",
//       desc: ""
//     },
//     formLabelWidth: "70px"
//   };
// },
// props: {
//   //单项数据流 父级->子级 不能反向修改
//   flag: {
//     type: Boolean,
//     default: false
//   }
// },
// watch: {
//   flag: {
//     handler(newValue, oldValue) {
//       this.dialog_info_flag = newValue;
//     }
//   }
// },
// methods: {
//   closeDialog() {
//     /**
//      * 两种方法
//      * 回调时需要逻辑处理的时候 就不能使用修饰器 反之则可以使用
//      */
//     //第一种方法
//     this.dialog_info_flag = false;
//     // this.$emit("close", false);
//     //第二种方法
//     //父组件里关闭方法删掉 在父组件向子组件传递数据（props)的时候加上 .sync修饰符
//     this.$emit("update:flag", false);
//   }
//    }
// };
</script>
<style lang="scss" scoped>
@import url("../../../styles/elementUi.scss");
</style> 