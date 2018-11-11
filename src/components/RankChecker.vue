<template>
	<div>
		<AdminNav />
    <Sidebar />
    <div class="main-content">
    	<div class="container-fluid">
    		<iframe src="https://www.arunkp.com/rank"></iframe>
    	</div>
    </div>
	</div>
</template>
<script>
import Sidebar from '@/components/Sidebar'
import AdminNav from '@/components/AdminNav'
	export default {
		name: 'RankChecker',
		components: {
			'AdminNav': AdminNav,
			'Sidebar': Sidebar
		}

	}
</script>
<style scoped>
	iframe {
		width: 100%;
    height: calc(100vh - 133px);
	}
</style>