<template>
  <div id="header-wrap">
    <div class="pull-left header-icon" @click="navMenuState">
      <svg-icon iconClass="menu" class="menu" />
    </div>
    <div class="pull-right">
      <div class="user-info pull-left">
        <img src="../../../assets/images/face.jpg" alt />
        {{username}}
      </div>
      <div class="header-icon pull-left" @click="exit">
        <svg-icon iconClass="exit" class="exit" />
      </div>
    </div>
  </div>
</template>
<script>
import { MessageBox } from "element-ui";
import { computed } from "@vue/composition-api";
export default {
  name: "layoutHeader",
  setup(props, { root }) {
    const username = computed(() => root.$store.state.login.username);
    const navMenuState = () => {
      root.$store.commit("app/SET_COLLAPSE");
    };
    const exit = () => {
      root
        .$confirm("是否退出, 是否继续?", "提示", {
          confirmButtonText: "退出",
          cancelButtonText: "取消",
          type: "warning",
          center: true
        })
        .then(() => {
          root.$store.dispatch("login/exit").then(response => {
            root.$router.push({
              name: "Login"
            });
          });
          root.$message({
            type: "success",
            message: "退出成功!"
          });
        })
        .catch(() => {});
    };
    return {
      navMenuState,
      username,
      exit
    };
  }
};
</script>
<style lang="scss" scoped>
#header-wrap {
  position: fixed;
  top: 0;
  right: 0;
  left: $navMenu;
  height: 75px;
  background-color: #fff;
  line-height: 75px;
  @include webkit(box-shadow, 0 3px 16px 0 rgba(0, 0, 0, 0.1));
  @include webkit(transition, all 0.3s ease 0s);
}
.header-icon {
  padding: 0 32px;
  svg {
    margin-bottom: -8px;
    font-size: 25px;
    cursor: pointer;
  }
}
.user-info {
  height: 100%;
  padding: 0 32px;
  border-right: 1px solid #ededed;
  + .header-icon {
    padding: 0 28px;
  }
  img {
    display: inline-block;
    margin-bottom: -12px;
    margin-right: 18px;
    border-radius: 50px;
  }
}
.open {
  #header-wrap {
    left: $navMenu;
  }
}
.close {
  #header-wrap {
    left: $navMenuMin;
  }
}
</style>
