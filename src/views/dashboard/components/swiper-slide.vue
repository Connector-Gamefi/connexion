<template>
    <div class="swiper-slide">
        <div id="certify">
            <div class="swiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <div class="css1">
                            <img src="https://d2svbor5ih31il.cloudfront.net/images/dashboard/manage-users.png">
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="css2">
                            <img src="https://d2svbor5ih31il.cloudfront.net/images/dashboard/separate-permissions.png">
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="css3">
                            <img src="https://d2svbor5ih31il.cloudfront.net/images/dashboard/manage-assets.png">
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="css4">
                            <img src="https://d2svbor5ih31il.cloudfront.net/images/dashboard/data-visualization.png">
                        </div>
                    </div>
<!--                    <div class="swiper-slide">-->
<!--                        <div class="css5">-->
<!--&lt;!&ndash;                            <img src="https://d2svbor5ih31il.cloudfront.net/images/dashboard/manage-assets.png">&ndash;&gt;-->
<!--                        </div>-->
<!--                    </div>-->
                </div>
            </div>
            <div class="swiper-pagination"></div>
<!--            <div class="swiper-button-prev"></div>-->
<!--            <div class="swiper-button-next"></div>-->
        </div>

    </div>
</template>

<script>
import {mapState} from "vuex";
import Swiper from "swiper";

export default {
    name: "swiper-slide",
    data() {
        return {
            video: {
                dark: 'Connector_Part_B02.mp4',
                light: 'Connector_Part_W02.mp4'
            }
        }
    },
    computed: {
        ...mapState(['theme']),
        videoLink() {
            return this.$link + this.video[this.theme];
        }
    },
    mounted() {
        this.$nextTick(() => {
            const certifySwiper = new Swiper('#certify .swiper', {
                watchSlidesProgress: true,
                slidesPerView: 'auto',
                centeredSlides: true,
                loop: true,
                loopedSlides: 3,
                autoplay: true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                pagination: {
                    el: '.swiper-pagination',
                    //clickable :true,
                },
                on: {
                    progress: function (progress) {
                        for (let i = 0; i < this.slides.length; i++) {
                            var slide = this.slides.eq(i);
                            console.log(slide);
                            var slideProgress = this.slides[i].progress;
                            let modify = 1;
                            console.log('slideProgress:', slideProgress);
                            if (Math.abs(slideProgress) > 1) {
                                modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
                            }
                            let translate = slideProgress * modify * 260 + 'px';
                            let scale = 1 - Math.abs(slideProgress) / 5;
                            let zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
                            slide.transform('translateX(' + translate + ') scale(' + scale + ')');
                            slide.css('zIndex', zIndex);
                            slide.css('opacity', 1);
                            if (Math.abs(slideProgress) > 3) {
                                slide.css('opacity', 0);
                            }
                        }
                    },
                    setTransition: function (swiper, transition) {
                        // console.log('swiper, transition', swiper, transition, this.slides);
                        for (var i = 0; i < this.slides.length; i++) {
                            var slide = this.slides.eq(i)
                            slide.transition(transition);
                        }

                    }
                }

            })
        })
    }
}
</script>

<style scoped lang="less">
.css1, .css2, .css3, .css4, .css5 {
    width: 100%;
    height: 100%;

    img {
        display: block;
        width: 100%;
        height: 100%;
    }
}

#certify {
    position: relative;
    width: 1292px;
    margin: 0 auto
}

#certify .swiper {
    padding-bottom: 60px;
}

#certify .swiper-slide {
    width: 520px;
    height: 408px;
}


#certify .swiper-pagination {
    width: 100%;
    bottom: 20px;
}

#certify .swiper-pagination-bullets .swiper-pagination-bullet {
    margin: 0 5px;
    border: 3px solid #fff;
    background-color: #d5d5d5;
    width: 10px;
    height: 10px;
    opacity: 1;
}

#certify .swiper-pagination-bullets .swiper-pagination-bullet-active {
    border: 3px solid #00aadc;
    background-color: #fff;
}

#certify .swiper-button-prev {
    left: -30px;
    width: 45px;
    height: 45px;
    //background: url('./images/wm_button_icon.png') no-repeat;
    background-position: 0 0;
    background-size: 100%;
}

#certify .swiper-button-prev:hover {
    background-position: 0 -46px;
    background-size: 100%
}

#certify .swiper-button-next {
    right: -30px;
    width: 45px;
    height: 45px;
    //background: url('./images/wm_button_icon.png') no-repeat;
    background-position: 0 -93px;
    background-size: 100%;
}

#certify .swiper-button-next:hover {
    background-position: 0 -139px;
    background-size: 100%
}

#certify .swiper-button-prev::after, #certify .swiper-button-next::after {
    content: '';
}


.swiper-slide {
    //width: 1000px;
    //height: 600px;
    //border: 1px solid red;
    .video {
        width: 100%;
        height: 100%;
        position: relative;

        .dash-video {
            position: absolute;
            top: 50%;
            left: 50%;
            min-width: 100%;
            min-height: 100%;
            width: auto;
            height: auto;
            transform: translateX(-50%) translateY(-50%);
            z-index: 0;
        }
    }
}

.dash-video {
    width: 100%;
    height: 100%;
}
</style>
