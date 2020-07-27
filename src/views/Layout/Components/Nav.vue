<template>
  <div id="nav-warp">
    <h1 class="logo">
      <img src="../../../assets/logo.png" alt />
    </h1>
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
            <svg-icon :iconClass="item.meta.icon" :className="item.meta.icon" />
            <span slot="title">{{ item.meta.name }}</span>
          </template>
          <!-- 子级菜单 -->
          <template v-for="subItem in item.children">
            <el-menu-item v-if="!subItem.hidden" :key="subItem.id" :index="subItem.path">
              <svg-icon :iconClass="subItem.meta.icon" :className="subItem.meta.icon" />
              <span slot="title">{{ subItem.meta.name }}</span>
            </el-menu-item>
          </template>
        </el-submenu>
      </template>
      <svg-icon />
    </el-menu>
  </div>
</template>
<script>
import {
  reactive,
  ref,
  isRef,
  toRefs,
  onMounted,
  computed
} from "@vue/composition-api";
export default {
  name: "nav-warp",
  setup(props, { root }) {
    const routers = reactive(root.$router.options.routes);
    // console.log(routers);
    const isCollapse = computed(() => {
      return root.$store.state.app.isCollapse;
    });
    return {
      routers,
      isCollapse
    };
  }
};
</script>
<style lang="scss" scoped>
@import url("../../../styles/elementUi.scss");
.logo {
  text-align: center;
  img {
    margin: 28px auto 25px;
    width: 92px;
  }
}
#nav-warp {
  position: fixed;
  left: 0;
  top: 0;
  width: $navMenu;
  height: 100vh;
  background-color: #344a5f;
  svg {
    font-size: 20px;
    margin-right: 10px;
  }
}
.open {
  #nav-wrap {
    width: $navMenu;
  }
}
.close {
  #nav-warp {
    width: $navMenuMin;
    .logo img {
      margin: 28px auto 25px;
      width: 70%;
    }
  }
  .el-submenu {
    &.is-opened {
      .el-submenu__title {
        background-color: red !important;
      }
    }
  }
  .el-menu--vertical {
    .el-menu {
      background-color: red !important;
    }
    .el-menu-item:hover {
      line-height: 56px;
    }
  }
}
</style>
