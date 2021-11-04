<template>
    <div class="black-and-white-section">
        <div class="black-side half">
            <div class="text">
                Qual é o e-mail que você mais usa atualmente? Coloque um email que você abre com frequência, pois vou te enviar algumas coisas importantes por lá.
            </div>
        </div>

        <div class="white-side half">
            <div class="text">
                Qual é o e-mail que você mais usa atualmente? Coloque um email que você abre com frequência, pois vou te enviar algumas coisas importantes por lá.
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    $text-width: 300px;
    $text-negative-margin: calc(-300px / 2);

    .black-and-white-section {
        display: flex;
        height: 300px;

        .half {
            overflow: hidden;
            display: flex;

            .text {
                font-size: 32px;
                font-weight: 600;
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
            }
        }
    }
</style>