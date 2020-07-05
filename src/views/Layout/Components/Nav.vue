<template>
  <div id="nav-warp">
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      background-color="transparent"
      text-color="#fff"
      active-text-color="#fff"
      router
    >
      <template v-for="(item, index) in routers">
        <el-submenu v-if="!item.hidden" :key="item.id" :index="index + ''">
          <!-- 一级菜单 -->
          <template slot="title">
            <span slot="title">{{ item.meta.name }}</span>
          </template>
          <!-- 子级菜单 -->
          <template v-for="subItem in item.children">
            <el-menu-item
              v-if="!subItem.hidden"
              :key="subItem.id"
              :index="subItem.path"
            >{{ subItem.meta.name }}</el-menu-item>
          </template>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>
<script>
import { reactive, ref, isRef, toRefs, onMounted } from "@vue/composition-api";
export default {
  name: "nav-warp",
  setup(props, { root }) {
    const routers = reactive(root.$router.options.routes);
    // console.log(routers);
    const isCollapse = ref(false);
    return {
      routers,
      isCollapse
    };
  }
};
</script>
<style lang="scss" scoped>
#nav-warp {
  position: fixed;
  left: 0;
  top: 0;
  width: $menuWidth;
  height: 100vh;
  background-color: #344a5f;
}
</style>