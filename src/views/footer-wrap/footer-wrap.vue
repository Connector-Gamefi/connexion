<template>
    <div class="footer-wrap">
        <div class="__container footer-body">
            <div class="left">
                <div class="top">
                    <img class="logo" :src="logo" alt="">
                </div>
                <div class="footer-content">
                    Participants/Citizens from the following countries are strictly excluded/not allowed to
                    participate in the IDOs: Algeria, Bangladesh, Belarus, Bolivia, Cambodia, Colombia, Ecuador,
                    Egypt, Indonesia, Iran, Iraq, Libya, Morocco, Nepal, Pakistan, Saudi Arabia.
                </div>
                <div class="bottom">
                    <div class="title Poppins-ExtraBold">
                        Subscription
                    </div>
                    <sub-email></sub-email>
                </div>
            </div>
            <div class="right">
                <div class="top">
                    <div class="content">
                        Participants/Citizens from the following countries are strictly excluded/not allowed to
                        participate in the IDOs: Algeria, Bangladesh, Belarus, Bolivia, Cambodia, Colombia, Ecuador,
                        Egypt, Indonesia, Iran, Iraq, Libya, Morocco, Nepal, Pakistan, Saudi Arabia.
                    </div>
                </div>
                <div class="bottom">
                    <div class="title Poppins-ExtraBold">
                        Join the community
                    </div>
                    <a-footer-icon></a-footer-icon>
                </div>
            </div>
        </div>
        <div class="link">
            <div class="__container flex">
                <span class="Poppins-ExtraBold">© 2021 CONNEXION.   All rights reserved.</span>
<!--                <div class="Poppins-SemiBold sitemap">-->
<!--                    <span>SITEMAP</span>-->
<!--                    <span>SITEMAP</span>-->
<!--                    <span>SITEMAP</span>-->
<!--                    <span>SITEMAP</span>-->
<!--                </div>-->
            </div>
        </div>
    </div>
</template>

<script>
import subEmail from './components/sub-email';
import {mapState} from 'vuex';

export default {
    name: "footer-wrap",
    components: {
        subEmail
    },
    computed: {
        ...mapState(['theme']),
        logo() {
            return this.logoDark
        }

    },
    data() {
        return {
            logoDark: require('../../assets/images/footer/dark-logo.png'),
            // logoDark: 'https://d2svbor5ih31il.cloudfront.net/images/logo/dark-logo.png',
            logoLight: 'https://d2svbor5ih31il.cloudfront.net/images/logo/light-logo.png'
        }
    }
}
</script>

<style scoped lang="less">
.footer-wrap {
    background: var(--col-static-black);

    .footer-body {
        height: 100%;
        display: flex;
        justify-content: space-between;
        padding-bottom: 30px;
    }

    .left {
        width: 470px;

        .footer-content {
            width: 316px;
            font-size: 12px;
            line-height: 17px;
            text-align: center;
            display: none;
            color: var(--col-static-white06);
        }
    }

    .logo {
        width: 435px;
        height: 77px;
    }

    .top {
        height: 230px;
        padding-top: 55px;

    }

    .content {
        width: 616px;
        font-size: 14px;
        line-height: 32px;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        display: block;
        color: var(--col-static-white06);
    }

    .bottom {
        .title {
            color: var(--col-static-white);
            font-size: 20px;
            padding-bottom: 28px;
        }
    }

    .link {
        height: 80px;
        width: 100%;
        background: var(--col-static-blue);
        color: var(--col-static-white);
        font-size: 20px;
        line-height: 100%;

        .sitemap {
            span {
                margin: 0 20px;
            }
        }
    }

    .flex {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }
}

@media screen and(max-width: 720px) {
    .footer-wrap {
        .footer-body {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding-bottom: 30px;
        }

        .left {
            display: flex;
            align-items: center;
            flex-direction: column;
            width: auto;

            .footer-content {
                display: block;
                padding: 20px 0 36px 0;
            }
        }

        .logo {
            width: 140px;
            height: 25px;
        }

        .top {
            height: auto;
            padding-top: 30px;

        }

        .content {
            display: none;
        }

        .bottom {
            .title {
                text-align: center;
                font-size: 14px;
                padding-bottom: 20px;
            }
        }

        .link {
            height: 80px;
            width: 100%;
            font-size: 12px;
            line-height: 100%;

            .sitemap {
                display: none;

                span {
                    margin: 0 10px;
                }
            }
        }

        .flex {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
        }
    }
}

