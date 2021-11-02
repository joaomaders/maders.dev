<template>
	<div ref="mainNavbar" class="main-navbar">
		<div class="main-navbar-left">
			<router-link class="main-navbar-logo" to="/"></router-link>
		</div>

		<div class="main-navbar-right">
			<div class="main-navbar-items">
				<div class="slide-layer" :style="selectedItemInfos"></div>

				<router-link v-for="route in routes"
					:key="route.path"
					:to="route.path"
					class="item" 
					:id="`route-${route.name}`"
					:class="{ 'selected': route.path === selectedRoute.path }"
				>
					<div >
						{{ route.name }}
					</div>
				</router-link>
			</div>
		</div>

		<div class="navbar-burger" style="width: 30px; height: 30px; background-color: transparent !important;" :class="{ 'is-active' : navbarMobileShowing }" @click="toggleNavbarMobileStatus()">
			<span></span>
			<span></span>
			<span></span>
		</div>
	</div>

	<div class="navbar-mobile" :class="{ 'active' : navbarMobileShowing }">
			{{ navbarMobileHeight }}
	</div>
</template>

<script>
import { useRoute } from "vue-router";

export default {
	data() {
		return {
			selectedRoute: useRoute(),
			navbarMobileShowing: false
		};
	},
	computed: {
		routes () {
			return this.$router.getRoutes();
		},
		selectedItemInfos () {
			let item = document.getElementById(`route-${this.selectedRoute.name}`);

			if (item) {
				let infos = item.getBoundingClientRect();

				return {
					left: `${infos.left}px`,
					width: `${infos.width}px`,
				}
			}

			return 0;
		}
	},
	methods: {
		toggleNavbarMobileStatus () {
			this.navbarMobileShowing = !this.navbarMobileShowing;
		}
	},
	afterMount () {
		document.getElementById('route-Home').click(); // select home
	}
};
</script>

<style lang="scss" scoped>
	@import '../scss/main.scss';

	.main-navbar {
		position: fixed;
		z-index: 999999;
		left: 0;
		top: 0;
		background-color: #FFFFFF;

		display: flex;
		justify-content: space-between;

		padding: 10px 20px;
		position: relative;

		&-left {
			.main-navbar-logo {
				width: 200px;
				height: 100%;
				background-color: $main-color;
			}
		}

		&-right {
			.main-navbar-items {
				display: flex;
				align-items: center;
				gap: 20px;


				.slide-layer {
					position: absolute;
					bottom: 5px;
					height: 3px;

					background-color: $main-color;
					transition: all .3s;
					z-index: -1;
				}

				.item {
					font-family: "Roboto", sans-serif !important;
					text-decoration: none;
					color: $black;
					padding: 5px 10px;
					transition: all .175s;

					font-size: 20px;

					&.selected {
						color: $main-color;
						font-weight: 500;
						transition: all .3s;
					}
				}
			}
		}

		.navbar-burguer {
			display: none;
		}
	}

	.navbar-mobile {
		display: none;
	}

	@media (max-width: 1023px) {
		.main-navbar {
			padding: 10px 20px;
			position: relative;
			height: 60px;
			align-items: center;

			&-left {
				.main-navbar-logo {
					width: 200px;
					height: 100%;
				}
			}

			&-right {
				display: none;
			}

			.navbar-burguer {
				display: flex;
			}
		}

		.navbar-mobile {
			display: flex;
			width: 100vw;
			background-color: red;
			position: fixed;
			z-index: 9998;
			right: -100vw;
			bottom: 0;
			transition: right .3s;
			height: calc(100vh - 60px);

			&.active {
				right: 0;
				transition: right .5s;
			}
		}
	}
</style>