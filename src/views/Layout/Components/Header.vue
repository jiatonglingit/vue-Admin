<template>
  <div id="header-warp">
    <div class="pull-left header-icon">
      <svg-icon iconClass="menu" class="menu" />
    </div>
    <div class="pull-right">
      <div class="user-info pull-left">
        <img src="../../../assets/images/face.jpg" alt />
        666
      </div>
      <div class="header-icon pull-left">
        <svg-icon iconClass="exit" class="exit" />
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
#header-warp {
  position: fixed;
  left: 250px;
  top: 0;
  right: 0;
  height: 75px;
  background-color: #ffffff;
  -webkit-box-shadow: 0 3px 16px 0 rgba(0, 0, 0, 0.1);
}
.header-icon {
  padding: 20px 32px;
  svg {
    margin-bottom: -15px;
    font-size: 25px;
    cursor: pointer;
  }
}
.user-info {
  height: 100%;
  padding: 20px 32px;
  border-right: 1px solid #ededed;
  + .header-icon {
    padding: 20px 32px;
  }
  img {
    display: inline-block;
    margin-bottom: -12px;
    margin-right: 18px;
    border-radius: 50px;
  }
}
</style>