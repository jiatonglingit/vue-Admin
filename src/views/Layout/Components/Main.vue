<template>
  <div id="main-warp">
    <div class="main-content">
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
#main-warp {
  position: fixed;
  // height: 100vh;
  left: $menuWidth;
  top: 75px;
  right: 0;
  bottom: 0;
  border: 30px solid #f7f7f7;
  border-bottom: none;
  -webkit-box-sizing: border-box;
}
.main-content {
  width: 100%;
  height: 100%;
  // padding-top: $layoutHeader + 30;
  padding-right: 30px;
  -webkit-box-sizing: border-box;
}
.content {
  width: 100%;
  height: 100%;
  padding: 30px 30px 0 30px;
  background-color: #fff;
  box-sizing: border-box;
}
</style>