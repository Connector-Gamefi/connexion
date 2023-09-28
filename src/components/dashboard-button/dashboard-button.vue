<template>
    <div @click="sendClick" class="dashboard-button
    BeatriceDisplay-BoldIt animate__animated animate__flipInX">
        {{ content }}
        <img class="arrow" :src="darkBG" alt="">
    </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
    name: "dashboard-button",
    // props: ['content', 'id'],
    props: {
        content: {
            type: String,
            default: () => ''
        },
        id: {
            type: String,
            default: () => 'id'
        }
    },
    data() {
        return {
            lightBg: 'https://d2svbor5ih31il.cloudfront.net/images/banner/arrow-light.png',
            darkBG: 'https://d2svbor5ih31il.cloudfront.net/images/banner/arrow-dark.png'
        }
    },
    computed: {
        ...mapState(['theme'])
    },
    mounted() {
        this.resize();
        this.$nextTick(() => {
            window.addEventListener('resize', () => {
                this.resize()
            })
        })

    },
    methods: {
        resize() {
            const dom = document.getElementsByClassName('dashboard-button');
            const arrow = document.getElementsByClassName('arrow');
            const scree = document.body.clientWidth || document.body.scrollWidth;
            if (scree <= 1290) {
                for(let i=0;i<dom.length;i++){
                    dom[i].style.fontSize = this.calc(scree, 24, 14);
                }
                for(let i=0;i<arrow.length;i++){
                    arrow[i].style.width = this.calc(scree, 40, 15);
                    arrow[i].style.height = this.calc(scree, 23, 12);
                    arrow[i].style.marginLeft = this.calc(scree, 20, 6);
                }
            }
        },
        calc(scree, max, min) {
            return max - (1290 - scree) / ((1290 - 375) / (max - min)) + 'px';
        },
        sendClick() {
            this.$emit('click')
        }
    }
}
</script>

<style scoped lang="less">
.dashboard-button {
    border-radius: 6px;
    padding: 10px 20px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #ffffff;
    background: var(--col-static-blue);

    .arrow {
        width: 40px;
        height: 23px;
        margin-left: 20px;
    }
}

</style>
