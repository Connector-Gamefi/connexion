<template>
    <div class="for Poppins-Bold
    animate__animated animate__flipInX">{{content}}</div>
</template>

<script>
export default {
    name: "all-developer",
    props:{
        content:{
            type: String,
            default: ()=> 'FOR DEVELOPERS'
        }
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
            const text = document.getElementsByClassName('for');
            const scree = document.body.clientWidth || document.body.scrollWidth;
            if (scree <= 1290) {
                for (let i = 0; i < text.length; i++) {
                    // text[i].style.fontSize = this.calc(scree, 18, 12);
                    // text[i].style.width = this.calc(scree, 203, 150);
                }
            }

        },
        calc(scree, max, min) {
            return max - (1290 - scree) / ((1290 - 375) / (max - min)) + 'px';
        }
    }
}
</script>

<style scoped lang="less">
.for {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 203px;
    height: 42px;
    background: var(--col-static-for-bg);
    border-radius: 10px;
    font-size: 18px;
    //line-height: 18px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--col-static-for);
}
</style>
