<template>
    <div class="home-initial columns container">
        <div class="home-initial-texts column is-6">
            <div class="home-initial-texts-title">
                Soluções em TI <br>
                <span>para você</span>
            </div>

            <div class="home-initial-texts-subtitle">
                Tire seus projetos do papel e faça acontecer. Websites responsivos, landing pages, hospedagem e muito mais!
            </div>
        </div>

        <div ref="animation" class="home-initial-animation column is-6"></div>
    </div>
</template>

<script>
    import lottie from 'lottie-web'

    export default {
        mounted () {
            const animation = lottie.loadAnimation({
                container: this.$refs.animation,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                path: '/animations/animation2.json'
            })
            animation.play();
        }
    }
</script>

<style lang="scss" scoped>
	@import '../../scss/main.scss';

    .home-initial {
        margin: 0 auto;
        padding: 60px 0;

        display: flex;
        align-items: center;

        &-texts {
            display: flex;
            flex-direction: column;
            gap: 20px;

            &-title {
                color: $black;
                font-weight: 700;
                font-size: 3rem;

                span {
                    color: $main-color;
                }
            }

            &-subtitle {
                font-weight: 400;
                font-size: 1.10rem;
                color: $comment;
            }
        }
    }
</style>