@media screen and(min-width: 720px) {
    .footer-wrap {
        .footer-body {
            display: flex;
            justify-content: space-between;
            padding-bottom: 30px;
        }

        .left {
            width: 260px;
            .footer-content {
                display: none;
            }
        }

        .logo {
            width: 260px;
            height: 50px;
        }

        .top {
            height: 170px;
            padding-top: 30px;

        }

        .content {
            width: 316px;
            font-size: 12px;
            line-height: 17px;
            display: block;
        }

        .bottom {
            .title {
                font-size: 14px;
                padding-bottom: 20px;
            }
        }

        .link {
            height: 80px;
            width: 100%;
            font-size: 12px;
            line-height: 100%;

            .sitemap {
                span {
                    margin: 0 10px;
                }
            }
        }

        .flex {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
        }
    }
}

@media screen and(min-width: 920px) {
    .footer-wrap {
        .footer-body {
            display: flex;
            justify-content: space-between;
            padding-bottom: 30px;
        }

        .left {
            width: 260px;
            .footer-content {
                display: none;
            }
        }

        .logo {
            width: 300px;
            height: 60px;
        }

        .top {
            height: 170px;
            padding-top: 40px;

        }

        .content {
            width: 416px;
            font-size: 12px;
            line-height: 20px;
            display: block;
        }

        .bottom {
            .title {
                font-size: 16px;
                padding-bottom: 20px;
            }
        }

        .link {
            height: 80px;
            width: 100%;
            font-size: 14px;
            line-height: 100%;

            .sitemap {
                span {
                    margin: 0 15px;
                }
            }
        }

        .flex {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
        }
    }
}

@media screen and(min-width: 1080px) {
    .footer-wrap {
        .footer-body {
            display: flex;
            justify-content: space-between;
            padding-bottom: 30px;
        }

        .left {
            width: 300px;
            .footer-content {
                display: none;
            }
        }

        .logo {
            width: 360px;
            height: 70px;
        }

        .top {
            height: 220px;
            padding-top: 40px;

        }

        .content {
            width: 516px;
            font-size: 14px;
            line-height: 30px;
            display: block;
        }

        .bottom {
            .title {
                font-size: 20px;
                padding-bottom: 28px;
            }
        }

        .link {
            height: 80px;
            width: 100%;
            font-size: 16px;
            line-height: 100%;

            .sitemap {
                span {
                    margin: 0 20px;
                }
            }
        }

        .flex {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
        }
    }
}

@media screen and(min-width: 1220px) {
    .footer-wrap {
        .footer-body {
            display: flex;
            justify-content: space-between;
            padding-bottom: 30px;
        }

        .left {
            width: 370px;
            .footer-content {
                display: none;
            }
        }

        .logo {
            width: 380px;
            height: 78px;
        }

        .top {
            height: 230px;
            padding-top: 55px;

        }

        .content {
            width: 516px;
            font-size: 14px;
            line-height: 30px;
            display: block;
        }

        .bottom {
            .title {
                font-size: 20px;
                padding-bottom: 28px;
            }
        }

        .link {
            height: 80px;
            width: 100%;
            font-size: 18px;
            line-height: 100%;

            .sitemap {
                span {
                    margin: 0 20px;
                }
            }
        }

        .flex {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
        }
    }
}

@media screen and(min-width: 1440px) {
    .footer-wrap {
        .footer-body {
            display: flex;
            justify-content: space-between;
            padding-bottom: 30px;
        }

        .left {
            width: 470px;
            .footer-content {
                display: none;
            }
        }

        .logo {
            width: 400px;
            height: 85px;
        }

        .top {
            height: 230px;
            padding-top: 55px;

        }

        .content {
            width: 616px;
            font-size: 14px;
            line-height: 32px;
            display: block;
        }

        .bottom {
            .title {
                font-size: 20px;
                padding-bottom: 28px;
            }
        }

        .link {
            height: 80px;
            width: 100%;
            font-size: 20px;
            line-height: 100%;

            .sitemap {
                span {
                    margin: 0 20px;
                }
            }
        }

        .flex {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
        }
    }
}
</style>
