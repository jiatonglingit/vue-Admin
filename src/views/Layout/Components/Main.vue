<template>
  <div id="main-warp">
    <router-view></router-view>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
#main-warp {
  position: fixed;
  left: $menuWidth;
  top: 75px;
  right: 0;
  bottom: 0;
  border: 30px solid #f7f7f7;
  border-bottom: none;
  box-sizing: border-box;
}
</style>