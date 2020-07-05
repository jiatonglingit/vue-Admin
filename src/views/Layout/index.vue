<template>
  <div id="layout">
    <LayoutHeader />
    <LayoutMain />
    <LayoutNav />
  </div>
</template>
<script>
import LayoutHeader from "./Components/Header";
import LayoutMain from "./Components/Main";
import LayoutNav from "./Components/Nav";
export default {
  components: {
    LayoutHeader,
    LayoutMain,
    LayoutNav
  },
  name: "layout",
  setup(props, { refs, root }) {}
};
</script>
<style lang="sass" scoped>

</style>