<template>
    <div :class="['features-content', contentClass,txRg ,'BeatriceDisplay-BoldIt']">
        <p :class="['animate__animated', 'animate__backInLeft', 'one-connect']">
            {{ top }}
        </p>
        <p class="features-enter animate__animated animate__backInLeft">
            {{ bottom }}
        </p>
    </div>
</template>

<script>

export default {
    name: "title-name",
    props: ['contentClass', 'top', 'bottom', 'txRg'],
    data() {
        return {}
    },
    mounted() {
        this.$nextTick(() => {
            this.resize();
            window.addEventListener('resize', () => {
                this.resize();
            })
        })
    },
    methods: {
        resize() {
            const meteName = document.getElementsByClassName(this.contentClass);
            const scree = document.body.clientWidth || document.body.scrollWidth;
            if (scree <= 1290) {
                meteName[0].style.fontSize = this.calc(scree, 80, 30);
            }
        },
        calc(scree, max, min) {
            return max - (1290 - scree) / ((1290 - 375) / (max - min)) + 'px';
        }
    }
}
</script>

<style scoped lang="less">
.features-content {
    font-size: 80px;
    line-height: 110%;
    padding-bottom: 25px;
    &.tx-rg{
        text-align: right;
    }
    .one-connect {
        color: var(--col-white);
    }

    .features-enter {
        white-space: nowrap;
        color: var(--col-static-blue);
    }
}

@media screen and(max-width: 720px) {
    .features-content {
        text-align: center;
        &.tx-rg{
            text-align: center;
        }
    }
}
</style>
