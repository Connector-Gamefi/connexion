<template>
    <div class="dashboard __container" id="dashboard">
        <p id="one-connect" class="one-connect BeatriceDisplay-BoldIt
         animate__animated animate__bounceInLeft animate__delay-.5s">
            Publisher's <span>J.A.R.V.I.S</span>
        </p>

        <a-body-content content="The one-stop management platform for blockchain games"></a-body-content>
        <p class="platform Poppins-SemiBold">
            Visualized information of all things in your game for understanding and management
        </p>
        <dashboard-introduce ref="introduce"
                             class=" animate__animated animate__bounceInLeft animate__delay-1.5s"></dashboard-introduce>
    </div>
</template>

<script>
import dashboardIntroduce from './components/dashboard-introduce';
import swiperSlide from './components/swiper-slide';
import {WOW} from 'wowjs';
import carouselWrap from './components/carousel-wrap';

export default {
    name: "dashboard",
    data() {
        return {
            is: false
        }
    },
    components: {
        dashboardIntroduce,
        swiperSlide,
        carouselWrap
    },
    mounted() {
        this.resize();
        new WOW().init();
        window.addEventListener('resize', () => {
            this.resize();
        })
        window.addEventListener('scroll', this.handleScroll, true)
    },
    methods: {
        handleScroll() {
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            let cHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            let oDiv = document.getElementById('dashboard');
            if (scrollTop > (oDiv.offsetTop + 300 - cHeight)) {
                if (!this.is) {
                    this.$refs.introduce.exchange(true);
                    this.is = true;
                }
            } else {
                this.is = false;
                if (this.$refs.introduce) {
                    this.$refs.introduce.exchange(false);
                }
            }
        },
        resize() {
            const dashboard = document.getElementById('dashboard');
            const oneConnect = document.getElementById('one-connect');

            const scree = document.body.clientWidth || document.body.scrollWidth;
            if (scree <= 1290) {
                dashboard.style.paddingTop = this.calc(scree, 190, 40);
                oneConnect.style.fontSize = this.calc(scree, 80, 30);
            }
        },
        calc(scree, max, min) {
            return max - (1290 - scree) / ((1290 - 375) / (max - min)) + 'px';
        }
    }
}
</script>

<style scoped lang="less">
.dashboard {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 190px;


    .one-connect {
        font-size: 80px;
        color: var(--col-white);

        span {
            color: var(--col-static-blue);
        }
    }


    .platform {

        text-align: center;
        font-size: 16px;
        line-height: 17px;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        color: var(--col-white67);
        padding: 12px 0 50px 0;
    }

}
@media screen and(max-width: 720px) {
    .dashboard {
        .platform {
            font-size: 12px;
        }
    }
}

@media screen and(min-width: 720px) {
    .dashboard {
        .platform {
            font-size: 16px;
        }
    }
}

@media screen and(min-width: 920px) {
    .dashboard {
        .platform {
            font-size: 16px;
        }
    }
}

@media screen and(min-width: 1080px) {
    .dashboard {
        .platform {
            font-size: 16px;
        }
    }
}

@media screen and(min-width: 1220px) {
    .dashboard {
        .platform {
            font-size: 16px;
        }
    }
}

@media screen and(min-width: 1440px) {
    .dashboard {
        .platform {
            font-size: 16px;
        }
    }
}

</style>
