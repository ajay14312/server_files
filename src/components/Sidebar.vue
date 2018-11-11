<template>
	<div class="sidebar">
		<div class="fixed-layout">
			<!-- <b-row> -->
				<b-col>
					<ul>
			<li><router-link to="/dashboard" @click.native="makeActive"><i class="fas fa-list-ul"></i>Listings</router-link></li>
			<li><router-link to="/rankChecker" @click.native="makeActive"><i class="fas fa-trophy"></i>Keyword Rank Check</router-link></li>
			<li><router-link to="/reviews" @click.native="makeActive"><i class="fas fa-star"></i>Reviews & Ratings</router-link></li>
			<li><router-link to="/reviewGen" @click.native="makeActive"><i class="fas fa-envelope-open"></i>Review Generator<sup class="sup-item">beta</sup></router-link></li>
			<li><router-link to="/notifications" @click.native="makeActive"><i class="fas fa-star"></i>Notifications<sup class="sup-item">beta</sup></router-link></li>
			<!-- <li></li> -->
		</ul>
				</b-col>
			<!-- </b-row> -->
		</div>
	</div>
</template>
<script>
	export default {
		name: 'Sidebar',
		props: {
			'active-tab': Number
		},
		methods: {
			makeActive: function () {
				console.log("this");
				// e.currentTarget().classList().addClass("active");
				// this.addClass("active");
				// document.querySelector("li").
			}
		}
	}
</script>
<style lang="scss" scoped>
	.sidebar {
		position: fixed;
		background: #1162A2;
		width: 100%;
		top: 80px;
		z-index: 2;
		ul {
			padding: 0;
			margin: 0;
			li {
				list-style-type: none;
				display: inline-block;
				&:hover {
					a {
						color: rgba(255,255,255,1);
					}
				}
				a {
					color: rgba(255,255,255,.5);
					display: inline-block;
					padding: 16px;
					&.active {
						background: #2F8DC4;
						color: #fff;
					}
					&:hover {
						text-decoration: none;
					}
					i {
						margin-right: 5px;
					}
				}
				.sup-item {
					background-color: red;
					border-radius: 10px;
					padding: 1px 5px 1px 5px;
					margin-left: 5px;
				}
			}
		}
	}
</style>