<template>
    <div class="name mete-name BeatriceDisplay-BoldIt">
        <p class="one-connect  animate__animated animate__backInLeft">
            Developer's
        </p>
        <p class="enter-metaverse  enter-content animate__animated animate__backInLeft">
            Doraemon
        </p>
    </div>
</template>

<script>

export default {
    name: "metaverse-name",
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
            const meteName = document.getElementsByClassName('mete-name');
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
.name {
    font-size: 80px;
    line-height: 100%;
    padding-bottom: 25px;

    .one-connect {
        color: var(--col-white);
    }

    .enter-metaverse {
        white-space: nowrap;
        color: var(--col-static-blue);
    }
}

@media screen and(max-width: 720px) {
    .name {
        text-align: center;
    }
}
</style>
