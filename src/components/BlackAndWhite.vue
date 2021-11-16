<template>
    <div class="black-and-white-section">
        <div class="black-side half">
            <div class="text">
                {{ content }}
            </div>
        </div>

        <div class="white-side half">
            <div class="text">
                {{ content }}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                content: "Coming soon"
            }
        }
        
    }
</script>

<style lang="scss" scoped>
    $text-width: 50%;
    $text-negative-margin: calc(-50% / 2);

    $text-size: 60px;
    $text-weight: 700;

    .black-and-white-section {
        display: flex;
        height: 100vh;
        margin-top: -50px;

        .half {
            text-align: center;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;

            .text {
                font-size: $text-size;
                font-weight: $text-weight;
                width: $text-width;
            }
        }

        .black-side {
            width: 50%;
            height: 100%;
            background-color: #000000;
            justify-content: flex-end;

            .text {
                margin-right: $text-negative-margin;
                color: #FFFFFF;
                animation: animate-black-side 10s infinite;
            }
        }

        .white-side {
            width: 50%;
            height: 100%;
            background-color: #FFFFFF;
            justify-content: flex-start;

            .text {
                color: #000000;
                margin-left: $text-negative-margin;
                animation: animate-white-side 10s infinite;
            }
        }

        @keyframes animate-white-side {
            0% {
                margin-left: -50%;
            }
            50% {
                margin-left: 0px;
            }
            100% {
                margin-left: -50%;
            }
        }

        @keyframes animate-black-side {
            0% {
                margin-right: 0px;
            }
            50% {
                margin-right: -50%;
            }
            100% {
                margin-right: 0;
            }
        }
    }
</style>