<template>
  <div id="info">
    <el-row :gutter="14">
      <el-col :span="4">
        <div class="label-wrap category">
          <label for>分类：</label>
          <div class="warp-content">
            <el-select v-model="category_value" placeholder="请选择" style="width: 100%;">
              <el-option
                v-for="item in options.category"
                :key="item.id"
                :value="item.category_name"
              ></el-option>
            </el-select>
          </div>
        </div>
      </el-col>
      <el-col :span="7">
        <div class="label-wrap date">
          <label for>日期：&nbsp;&nbsp;</label>
          <div class="warp-content">
            <el-date-picker
              v-model="date_value"
              style="width: 100%;"
              type="datetimerange"
              format="yyyy 年 MM 月 dd 日"
              value-format="yyyy-MM-dd HH:mm:ss"
              align="right"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :default-time="['12:00:00', '08:00:00']"
            ></el-date-picker>
          </div>
        </div>
      </el-col>
      <el-col :span="3">
        <div class="label-wrap key-work">
          <label>关键字：&nbsp;&nbsp;</label>
          <div class="warp-content">
            <el-select v-model="search_key" style="width: 100%;">
              <el-option
                v-for="item in search_option"
                :key="item.value"
                :value="item.value"
                :label="item.label"
              ></el-option>
            </el-select>
          </div>
        </div>
      </el-col>
      <el-col :span="3">
        <el-input placeholder="请输入内容" style="width: 100%;" v-model="search_keyWork"></el-input>
      </el-col>
      <el-col :span="2" class="button-bottom">
        <el-button type="danger" style="width: 100%;">搜索</el-button>
      </el-col>
      <el-col :span="3">&nbsp;</el-col>
      <el-col :span="2" class="pull-right button-bottom">
        <el-button type="danger" style="width: 100%;" @click="dialog_info = true">新增</el-button>
      </el-col>
    </el-row>
    <div class="black-space-30"></div>
    <!-- 表格数据部分 -->
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column type="selection" width="47"></el-table-column>
      <el-table-column prop="title" label="标题" width="764"></el-table-column>
      <el-table-column prop="category" label="类别" width="133"></el-table-column>
      <el-table-column prop="date" label="日期" width="238"></el-table-column>
      <el-table-column prop="admin" label="管理员" width="66"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          <el-button size="mini" type="success" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="black-space-30"></div>

    <!-- 底部分页部分 -->
    <el-row>
      <el-col :sapn="12">
        <el-button size="medium" @click="handleDeleteAll">批量删除</el-button>
      </el-col>
      <el-col :sapn="12">
        <el-pagination
          class="pull-right"
          background
          layout=" total, sizes,prev, pager,next, jumper"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :page-sizes="[100, 200, 300, 400]"
          :total="1000"
        ></el-pagination>
      </el-col>
    </el-row>
    <!-- 弹窗 -->
    <DialogInfo :flag.sync="dialog_info" />
  </div>
</template>
<script>
import { global } from "@/utils/global";
import DialogInfo from "./dialog/info";
import { reactive, ref, watch, onMounted } from "@vue/composition-api";
import { common } from "@/api/common";
export default {
  name: "info",

  components: { DialogInfo },
  setup(props, { root }) {
    const { str, confirm } = global();
    const { getInfoCategory, categoryItem } = common();
    //基础数据
    const search_key = ref("id");
    const category_value = ref("");
    const date_value = ref("");
    const search_keyWork = ref("");
    const dialog_info = ref(false);
    //对象数据
    const options = reactive({
      category: []
    });
    const search_option = reactive([
      { value: "id", label: "ID" },
      { value: "title", label: "标题" }
    ]);
    const tableData = reactive([
      {
        title: "纽约市长白思豪宣布退出总统竞选 特朗普发推回应",
        category: "国际信息",
        date: "2016-05-02",
        admin: "管理员"
      },
      {
        title:
          "习近平在中央政协工作会议暨庆祝中国人民政治协商会议成立70周年大会上发表重要讲话",
        category: "国际信息",
        date: "2016-05-02",
        admin: "管理员"
      },
      {
        title: "基里巴斯与台当局断交系蔡当局上台后断交第7国",
        category: "国际信息",
        date: "2016-05-02",
        admin: "管理员"
      },
      {
        title: "不选了！纽约市长白思豪宣布退出2020美国大选",
        category: "国际信息",
        date: "2016-05-02",
        admin: "管理员"
      }
    ]);
    //methods
    const handleEdit = (index, row) => {
      console.log(index, row);
    };
    const handleDelete = (index, row) => {
      confirm({
        content: "确定删除此信息",
        tip: "提示",
        type: "success",
        id: 11111,
        fn: confirmDe
      });
      console.log(index, row);
    };
    const handleDeleteAll = () => {
      confirm({
        content: "确定删除所选择的所有信息",
        id: 22222,
        fn: confirmDe
      });
    };
    const confirmDe = value => {
      console.log(value);
    };
    const handleSizeChange = val => {
      console.log(val);
    };
    const handleCurrentChange = val => {
      console.log(val);
    };
    onMounted(() => {
      getInfoCategory();
    });
    watch(
      () => categoryItem.item,
      value => {
        // console.log(value);
        options.category = value;
      }
    );
    return {
      //ref
      category_value,
      date_value,
      search_keyWork,
      search_key,
      dialog_info,
      //reactive
      options,
      search_option,
      tableData,
      //methods
      handleEdit,
      handleDelete,
      handleDeleteAll,
      handleSizeChange,
      handleCurrentChange
    };
  }
};
</script>

<style lang="scss" scoped>
.label-wrap {
  &.category {
    @include labelDom(left, 60, 40);
  }
  &.date {
    @include labelDom(right, 93, 40);
  }
  &.key-work {
    @include labelDom(right, 99, 40);
  }
}
.button-bottom {
  margin-bottom: 10px;
}
</style>
