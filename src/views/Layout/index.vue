<template>
	<div id="layout" :class="[menuStatus ? 'close' : 'open']">
		<LayoutHeader />
		<LayoutMain />
		<LayoutNav />
	</div>
</template>
<script>
import { computed } from '@vue/composition-api'
import LayoutHeader from './Components/Header'
import LayoutMain from './Components/Main'
import LayoutNav from './Components/Nav'
export default {
	components: {
		LayoutHeader,
		LayoutMain,
		LayoutNav,
	},
	name: 'layout',
	setup(props, { root }) {
		const menuStatus = computed(() => {
			return root.$store.state.isCollapse
		})
		return {
			menuStatus,
		}
	},
}
</script>
<style lang="sass" scoped></style>
